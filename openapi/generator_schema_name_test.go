package openapi

import (
	"strings"
	"testing"

	"github.com/ccfish86/gadgeto/tonic"
	"github.com/stretchr/testify/assert"
)

// Builder collides with strings.Builder when the package part of
// the schema names is omitted.
type Builder struct {
	Value string `json:"value"`
}

// HttpResult and CodeItem are used to check the names generated for
// generic instantiations.
type HttpResult[T any] struct {
	Code int `json:"code"`
	Data T   `json:"data"`
}

type CodeItem[T any] struct {
	Value T `json:"value"`
}

// TestDuplicateSchemaNamesAreDisambiguated tests that two types
// sharing the same inferred name do not overwrite each other's
// schema, and that the conflict is reported.
func TestDuplicateSchemaNamesAreDisambiguated(t *testing.T) {
	g := gen(t)

	first := g.newSchemaFromType(rt(Builder{}), tonic.MediaType())
	assert.NotNil(t, first)
	assert.Equal(t, componentsSchemaPath+"Builder", first.Reference.Ref)

	second := g.newSchemaFromType(rt(strings.Builder{}), tonic.MediaType())
	assert.NotNil(t, second)
	assert.Equal(t, componentsSchemaPath+"Builder2", second.Reference.Ref)

	// Each type keeps its own schema.
	schemas := g.API().Components.Schemas
	assert.Contains(t, schemas, "Builder")
	assert.Contains(t, schemas, "Builder2")
	assert.Contains(t, schemas["Builder"].Schema.Properties, "value")
	assert.NotContains(t, schemas["Builder2"].Schema.Properties, "value")

	// The conflict is reported as a warning: it does not prevent
	// the specification from being generated, and each type keeps
	// its own component.
	assert.Empty(t, g.Errors())
	warnings := g.Warnings()
	assert.Len(t, warnings, 1)
	assert.Contains(t, warnings[0].Error(), "duplicate schema name")
}

// TestCollidingTypesKeepDistinctReferences tests that the fields
// of a struct reference their own schema, even when the inferred
// names of their types collide.
func TestCollidingTypesKeepDistinctReferences(t *testing.T) {
	type Holder struct {
		Local *Builder         `json:"local"`
		Std   *strings.Builder `json:"std"`
	}

	g := gen(t)
	schema := g.resolveSchema(g.newSchemaFromType(rt(Holder{}), tonic.MediaType()))
	assert.NotNil(t, schema)

	local := schema.Properties["local"]
	assert.Equal(t, componentsSchemaPath+"Builder", local.Reference.Ref)

	std := schema.Properties["std"]
	assert.Equal(t, componentsSchemaPath+"Builder2", std.Reference.Ref)
	assert.Empty(t, g.Errors())
	assert.Len(t, g.Warnings(), 1)
}

// TestNoConflictWithFullSchemaNames tests that no conflict is
// reported when the package part is kept in the schema names.
func TestNoConflictWithFullSchemaNames(t *testing.T) {
	g, err := NewGenerator(genConfig)
	assert.NoError(t, err)

	g.newSchemaFromType(rt(Builder{}), tonic.MediaType())
	g.newSchemaFromType(rt(strings.Builder{}), tonic.MediaType())

	schemas := g.API().Components.Schemas
	assert.Contains(t, schemas, "OpenapiBuilder")
	assert.Contains(t, schemas, "StringsBuilder")
	assert.Empty(t, g.Errors())
	assert.Empty(t, g.Warnings())
}

// TestGenericInstantiationNameCollision tests that distinct generic
// instantiations whose names collapse to the same component name do
// not prevent the specification from being generated.
func TestGenericInstantiationNameCollision(t *testing.T) {
	g := gen(t)

	first := g.newSchemaFromType(rt(HttpResult[[]*CodeItem[int]]{}), tonic.MediaType())
	second := g.newSchemaFromType(rt(HttpResult[[]CodeItem[int]]{}), tonic.MediaType())
	assert.NotNil(t, first)
	assert.NotNil(t, second)
	assert.NotEqual(t, first.Reference.Ref, second.Reference.Ref)

	// Each instantiation keeps its own component and the conflict
	// only produces a warning.
	assert.NotNil(t, g.resolveSchema(first))
	assert.NotNil(t, g.resolveSchema(second))
	assert.Empty(t, g.Errors())
	assert.Len(t, g.Warnings(), 1)
}

// TestOverriddenTypeNameConflict tests that two different types
// overridden with the same name are disambiguated instead of
// sharing the same schema.
func TestOverriddenTypeNameConflict(t *testing.T) {
	type First struct {
		A string `json:"a"`
	}
	type Second struct {
		B string `json:"b"`
	}

	g := gen(t)
	assert.NoError(t, g.OverrideTypeName(rt(First{}), "Pet"))
	assert.NoError(t, g.OverrideTypeName(rt(Second{}), "Pet"))

	first := g.newSchemaFromType(rt(First{}), tonic.MediaType())
	assert.Equal(t, componentsSchemaPath+"Pet", first.Reference.Ref)

	second := g.newSchemaFromType(rt(Second{}), tonic.MediaType())
	assert.Equal(t, componentsSchemaPath+"Pet2", second.Reference.Ref)

	assert.Contains(t, g.API().Components.Schemas["Pet"].Schema.Properties, "a")
	assert.Contains(t, g.API().Components.Schemas["Pet2"].Schema.Properties, "b")
	assert.Empty(t, g.Errors())
	assert.Len(t, g.Warnings(), 1)
}
