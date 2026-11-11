package openapi

import (
	"mime/multipart"
	"testing"

	"github.com/ccfish86/gadgeto/tonic"
	"github.com/stretchr/testify/assert"
)

// TestSetTagExternalDocs tests that the external documentation of a
// tag can be set after its creation.
func TestSetTagExternalDocs(t *testing.T) {
	g := gen(t)
	g.AddTag("pets", "Pet operations")

	docs := &ExternalDocs{URL: "https://example.com/pets"}
	assert.True(t, g.SetTagExternalDocs("pets", docs))
	assert.Equal(t, docs, g.API().Tags[0].ExternalDocs)

	assert.False(t, g.SetTagExternalDocs("unknown", docs))
}

// TestAddSchemaComponent tests that a schema component can be
// registered from a Go type using an explicit name.
func TestAddSchemaComponent(t *testing.T) {
	type Widget struct {
		Name string `json:"name" validate:"required"`
	}
	type Gadget struct {
		ID int `json:"id"`
	}

	g := gen(t)

	ref, err := g.AddSchema("Widget", Widget{})
	assert.NoError(t, err)
	assert.NotNil(t, ref.Reference)
	assert.Equal(t, componentsSchemaPath+"Widget", ref.Reference.Ref)
	assert.Contains(t, g.api.Components.Schemas, "Widget")
	assert.Equal(t, []string{"name"}, g.api.Components.Schemas["Widget"].Schema.Required)

	// A type that was already generated under another name shares
	// its schema with the requested component name.
	ref, err = g.AddSchema("MyGadget", Gadget{})
	assert.NoError(t, err)
	assert.Equal(t, componentsSchemaPath+"MyGadget", ref.Reference.Ref)
	assert.Contains(t, g.api.Components.Schemas, "Gadget")
	assert.Contains(t, g.api.Components.Schemas, "MyGadget")
	assert.Same(t,
		g.api.Components.Schemas["Gadget"].Schema,
		g.api.Components.Schemas["MyGadget"].Schema,
	)

	// Duplicate and invalid names are rejected.
	_, err = g.AddSchema("Widget", Widget{})
	assert.Error(t, err)
	_, err = g.AddSchema("", Widget{})
	assert.Error(t, err)
	_, err = g.AddSchema("Other", nil)
	assert.Error(t, err)
}

// TestAddComponents tests that every component type of the
// specification can be registered under an explicit name.
func TestAddComponents(t *testing.T) {
	g := gen(t)
	content := map[string]*MediaType{
		"application/json": {Schema: &SchemaOrRef{Schema: &Schema{Type: "object"}}},
	}

	assert.NoError(t, g.AddResponse("NotFound", &Response{Description: "Not found"}))
	assert.NoError(t, g.AddParameter("Limit", &Parameter{
		Name:   "limit",
		In:     "query",
		Schema: &SchemaOrRef{Schema: &Schema{Type: "integer"}},
	}))
	assert.NoError(t, g.AddHeader("RateLimit", &Header{Description: "Calls per minute"}))
	assert.NoError(t, g.AddExample("Pet", &Example{Summary: "A pet"}))
	assert.NoError(t, g.AddRequestBody("PetBody", &RequestBody{Content: content}))
	assert.NoError(t, g.AddLink("PetLink", &Link{OperationID: "getPet"}))
	assert.NoError(t, g.AddCallback("PetCallback", Callback{"/callback": &PathItem{}}))
	assert.NoError(t, g.AddSecurityScheme("Bearer", &SecurityScheme{Type: "http", Scheme: "bearer"}))

	c := g.api.Components
	assert.Contains(t, c.Responses, "NotFound")
	assert.Contains(t, c.Parameters, "Limit")
	assert.Contains(t, c.Headers, "RateLimit")
	assert.Contains(t, c.Examples, "Pet")
	assert.Contains(t, c.RequestBodies, "PetBody")
	assert.Contains(t, c.Links, "PetLink")
	assert.Contains(t, c.Callbacks, "PetCallback")
	assert.Contains(t, c.SecuritySchemes, "Bearer")

	// Duplicates and invalid values are rejected.
	assert.Error(t, g.AddResponse("NotFound", &Response{Description: "Dup"}))
	assert.Error(t, g.AddResponse("", &Response{Description: "Empty"}))
	assert.Error(t, g.AddResponse("Nil", nil))
	assert.Error(t, g.AddParameter("Limit", &Parameter{}))
	assert.Error(t, g.AddCallback("", Callback{}))
}

