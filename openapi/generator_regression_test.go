package openapi

import (
	"encoding/json"
	"reflect"
	"strings"
	"testing"

	"github.com/ccfish86/gadgeto/tonic"
	"github.com/stretchr/testify/assert"
	"gopkg.in/yaml.v2"
)

// TestOperationIDMustBeUnique tests that an operation ID
// cannot be registered twice in the specification.
func TestOperationIDMustBeUnique(t *testing.T) {
	g := gen(t)

	_, err := g.AddOperation("/dup", "GET", "", tonic.MediaType(), tonic.MediaType(), nil, nil,
		&OperationInfo{ID: "Duplicate", StatusCode: 200})
	assert.NoError(t, err)

	_, err = g.AddOperation("/dup/other", "GET", "", tonic.MediaType(), tonic.MediaType(), nil, nil,
		&OperationInfo{ID: "Duplicate", StatusCode: 200})
	assert.Error(t, err)
}

// TestOperationMethodMustBeUnique tests that a method can
// only be registered once for a given path.
func TestOperationMethodMustBeUnique(t *testing.T) {
	g := gen(t)

	_, err := g.AddOperation("/same", "GET", "", tonic.MediaType(), tonic.MediaType(), nil, nil,
		&OperationInfo{ID: "SamePathFirst", StatusCode: 200})
	assert.NoError(t, err)

	_, err = g.AddOperation("/same", "GET", "", tonic.MediaType(), tonic.MediaType(), nil, nil,
		&OperationInfo{ID: "SamePathSecond", StatusCode: 200})
	assert.Error(t, err)
}

// TestAddOperationWithoutInfo tests that a nil operation
// info returns an error instead of panicking.
func TestAddOperationWithoutInfo(t *testing.T) {
	g := gen(t)

	assert.NotPanics(t, func() {
		_, err := g.AddOperation("/nil", "GET", "", tonic.MediaType(), tonic.MediaType(), nil, nil, nil)
		assert.Error(t, err)
	})
}

// TestResponseDescriptionDefaults tests that a response
// always carry a description, which is mandatory per the
// specification, even for the 'default' code and ranges.
func TestResponseDescriptionDefaults(t *testing.T) {
	g := gen(t)
	op := &Operation{Responses: make(Responses)}

	assert.NoError(t, g.setOperationResponse(op, nil, "default", tonic.MediaType(), "", nil, nil, nil))
	assert.Equal(t, "Default response", op.Responses["default"].Description)

	assert.NoError(t, g.setOperationResponse(op, nil, "5XX", tonic.MediaType(), "", nil, nil, nil))
	assert.Equal(t, "5XX response", op.Responses["5XX"].Description)

	b, err := json.Marshal(op.Responses["default"])
	assert.NoError(t, err)
	assert.Contains(t, string(b), `"description":"Default response"`)
}

// TestReferencedSchemaOverrides tests that field level tags
// do not leak to a shared component schema, and are instead
// carried by an allOf wrapper.
func TestReferencedSchemaOverrides(t *testing.T) {
	type shared struct {
		A string `json:"a"`
	}
	type holder struct {
		First  *shared `json:"first" description:"first usage"`
		Second *shared `json:"second"`
	}

	g := gen(t)
	sor := g.newSchemaFromType(reflect.TypeOf(holder{}), tonic.MediaType())
	assert.NotNil(t, sor)

	// The shared component must be left untouched.
	comp, ok := g.API().Components.Schemas[g.typeName(reflect.TypeOf(shared{}))]
	assert.True(t, ok)
	assert.NotNil(t, comp)
	assert.Empty(t, comp.Schema.Description)

	holderSchema, ok := g.API().Components.Schemas[g.typeName(reflect.TypeOf(holder{}))]
	assert.True(t, ok)
	assert.NotNil(t, holderSchema)

	// The first field overrides the description,
	// so it references the component through an allOf wrapper.
	first := holderSchema.Schema.Properties["first"]
	assert.NotNil(t, first)
	assert.Nil(t, first.Reference)
	assert.Len(t, first.Schema.AllOf, 1)
	assert.Equal(t, componentsSchemaPath+g.typeName(reflect.TypeOf(shared{})), first.Schema.AllOf[0].Reference.Ref)
	assert.Equal(t, "first usage", first.Schema.Description)

	// The second field has no overrides, so it keeps
	// a plain reference to the component.
	second := holderSchema.Schema.Properties["second"]
	assert.NotNil(t, second)
	assert.NotNil(t, second.Reference)
}

// TestQueryParameterExplodeFalse tests that an explicit
// false explode value is not dropped from the spec.
func TestQueryParameterExplodeFalse(t *testing.T) {
	type in struct {
		Tags []string `query:"tags" explode:"false"`
	}

	g := gen(t)
	p, location, err := g.newParameterFromField(0, reflect.TypeOf(in{}), tonic.MediaType())
	assert.NoError(t, err)
	assert.Equal(t, g.config.QueryLocationTag, location)
	assert.NotNil(t, p.Explode)
	assert.False(t, *p.Explode)

	b, err := json.Marshal(p)
	assert.NoError(t, err)
	assert.Contains(t, string(b), `"explode":false`)
}

// TestFormURLEncodedFieldNames tests that the properties of
// an urlencoded request body are named using the 'form' tag.
func TestFormURLEncodedFieldNames(t *testing.T) {
	type in struct {
		Name string `form:"user_name"`
	}

	g := gen(t)
	op := &Operation{Responses: make(Responses)}
	mt := "application/x-www-form-urlencoded"

	err := g.setOperationParams(op, reflect.TypeOf(in{}), reflect.TypeOf(in{}), true, "/form", mt)
	assert.NoError(t, err)
	assert.NotNil(t, op.RequestBody)

	ref := op.RequestBody.Content[mt].Schema.Reference
	assert.NotNil(t, ref)

	schema, ok := g.API().Components.Schemas[strings.TrimPrefix(ref.Ref, componentsSchemaPath)]
	assert.True(t, ok)
	assert.NotNil(t, schema)
	assert.Contains(t, schema.Schema.Properties, "user_name")
	assert.NotContains(t, schema.Schema.Properties, "Name")
}

