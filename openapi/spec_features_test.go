package openapi

import (
	"encoding/json"
	"testing"

	"github.com/ccfish86/gadgeto/tonic"
	"github.com/stretchr/testify/assert"
	"gopkg.in/yaml.v2"
)

// TestReferenceObjectsMarshalAsReference tests that a component
// reference is serialized as a bare reference object, without
// the fields of the inlined object.
func TestReferenceObjectsMarshalAsReference(t *testing.T) {
	ref := &Reference{Ref: "#/components/parameters/Foo"}
	expected := `{"$ref":"#/components/parameters/Foo"}`

	tests := []struct {
		name   string
		object interface{}
	}{
		{"parameter", &ParameterOrRef{Reference: ref}},
		{"response", &ResponseOrRef{Reference: ref}},
		{"media type", &MediaTypeOrRef{Reference: ref}},
		{"request body", &RequestBodyOrRef{Reference: ref}},
		{"link", &LinkOrRef{Reference: ref}},
		{"callback", &CallbackOrRef{Reference: ref}},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			b, err := json.Marshal(tt.object)
			assert.NoError(t, err)
			assert.Equal(t, expected, string(b))
		})
	}
}

// TestSchemaNumericBounds tests that zero and fractional numeric
// bounds are preserved.
func TestSchemaNumericBounds(t *testing.T) {
	s := &Schema{
		Type:       "number",
		Maximum:    float64Ptr(0),
		Minimum:    float64Ptr(-1.5),
		MultipleOf: float64Ptr(0.5),
	}
	b, err := json.Marshal(s)
	assert.NoError(t, err)
	assert.Contains(t, string(b), `"maximum":0`)
	assert.Contains(t, string(b), `"minimum":-1.5`)
	assert.Contains(t, string(b), `"multipleOf":0.5`)
}

// TestSchemaSpecificationMetadata tests the schema properties
// that were previously missing from the specification model.
func TestSchemaSpecificationMetadata(t *testing.T) {
	s := &Schema{
		Type:     "string",
		Not:      &SchemaOrRef{Schema: &Schema{Type: "integer"}},
		ReadOnly: true,
		Discriminator: &Discriminator{
			PropertyName: "petType",
			Mapping:      map[string]string{"dog": "#/components/schemas/Dog"},
		},
		XML:          &XML{Name: "pet", Namespace: "urn:pets", Prefix: "p", Attribute: true, Wrapped: true},
		ExternalDocs: &ExternalDocs{URL: "https://example.com", Description: "docs"},
	}
	b, err := json.Marshal(s)
	assert.NoError(t, err)

	for _, want := range []string{
		`"not":{"type":"integer"}`,
		`"readOnly":true`,
		`"propertyName":"petType"`,
		`"mapping":{"dog":"#/components/schemas/Dog"}`,
		`"xml":{"name":"pet","namespace":"urn:pets","prefix":"p","attribute":true,"wrapped":true}`,
		`"externalDocs":{"description":"docs","url":"https://example.com"}`,
	} {
		assert.Contains(t, string(b), want)
	}
	// Write-only is false, hence omitted.
	assert.NotContains(t, string(b), `"writeOnly"`)
}

// TestOperationSpecFieldsWithNilSecurity tests that the operation
// properties added to the model are not dropped when the security
// requirement is nil.
func TestOperationSpecFieldsWithNilSecurity(t *testing.T) {
	op := &Operation{
		Summary:      "subscribe",
		ExternalDocs: &ExternalDocs{URL: "https://example.com/subscribe"},
		Callbacks: map[string]*CallbackOrRef{
			"onEvent": {Callback: Callback{
				"{$request.body#/callbackUrl}": &PathItem{
					POST: &Operation{Responses: Responses{
						"200": {Response: &Response{Description: "ok"}},
					}},
				},
			}},
		},
	}
	b, err := json.Marshal(op)
	assert.NoError(t, err)
	assert.NotContains(t, string(b), `"security"`)
	assert.Contains(t, string(b), `"externalDocs":{"url":"https://example.com/subscribe"}`)
	assert.Contains(t, string(b), `"callbacks":{"onEvent":{"{$request.body#/callbackUrl}"`)

	y, err := yaml.Marshal(op)
	assert.NoError(t, err)
	assert.Contains(t, string(y), "externalDocs:")
	assert.Contains(t, string(y), "callbacks:")
}