// TestCompositionTags tests that oneOf, anyOf and not schemas are
// generated from the matching struct tags.
func TestCompositionTags(t *testing.T) {
	type Cat struct {
		Name string `json:"name"`
	}
	type Dog struct {
		Name string `json:"name"`
	}
	type Polymorphic struct {
		Pet  interface{} `json:"pet" oneOf:"Cat,Dog"`
		Any  interface{} `json:"any" anyOf:"Cat"`
		Not  interface{} `json:"not" not:"Cat"`
		Full interface{} `json:"full" oneOf:"#/components/schemas/Dog, Dog"`
		Ref  Cat         `json:"ref" oneOf:"Dog"`
	}

	g := gen(t)
	schema := g.resolveSchema(g.newSchemaFromType(rt(Polymorphic{}), tonic.MediaType()))
	assert.NotNil(t, schema)

	pet := schema.Properties["pet"]
	assert.Len(t, pet.OneOf, 2)
	assert.Equal(t, componentsSchemaPath+"Cat", pet.OneOf[0].Reference.Ref)
	assert.Equal(t, componentsSchemaPath+"Dog", pet.OneOf[1].Reference.Ref)

	assert.Len(t, schema.Properties["any"].AnyOf, 1)
	assert.Equal(t, componentsSchemaPath+"Cat", schema.Properties["any"].AnyOf[0].Reference.Ref)

	not := schema.Properties["not"]
	assert.NotNil(t, not.Not)
	assert.Equal(t, componentsSchemaPath+"Cat", not.Not.Reference.Ref)

	// Full references are used as is and names are trimmed.
	full := schema.Properties["full"].OneOf
	assert.Len(t, full, 2)
	assert.Equal(t, componentsSchemaPath+"Dog", full[0].Reference.Ref)
	assert.Equal(t, componentsSchemaPath+"Dog", full[1].Reference.Ref)

	// Overrides on a shared component are carried by an allOf schema
	// instead of modifying the component itself.
	ref := schema.Properties["ref"]
	assert.Nil(t, ref.Reference)
	assert.Len(t, ref.AllOf, 1)
	assert.Equal(t, componentsSchemaPath+"Cat", ref.AllOf[0].Reference.Ref)
	assert.Len(t, ref.OneOf, 1)
	assert.Equal(t, componentsSchemaPath+"Dog", ref.OneOf[0].Reference.Ref)
}

// TestRequestBodyEncodingFromFormTags tests that encoding objects are
// generated for the parts of a multipart request body.
func TestRequestBodyEncodingFromFormTags(t *testing.T) {
	type Upload struct {
		Meta  string                `form:"meta" contentType:"application/json"`
		Tags  []string              `form:"tags" explode:"false"`
		File  *multipart.FileHeader `form:"file"`
		Plain string                `form:"plain"`
	}

	g, err := NewGenerator(&SpecGenConfig{
		ValidatorTag:      tonic.ValidationTag,
		PathLocationTag:   tonic.PathTag,
		QueryLocationTag:  tonic.QueryTag,
		FormLocationTag:   "form",
		HeaderLocationTag: tonic.HeaderTag,
		EnumTag:           tonic.EnumTag,
		DefaultTag:        tonic.DefaultTag,
	})
	assert.NoError(t, err)
	g.UseFullSchemaNames(false)

	op, err := g.AddOperation("/upload", "POST", "", "multipart/form-data",
		tonic.MediaType(), rt(Upload{}), nil, &OperationInfo{ID: "upload", StatusCode: 200})
	assert.NoError(t, err)
	assert.NotNil(t, op.RequestBody)

	mt := op.RequestBody.Content["multipart/form-data"]
	assert.NotNil(t, mt)
	assert.Len(t, mt.Encoding, 2)
	assert.Equal(t, "application/json", mt.Encoding["meta"].ContentType)
	assert.NotNil(t, mt.Encoding["tags"].Explode)
	assert.False(t, *mt.Encoding["tags"].Explode)
	assert.NotContains(t, mt.Encoding, "file")
	assert.NotContains(t, mt.Encoding, "plain")
}