// TestRewritePath tests the conversion of Gin path
// parameters to the OpenAPI representation.
func TestRewritePath(t *testing.T) {
	assert.Equal(t, "/foo/{bar}", rewritePath("/foo/:bar"))
	assert.Equal(t, "/files/{filepath}", rewritePath("/files/*filepath"))
}

// TestAllOfMarshaledAsArray tests that the composition
// keywords are marshaled as arrays.
func TestAllOfMarshaledAsArray(t *testing.T) {
	s := &Schema{
		AllOf: []*SchemaOrRef{{Reference: &Reference{Ref: componentsSchemaPath + "Foo"}}},
	}
	b, err := json.Marshal(s)
	assert.NoError(t, err)
	assert.Equal(t, `{"allOf":[{"$ref":"#/components/schemas/Foo"}]}`, string(b))
}

// TestSchemaFromMultiLevelPointer tests that multiple levels of
// indirection do not degrade composite types to primitives.
func TestSchemaFromMultiLevelPointer(t *testing.T) {
	g := gen(t)

	// Pointer to pointer to slice.
	sor := g.newSchemaFromType(reflect.PtrTo(reflect.PtrTo(reflect.TypeOf([]string{}))), tonic.MediaType())
	assert.NotNil(t, sor)
	assert.Equal(t, "array", sor.Type)
	assert.True(t, sor.Nullable)
	assert.NotNil(t, sor.Items)
	assert.Equal(t, "string", sor.Items.Type)

	// Pointer to map.
	sor = g.newSchemaFromType(reflect.PtrTo(reflect.TypeOf(map[string]int{})), tonic.MediaType())
	assert.NotNil(t, sor)
	assert.Equal(t, "object", sor.Type)
	assert.True(t, sor.Nullable)
	assert.NotNil(t, sor.AdditionalProperties)

	// Pointer to slice.
	sor = g.newSchemaFromType(reflect.PtrTo(reflect.TypeOf([]string{})), tonic.MediaType())
	assert.NotNil(t, sor)
	assert.Equal(t, "array", sor.Type)
	assert.True(t, sor.Nullable)

	// Pointer to pointer to struct still yields a reference
	// to the component of the struct.
	type multiPointerStruct struct {
		A string `json:"a"`
	}
	sor = g.newSchemaFromType(reflect.PtrTo(reflect.PtrTo(reflect.TypeOf(multiPointerStruct{}))), tonic.MediaType())
	assert.NotNil(t, sor)
	assert.NotNil(t, sor.Reference)
}

// TestOAuthFlowScopes tests that the mandatory scopes property
// of an OAuth flow is always marshaled, even when empty.
func TestOAuthFlowScopes(t *testing.T) {
	flow := OAuthFlow{TokenURL: "https://example.com/token"}

	b, err := json.Marshal(flow)
	assert.NoError(t, err)
	assert.Equal(t, `{"tokenUrl":"https://example.com/token","scopes":{}}`, string(b))

	flow.Scopes = map[string]string{"read:pets": "read your pets"}
	b, err = json.Marshal(&flow)
	assert.NoError(t, err)
	assert.Equal(t, `{"tokenUrl":"https://example.com/token","scopes":{"read:pets":"read your pets"}}`, string(b))

	y, err := yaml.Marshal(OAuthFlow{TokenURL: "https://example.com/token"})
	assert.NoError(t, err)
	assert.Contains(t, string(y), "scopes: {}")
}

// TestOmittedFieldWithDashLocationTag tests that a field whose parameter
// location tag value is "-" (e.g. `query:"-" json:"-"`) is fully excluded
// from the specification instead of being documented as a parameter
// literally named "-". This reproduces the reported regression.
func TestOmittedFieldWithDashLocationTag(t *testing.T) {
	type in struct {
		ID       int64  `path:"id"`
		Internal string `query:"-" json:"-"`
		Secret   string `header:"-"`
	}

	g := gen(t)
	op, err := g.AddOperation("/del/:id", "DELETE", "", tonic.MediaType(), tonic.MediaType(),
		reflect.TypeOf(&in{}), nil, &OperationInfo{ID: "DeleteItem", StatusCode: 204})
	assert.NoError(t, err)

	// Only the real path parameter must be documented.
	assert.Len(t, op.Parameters, 1)
	for _, p := range op.Parameters {
		assert.NotEqual(t, "-", p.Name)
	}
	assert.Equal(t, "id", op.Parameters[0].Name)
	assert.Equal(t, "path", op.Parameters[0].In)
}

// TestOmittedFieldWithDashValueAndOptions tests that the "-" value is
// detected even when the tag carries comma separated options, and that
// it also applies to the form location used by multipart payloads.
func TestOmittedFieldWithDashValueAndOptions(t *testing.T) {
	type in struct {
		A string `query:"-,omitempty"`
		B string `form:"-"`
		C string `query:"kept"`
	}

	g := gen(t)
	op := &Operation{Responses: make(Responses)}
	err := g.setOperationParams(op, reflect.TypeOf(in{}), reflect.TypeOf(in{}), false, "/x", tonic.MediaType())
	assert.NoError(t, err)

	assert.Len(t, op.Parameters, 1)
	assert.Equal(t, "kept", op.Parameters[0].Name)
}