// TestResponseLinksAndComponents tests the response links and the
// components that were previously missing.
func TestResponseLinksAndComponents(t *testing.T) {
	r := &Response{
		Description: "ok",
		Links: map[string]*LinkOrRef{
			"address": {Link: &Link{
				OperationID: "getAddress",
				Parameters:  map[string]interface{}{"userId": "$response.body#/id"},
			}},
		},
	}
	b, err := json.Marshal(r)
	assert.NoError(t, err)
	assert.Contains(t, string(b), `"links":{"address":{"operationId":"getAddress"`)

	c := &Components{
		RequestBodies: map[string]*RequestBodyOrRef{
			"Payload": {RequestBody: &RequestBody{
				Content: map[string]*MediaType{
					"application/json": {Schema: &SchemaOrRef{Schema: &Schema{Type: "object"}}},
				},
			}},
		},
		Links: map[string]*LinkOrRef{
			"Self": {Link: &Link{OperationRef: "#/paths/~1widgets/get"}},
		},
		Callbacks: map[string]*CallbackOrRef{
			"OnEvent": {Callback: Callback{"{$request.query.callback}": &PathItem{}}},
		},
	}
	b, err = json.Marshal(c)
	assert.NoError(t, err)
	for _, want := range []string{`"requestBodies"`, `"links"`, `"callbacks"`} {
		assert.Contains(t, string(b), want)
	}
}

// TestParameterAndHeaderSpecFields tests the parameter and header
// properties added to the specification model.
func TestParameterAndHeaderSpecFields(t *testing.T) {
	explode := false
	p := &Parameter{
		Name:          "ids",
		In:            "query",
		Style:         "form",
		Explode:       &explode,
		AllowReserved: true,
		Example:       "a",
		Examples: map[string]*ExampleOrRef{
			"one": {Example: &Example{Value: "a"}},
		},
		Schema: &SchemaOrRef{Schema: &Schema{Type: "array"}},
	}
	b, err := json.Marshal(p)
	assert.NoError(t, err)
	for _, want := range []string{
		`"explode":false`,
		`"allowReserved":true`,
		`"example":"a"`,
		`"examples"`,
	} {
		assert.Contains(t, string(b), want)
	}

	// A parameter may describe its media types instead of using
	// the schema property.
	pc := &Parameter{
		Name: "payload",
		In:   "query",
		Content: map[string]*MediaType{
			"application/json": {Schema: &SchemaOrRef{Schema: &Schema{Type: "object"}}},
		},
	}
	b, err = json.Marshal(pc)
	assert.NoError(t, err)
	assert.Contains(t, string(b), `"content":{"application/json"`)

	h := &Header{
		Description:   "rate limit",
		Style:         "simple",
		Explode:       &explode,
		AllowReserved: true,
		Example:       "42",
	}
	b, err = json.Marshal(h)
	assert.NoError(t, err)
	assert.Contains(t, string(b), `"style":"simple"`)
	assert.Contains(t, string(b), `"explode":false`)
	assert.Contains(t, string(b), `"allowReserved":true`)
	assert.Contains(t, string(b), `"example":"42"`)
}

// TestEncodingExplodeFalse tests that an explicit false value for
// the explode property of an encoding is preserved.
func TestEncodingExplodeFalse(t *testing.T) {
	explode := false
	e := &Encoding{ContentType: "text/plain", Style: "form", Explode: &explode}
	b, err := json.Marshal(e)
	assert.NoError(t, err)
	assert.Contains(t, string(b), `"explode":false`)
}

// TestGeneratorReadOnlyWriteOnlyTags tests that the readOnly and
// writeOnly tags are translated to schema properties.
func TestGeneratorReadOnlyWriteOnlyTags(t *testing.T) {
	type T struct {
		A string `json:"a" readOnly:"true"`
		B string `json:"b" writeOnly:"true"`
		C string `json:"c" readOnly:"oui"` // invalid value, interpreted as false
	}
	g := gen(t)

	schema := g.resolveSchema(g.newSchemaFromType(rt(T{}), tonic.MediaType()))
	assert.NotNil(t, schema)
	assert.True(t, schema.Properties["a"].ReadOnly)
	assert.True(t, schema.Properties["b"].WriteOnly)
	assert.False(t, schema.Properties["c"].ReadOnly)
}