// TestRequestBodyEncodingUrlEncoded tests that encoding objects are
// generated for the properties of an urlencoded request body.
func TestRequestBodyEncodingUrlEncoded(t *testing.T) {
	type Form struct {
		Meta string `form:"meta" contentType:"text/plain"`
	}
	g := gen(t)

	op, err := g.AddOperation("/form", "POST", "", "application/x-www-form-urlencoded",
		tonic.MediaType(), rt(Form{}), nil, &OperationInfo{ID: "form", StatusCode: 200})
	assert.NoError(t, err)

	mt := op.RequestBody.Content["application/x-www-form-urlencoded"]
	assert.NotNil(t, mt)
	assert.Len(t, mt.Encoding, 1)
	assert.Equal(t, "text/plain", mt.Encoding["meta"].ContentType)
}

// TestRequestBodyEncodingIgnoredForJSON tests that no encoding object
// is generated for request bodies that are not form based.
func TestRequestBodyEncodingIgnoredForJSON(t *testing.T) {
	type In struct {
		Meta string `json:"meta" contentType:"text/plain" explode:"false"`
	}
	g := gen(t)

	op, err := g.AddOperation("/json", "POST", "", tonic.MediaType(),
		tonic.MediaType(), rt(In{}), nil, &OperationInfo{ID: "json", StatusCode: 200})
	assert.NoError(t, err)

	for _, mt := range op.RequestBody.Content {
		assert.Empty(t, mt.Encoding)
	}
}

// TestOperationRequestBodyRequired tests that a request body can be
// flagged as required, and stays optional by default.
func TestOperationRequestBodyRequired(t *testing.T) {
	type In struct {
		A string `json:"a"`
	}
	g := gen(t)

	required := true
	op, err := g.AddOperation("/required", "POST", "", tonic.MediaType(), tonic.MediaType(),
		rt(In{}), nil, &OperationInfo{ID: "required", StatusCode: 200, RequestBodyRequired: &required})
	assert.NoError(t, err)
	assert.NotNil(t, op.RequestBody)
	assert.True(t, op.RequestBody.Required)

	op, err = g.AddOperation("/optional", "POST", "", tonic.MediaType(), tonic.MediaType(),
		rt(In{}), nil, &OperationInfo{ID: "optional", StatusCode: 200})
	assert.NoError(t, err)
	assert.NotNil(t, op.RequestBody)
	assert.False(t, op.RequestBody.Required)
}

// TestOperationServersAndCallbacks tests that servers and callbacks
// declared at the operation level are attached to the operation.
func TestOperationServersAndCallbacks(t *testing.T) {
	g := gen(t)
	servers := []*Server{{URL: "https://example.com/v1"}}
	callbacks := map[string]*CallbackOrRef{
		"onEvent": {Callback: Callback{"/callback": &PathItem{}}},
	}

	op, err := g.AddOperation("/events", "POST", "", tonic.MediaType(), tonic.MediaType(),
		nil, nil, &OperationInfo{
			ID:         "events",
			StatusCode: 202,
			Servers:    servers,
			Callbacks:  callbacks,
		})
	assert.NoError(t, err)
	assert.Equal(t, servers, op.Servers)
	assert.Equal(t, callbacks, op.Callbacks)
}
