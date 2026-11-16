package openapi

import (
	"testing"

	"github.com/ccfish86/gadgeto/tonic"
	"github.com/stretchr/testify/assert"
)

// TestFailedOperationDoesNotRegisterPath tests that a path that
// only carries an invalid operation is not registered in the
// specification, so that no empty path item is generated.
func TestFailedOperationDoesNotRegisterPath(t *testing.T) {
	type In struct {
		A string `json:"a"`
	}

	g := gen(t)
	_, err := g.AddOperation("/broken/:missing", "POST", "", tonic.MediaType(), tonic.MediaType(),
		rt(In{}), nil, &OperationInfo{ID: "broken", StatusCode: 201})
	assert.Error(t, err)
	assert.NotContains(t, g.API().Paths, rewritePath("/broken/:missing"))
}

// TestUnsupportedMethodRejected tests that an operation with an
// unknown HTTP method is rejected instead of being silently
// dropped from the specification.
func TestUnsupportedMethodRejected(t *testing.T) {
	g := gen(t)

	_, err := g.AddOperation("/connect", "CONNECT", "", tonic.MediaType(), tonic.MediaType(),
		nil, nil, &OperationInfo{ID: "connect", StatusCode: 200})
	assert.Error(t, err)
	assert.NotContains(t, g.API().Paths, "/connect")

	// Methods are case insensitive.
	_, err = g.AddOperation("/lower", "get", "", tonic.MediaType(), tonic.MediaType(),
		nil, nil, &OperationInfo{ID: "lower", StatusCode: 200})
	assert.NoError(t, err)
	assert.NotNil(t, g.API().Paths["/lower"].GET)
}

// TestRequestBodyComponentNameUniqueness tests that the schema
// generated for a request body is never overwritten, even when
// operations have no ID or IDs that only differ by their case.
func TestRequestBodyComponentNameUniqueness(t *testing.T) {
	type BodyA struct {
		A string `json:"a"`
	}
	type BodyB struct {
		B int `json:"b"`
	}

	g := gen(t)

	// Operations without ID use the name of their input type.
	_, err := g.AddOperation("/a", "POST", "", tonic.MediaType(), tonic.MediaType(),
		rt(BodyA{}), nil, &OperationInfo{StatusCode: 201})
	assert.NoError(t, err)
	_, err = g.AddOperation("/b", "POST", "", tonic.MediaType(), tonic.MediaType(),
		rt(BodyB{}), nil, &OperationInfo{StatusCode: 201})
	assert.NoError(t, err)
	assert.Contains(t, g.API().Components.Schemas, "BodyAInput")
	assert.Contains(t, g.API().Components.Schemas, "BodyBInput")

	// Operations with IDs that produce the same component name
	// are suffixed instead of sharing the same schema.
	_, err = g.AddOperation("/c", "POST", "", tonic.MediaType(), tonic.MediaType(),
		rt(BodyA{}), nil, &OperationInfo{ID: "getUser", StatusCode: 201})
	assert.NoError(t, err)
	_, err = g.AddOperation("/d", "POST", "", tonic.MediaType(), tonic.MediaType(),
		rt(BodyB{}), nil, &OperationInfo{ID: "GetUser", StatusCode: 201})
	assert.NoError(t, err)
	assert.Contains(t, g.API().Components.Schemas, "GetUserInput")
	assert.Contains(t, g.API().Components.Schemas, "GetUserInput2")
	assert.NotSame(t,
		g.API().Components.Schemas["GetUserInput"].Schema,
		g.API().Components.Schemas["GetUserInput2"].Schema,
	)
}

// TestRequestBodyComponentNameSanitized tests that characters
// that are not allowed in a component name are replaced, so that
// the generated reference stays valid.
func TestRequestBodyComponentNameSanitized(t *testing.T) {
	type Body struct {
		A string `json:"a"`
	}

	g := gen(t)
	op, err := g.AddOperation("/pets", "POST", "", tonic.MediaType(), tonic.MediaType(),
		rt(Body{}), nil, &OperationInfo{ID: "pets/getPet", StatusCode: 201})
	assert.NoError(t, err)

	ref := op.RequestBody.Content[tonic.MediaType()].Schema.Reference
	assert.NotNil(t, ref)
	assert.Equal(t, componentsSchemaPath+"Pets_getPetInput", ref.Ref)
}

// TestMultipartStructPartKeepsReference tests that a composite part
// of a multipart request body keeps its schema reference instead of
// being inlined as an empty schema.
func TestMultipartStructPartKeepsReference(t *testing.T) {
	type Part struct {
		A string `json:"a"`
	}
	type Upload struct {
		Part Part `form:"part"`
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
		tonic.MediaType(), rt(Upload{}), nil, &OperationInfo{ID: "upload", StatusCode: 201})
	assert.NoError(t, err)

	mt := op.RequestBody.Content["multipart/form-data"]
	assert.NotNil(t, mt)
	part := mt.Schema.Properties["part"]
	assert.NotNil(t, part)
	assert.NotNil(t, part.Reference)
	assert.Equal(t, componentsSchemaPath+"Part", part.Reference.Ref)
}

// TestPointerQueryParameterStyle tests that pointer fields are
// documented like their value counterpart.
func TestPointerQueryParameterStyle(t *testing.T) {
	type In struct {
		Tags *[]string `query:"tags" explode:"false"`
		Flag *bool     `query:"flag"`
	}

	g := gen(t)

	tags, _, err := g.newParameterFromField(0, rt(In{}), tonic.MediaType())
	assert.NoError(t, err)
	assert.Equal(t, "form", tags.Style)
	assert.NotNil(t, tags.Explode)
	assert.False(t, *tags.Explode)

	flag, _, err := g.newParameterFromField(1, rt(In{}), tonic.MediaType())
	assert.NoError(t, err)
	assert.True(t, flag.AllowEmptyValue)
}

// TestErrorsReturnsCopy tests that the errors collected by the
// generator cannot be altered by the caller.
func TestErrorsReturnsCopy(t *testing.T) {
	g := gen(t)
	g.error(assert.AnError)

	errs := g.Errors()
	assert.Len(t, errs, 1)

	errs[0] = nil
	assert.Len(t, g.Errors(), 1)
	assert.NotNil(t, g.Errors()[0])
}