// TestGeneratorXMLTags tests that the 'xml' tag is translated to
// the XML object of the schema for XML media types only.
func TestGeneratorXMLTags(t *testing.T) {
	type T struct {
		A string `json:"a" xml:"name,attr"`
		B string `json:"b" xml:"value"`
		C string `json:"c" xml:"-"`
	}

	// XML media type.
	g := gen(t)
	schema := g.resolveSchema(g.newSchemaFromType(rt(T{}), "application/xml"))
	assert.NotNil(t, schema)
	assert.Equal(t, &XML{Name: "name", Attribute: true}, schema.Properties["name"].XML)
	assert.Equal(t, &XML{Name: "value"}, schema.Properties["value"].XML)
	assert.Nil(t, schema.Properties["-"])
	assert.Nil(t, schema.Properties["c"])

	// JSON media type: the xml tag must be ignored.
	g = gen(t)
	schema = g.resolveSchema(g.newSchemaFromType(rt(T{}), tonic.MediaType()))
	assert.NotNil(t, schema)
	assert.Nil(t, schema.Properties["a"].XML)
	assert.Nil(t, schema.Properties["b"].XML)
}

// TestGeneratorDiscriminatorTag tests that the discriminator tag
// overrides the schema of a shared component using allOf.
func TestGeneratorDiscriminatorTag(t *testing.T) {
	type pet struct {
		Kind string `json:"kind"`
	}
	type holder struct {
		Pet pet `json:"pet" discriminator:"kind"`
	}
	g := gen(t)

	schema := g.resolveSchema(g.newSchemaFromType(rt(holder{}), tonic.MediaType()))
	assert.NotNil(t, schema)
	p := schema.Properties["pet"]
	assert.NotNil(t, p)
	// The reference is wrapped in an allOf schema so that the
	// component is not modified.
	assert.Nil(t, p.Reference)
	assert.Len(t, p.Schema.AllOf, 1)
	assert.Equal(t, componentsSchemaPath+"Pet", p.Schema.AllOf[0].Reference.Ref)
	assert.Equal(t, &Discriminator{PropertyName: "kind"}, p.Discriminator)
}

// TestGeneratorNumericBounds tests that validator tags produce
// numeric bounds, including zero and fractional values.
func TestGeneratorNumericBounds(t *testing.T) {
	type T struct {
		A float64 `json:"a" validate:"max=1.5,min=0"`
		B int     `json:"b" validate:"max=0"`
	}
	g := gen(t)

	schema := g.resolveSchema(g.newSchemaFromType(rt(T{}), tonic.MediaType()))
	assert.NotNil(t, schema)

	a := schema.Properties["a"]
	assert.NotNil(t, a.Maximum)
	assert.Equal(t, 1.5, *a.Maximum)
	assert.NotNil(t, a.Minimum)
	assert.Equal(t, 0.0, *a.Minimum)

	b := schema.Properties["b"]
	assert.NotNil(t, b.Maximum)
	assert.Equal(t, 0.0, *b.Maximum)
}

// TestOperationExternalDocsAndLinks tests that the external
// documentation and the response links of an operation are
// generated from the operation informations.
func TestOperationExternalDocsAndLinks(t *testing.T) {
	type in struct {
		A string `json:"a"`
	}
	type out struct {
		ID string `json:"id"`
	}
	g := gen(t)

	op, err := g.AddOperation("/widgets", "POST", "widgets", tonic.MediaType(), tonic.MediaType(), rt(in{}), rt(out{}), &OperationInfo{
		StatusCode:   200,
		ExternalDocs: &ExternalDocs{URL: "https://example.com/widgets", Description: "Widgets"},
		Responses: []*OperationResponse{
			{
				Code:        "404",
				Description: "Not found",
				Links: map[string]*LinkOrRef{
					"self": {Link: &Link{
						OperationID: "getWidget",
						Parameters:  map[string]interface{}{"id": "$response.body#/id"},
					}},
				},
			},
		},
	})
	assert.NoError(t, err)
	assert.NotNil(t, op)
	assert.Equal(t, "https://example.com/widgets", op.ExternalDocs.URL)

	ror := op.Responses["404"]
	assert.NotNil(t, ror)
	assert.NotNil(t, ror.Links)
	assert.Equal(t, "getWidget", ror.Links["self"].OperationID)
}

// TestGeneratorExternalDocs tests that the external documentation
// of the specification can be set.
func TestGeneratorExternalDocs(t *testing.T) {
	g := gen(t)
	docs := &ExternalDocs{URL: "https://example.com/docs"}
	g.SetExternalDocs(docs)

	assert.Equal(t, docs, g.api.ExternalDocs)
	assert.Equal(t, docs, g.API().ExternalDocs)
}
