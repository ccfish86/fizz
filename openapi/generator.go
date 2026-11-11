package openapi

import (
	"errors"
	"fmt"
	"net/http"
	"reflect"
	"regexp"
	"sort"
	"strconv"
	"strings"

	"github.com/ccfish86/gadgeto/tonic"
	"github.com/gofrs/uuid"
)

const (
	version              = "3.0.1"
	anyMediaType         = "*/*"
	formatTag            = "format"
	deprecatedTag        = "deprecated"
	descriptionTag       = "description"
	readOnlyTag          = "readOnly"
	writeOnlyTag         = "writeOnly"
	discriminatorTag     = "discriminator"
	xmlTag               = "xml"
	oneOfTag             = "oneOf"
	anyOfTag             = "anyOf"
	notTag               = "not"
	contentTypeTag       = "contentType"
	componentsSchemaPath = "#/components/schemas/"
)

var (
	paramsInPathRe = regexp.MustCompile(`\{(.*?)\}`)
	ginPathParamRe = regexp.MustCompile(`\/[:*]([^\/]*)`)
	refRe          = regexp.MustCompile(`[\[\]\.\*,]|((Array)?\w+(-\w+)?/)`) // Replace all words that do not conform [RFC3986-compliant]
)

// mediaTags maps media types to well-known
// struct tags used for marshaling.
var mediaTags = map[string]string{
	"application/json":                  "json",
	"application/xml":                   "xml",
	"application/x-www-form-urlencoded": "form",
}

// Generator is an OpenAPI 3 generator.
type Generator struct {
	api           *OpenAPI
	config        *SpecGenConfig
	schemaTypes   map[reflect.Type]struct{}
	typeNames     map[reflect.Type]string
	dataTypes     map[reflect.Type]*OverridedDataType
	operationsIDS map[string]struct{}
	errors        []error
	fullNames     bool
	sortParams    bool
	sortTags      bool
}

// NewGenerator returns a new OpenAPI generator.
func NewGenerator(conf *SpecGenConfig) (*Generator, error) {
	if conf == nil {
		return nil, errors.New("missing config")
	}
	components := &Components{
		Schemas:    make(map[string]*SchemaOrRef),
		Responses:  make(map[string]*ResponseOrRef),
		Parameters: make(map[string]*ParameterOrRef),
		Headers:    make(map[string]*HeaderOrRef),
	}
	return &Generator{
		config: conf,
		api: &OpenAPI{
			OpenAPI:    version,
			Info:       &Info{},
			Paths:      make(Paths),
			Components: components,
		},
		schemaTypes:   make(map[reflect.Type]struct{}),
		typeNames:     make(map[reflect.Type]string),
		dataTypes:     make(map[reflect.Type]*OverridedDataType),
		operationsIDS: make(map[string]struct{}),
		fullNames:     true,
		sortParams:    true,
		sortTags:      true,
	}, nil
}

// SpecGenConfig represents the configuration
// of the spec generator.
type SpecGenConfig struct {
	// Name of the tag used by the validator.v8
	// package. This is used by the spec generator
	// to determine if a field is required.
	ValidatorTag      string
	PathLocationTag   string
	QueryLocationTag  string
	FormLocationTag   string
	HeaderLocationTag string
	EnumTag           string
	DefaultTag        string
}

// SetInfo uses the given OpenAPI info for the
// current specification.
func (g *Generator) SetInfo(info *Info) {
	g.api.Info = info
}

// SetServers sets the server list for the
// current specification.
func (g *Generator) SetServers(servers []*Server) {
	g.api.Servers = servers
}

// SetSecurityRequirement sets the security options for the
// current specification.
func (g *Generator) SetSecurityRequirement(security []*SecurityRequirement) {
	g.api.Security = security
}

// SetSecuritySchemes sets the security schemes that can be used
// inside the operations of the specification.
func (g *Generator) SetSecuritySchemes(security map[string]*SecuritySchemeOrRef) {
	g.api.Components.SecuritySchemes = security
}

// SetExternalDocs sets the link to the external documentation
// of the current specification.
func (g *Generator) SetExternalDocs(docs *ExternalDocs) {
	g.api.ExternalDocs = docs
}

// AddSchema registers a schema component generated from the given
// Go type under the given name, and returns a reference to it.
// If the type is already registered in the components under a name
// inferred from the type, the schema is shared by both names.
func (g *Generator) AddSchema(name string, t interface{}) (*SchemaOrRef, error) {
	if name == "" {
		return nil, errors.New("schema name is empty")
	}
	if t == nil {
		return nil, errors.New("missing schema type")
	}
	if _, ok := g.api.Components.Schemas[name]; ok {
		return nil, fmt.Errorf("schema %q already exists", name)
	}
	typ := reflect.TypeOf(t)
	sor := g.newSchemaFromType(typ, tonic.MediaType())
	if sor == nil {
		return nil, fmt.Errorf("cannot generate a schema for type %s", typ)
	}
	// The schema of an unnamed type is inlined, while the schema of
	// a named type is registered under the name inferred from the
	// type. In both cases, register it under the requested name.
	schema := sor.Schema
	if sor.Reference != nil {
		schema = g.resolveSchema(sor)
	}
	if schema == nil {
		return nil, fmt.Errorf("cannot generate a schema for type %s", typ)
	}
	g.api.Components.Schemas[name] = &SchemaOrRef{Schema: schema}

	return &SchemaOrRef{Reference: &Reference{Ref: componentsSchemaPath + name}}, nil
}

// addComponent registers the component v in m under the given name.
// The map is initialized lazily, because the components of the
// specification may be left empty until the first component is added.
func addComponent[T any](m map[string]T, name string, v T) (map[string]T, error) {
	if name == "" {
		return m, errors.New("component name is empty")
	}
	if _, ok := m[name]; ok {
		return m, fmt.Errorf("component %q already exists", name)
	}
	if m == nil {
		m = make(map[string]T)
	}
	m[name] = v

	return m, nil
}

// AddResponse registers a response component under the given name.
func (g *Generator) AddResponse(name string, r *Response) error {
	if r == nil {
		return errors.New("missing response")
	}
	m, err := addComponent(g.api.Components.Responses, name, &ResponseOrRef{Response: r})
	g.api.Components.Responses = m

	return err
}

// AddParameter registers a parameter component under the given name.
func (g *Generator) AddParameter(name string, p *Parameter) error {
	if p == nil {
		return errors.New("missing parameter")
	}
	m, err := addComponent(g.api.Components.Parameters, name, &ParameterOrRef{Parameter: p})
	g.api.Components.Parameters = m

	return err
}

// AddHeader registers a header component under the given name.
func (g *Generator) AddHeader(name string, h *Header) error {
	if h == nil {
		return errors.New("missing header")
	}
	m, err := addComponent(g.api.Components.Headers, name, &HeaderOrRef{Header: h})
	g.api.Components.Headers = m

	return err
}

// AddExample registers an example component under the given name.
func (g *Generator) AddExample(name string, e *Example) error {
	if e == nil {
		return errors.New("missing example")
	}
	m, err := addComponent(g.api.Components.Examples, name, &ExampleOrRef{Example: e})
	g.api.Components.Examples = m

	return err
}

// AddRequestBody registers a request body component under the given name.
func (g *Generator) AddRequestBody(name string, r *RequestBody) error {
	if r == nil {
		return errors.New("missing request body")
	}
	m, err := addComponent(g.api.Components.RequestBodies, name, &RequestBodyOrRef{RequestBody: r})
	g.api.Components.RequestBodies = m

	return err
}

// AddLink registers a link component under the given name.
func (g *Generator) AddLink(name string, l *Link) error {
	if l == nil {
		return errors.New("missing link")
	}
	m, err := addComponent(g.api.Components.Links, name, &LinkOrRef{Link: l})
	g.api.Components.Links = m

	return err
}

// AddCallback registers a callback component under the given name.
func (g *Generator) AddCallback(name string, c Callback) error {
	if c == nil {
		return errors.New("missing callback")
	}
	m, err := addComponent(g.api.Components.Callbacks, name, &CallbackOrRef{Callback: c})
	g.api.Components.Callbacks = m

	return err
}

// AddSecurityScheme registers a security scheme component under the
// given name.
func (g *Generator) AddSecurityScheme(name string, s *SecurityScheme) error {
	if s == nil {
		return errors.New("missing security scheme")
	}
	m, err := addComponent(g.api.Components.SecuritySchemes, name, &SecuritySchemeOrRef{SecurityScheme: s})
	g.api.Components.SecuritySchemes = m

	return err
}

// API returns a copy of the internal OpenAPI object.
func (g *Generator) API() *OpenAPI {
	cpy := *g.api
	return &cpy
}

// Errors returns the errors thar occurred during
// the generation of the specification.
func (g *Generator) Errors() []error {
	return g.errors
}

// UseFullSchemaNames defines whether the generator should generates
// a full name for the components using the package name of the type
// as a prefix.
// Omitting the package part of the name increases the risks of conflicts.
// It is the responsibility of the developper to ensure that unique type
// names are used across all the packages of the application.
// Default to true.
func (g *Generator) UseFullSchemaNames(b bool) {
	g.fullNames = b
}

// SetSortParams controls whether the generator should
// sort the parameters of an operation by location and
// name in ascending order.
func (g *Generator) SetSortParams(b bool) {
	g.sortParams = b
}

// SetSortTags controls whether the generator should
// sort the global tags sections.
func (g *Generator) SetSortTags(b bool) {
	g.sortTags = b
}

// OverrideTypeName registers a custom name for a
// type that will override the default generation
// and have precedence over types that implements
// the Typer interface.
func (g *Generator) OverrideTypeName(t reflect.Type, name string) error {
	if name == "" {
		return errors.New("type name is empty")
	}
	if t.Kind() == reflect.Ptr {
		t = t.Elem()
	}
	if _, ok := g.typeNames[t]; ok {
		return errors.New("type name already overrided")
	}
	g.typeNames[t] = name

	return nil
}

// OverrideDataType registers a custom schema type and
// format for the given type that will overrided the
// default generation.
func (g *Generator) OverrideDataType(t reflect.Type, typ, format string) error {
	if typ == "" {
		return errors.New("type is mandatory")
	}
	if t.Kind() == reflect.Ptr {
		t = t.Elem()
	}
	if _, ok := g.dataTypes[t]; ok {
		return errors.New("data type already overrided")
	}
	g.dataTypes[t] = &OverridedDataType{
		format: format,
		typ:    typ,
	}
	return nil
}

func (g *Generator) datatype(t reflect.Type) DataType {
	if dt, ok := g.dataTypes[t]; ok {
		return dt
	}
	return DataTypeFromType(t)
}

// AddTag adds a new tag to the OpenAPI specification.
// If a tag already exists with the same name, it is
// overwritten.
func (g *Generator) AddTag(name, desc string) {
	if name == "" {
		return
	}
	// Search for an existing tag with the same name,
	// and update its description before returning
	// if one is found.
	for _, tag := range g.api.Tags {
		if tag != nil {
			if tag.Name == name {
				tag.Description = desc
				return
			}
		}
	}
	// Add a new tag to the spec.
	g.api.Tags = append(g.api.Tags, &Tag{
		Name:        name,
		Description: desc,
	})
	if g.sortTags {
		sort.SliceStable(g.api.Tags, func(i, j int) bool {
			if g.api.Tags[i] != nil && g.api.Tags[j] != nil {
				return g.api.Tags[i].Name < g.api.Tags[j].Name
			}
			return false
		})
	}
}

// SetTagExternalDocs sets the external documentation of an existing
// tag, and returns false if no tag with the given name exists.
func (g *Generator) SetTagExternalDocs(name string, docs *ExternalDocs) bool {
	for _, tag := range g.api.Tags {
		if tag != nil && tag.Name == name {
			tag.ExternalDocs = docs
			return true
		}
	}
	return false
}

// AddOperation add a new operation to the OpenAPI specification
// using the method and path of the route and the tonic
// handler informations.
func (g *Generator) AddOperation(path, method, tag, requestMediaType, responseMediaType string, in, out reflect.Type, info *OperationInfo) (*Operation, error) {
	if info == nil {
		return nil, errors.New("missing operation info")
	}
	op := &Operation{
		ID: uuid.Must(uuid.NewV4()).String(),
	}
	path = rewritePath(path)

	// Ensure that the provided operation ID is unique.
	// A duplicate is an error, because the operation ID is
	// used to identify the operation among all the operations
	// described in the API.
	if info.ID != "" {
		if _, ok := g.operationsIDS[info.ID]; ok {
			return nil, fmt.Errorf("operation ID %q is not unique", info.ID)
		}
	}
	// If a PathItem does not exists for this
	// path, create a new one.
	item, ok := g.api.Paths[path]
	if !ok {
		item = new(PathItem)
		g.api.Paths[path] = item
	}
	// An operation cannot be registered twice for the
	// same method and path, silently overwriting the
	// previous one would hide a configuration mistake.
	if operationByMethod(item, method) != nil {
		return nil, fmt.Errorf("operation %s %s already exists", method, path)
	}
	// Create a new operation and set it
	// to the according method of the PathItem.
	op.ID = info.ID
	op.Summary = info.Summary
	op.Description = info.Description
	op.Deprecated = info.Deprecated
	op.Responses = make(Responses)
	op.XCodeSamples = info.XCodeSamples
	op.Security = info.Security
	op.XInternal = info.XInternal
	op.ExternalDocs = info.ExternalDocs
	op.Servers = info.Servers
	op.Callbacks = info.Callbacks
	if tag != "" {
		op.Tags = append(op.Tags, tag)
	}
	// Operations with methods GET/HEAD cannot have a body.
	// Non parameters fields will be ignored.
	allowBody := method != http.MethodGet &&
		method != http.MethodHead

	if in != nil {
		if in.Kind() == reflect.Ptr {
			in = in.Elem()
		}
		if in.Kind() != reflect.Struct {
			return nil, errors.New("input type is not a struct")
		}
		if err := g.setOperationParams(op, in, in, allowBody, path, requestMediaType); err != nil {
			return nil, err
		}
	}
	// A request body may be declared as required even when none
	// of its properties is required.
	if info.RequestBodyRequired != nil && op.RequestBody != nil {
		op.RequestBody.Required = *info.RequestBodyRequired
	}
	// Generate the default response from the tonic
	// handler return type. If the handler has no output
	// type, the response won't have a schema.
	if err := g.setOperationResponse(op, out, strconv.Itoa(info.StatusCode), responseMediaType, info.StatusDescription, info.Headers, nil, nil); err != nil {
		return nil, err
	}
	// Generate additional responses from the operation
	// informations.
	for _, resp := range info.Responses {
		if resp != nil {
			if err := g.setOperationResponse(op,
				reflect.TypeOf(resp.Model),
				resp.Code,
				responseMediaType,
				resp.Description,
				resp.Headers,
				resp.Example,
				resp.Examples,
			); err != nil {
				return nil, err
			}
			// Attach the links declared for this response.
			if len(resp.Links) > 0 {
				if ror, ok := op.Responses[resp.Code]; ok && ror.Response != nil {
					ror.Response.Links = resp.Links
				}
			}
		}
	}
	setOperationBymethod(item, op, method)
	if info.ID != "" {
		g.operationsIDS[info.ID] = struct{}{}
	}

	return op, nil
}

// rewritePath converts a Gin operation path that use
// colons and asterisks to declare path parameters, to
// an OpenAPI representation that use curly braces.
func rewritePath(path string) string {
	return ginPathParamRe.ReplaceAllString(path, "/{$1}")
}

// operationByMethod returns the operation of item for the
// given method, or nil if none is registered.
func operationByMethod(item *PathItem, method string) *Operation {
	switch method {
	case "GET":
		return item.GET
	case "PUT":
		return item.PUT
	case "POST":
		return item.POST
	case "PATCH":
		return item.PATCH
	case "HEAD":
		return item.HEAD
	case "OPTIONS":
		return item.OPTIONS
	case "TRACE":
		return item.TRACE
	case "DELETE":
		return item.DELETE
	}
	return nil
}

// setOperationBymethod sets the operation op to the appropriate
// field of item according to the given method.
func setOperationBymethod(item *PathItem, op *Operation, method string) {
	switch method {
	case "GET":
		item.GET = op
	case "PUT":
		item.PUT = op
	case "POST":
		item.POST = op
	case "PATCH":
		item.PATCH = op
	case "HEAD":
		item.HEAD = op
	case "OPTIONS":
		item.OPTIONS = op
	case "TRACE":
		item.TRACE = op
	case "DELETE":
		item.DELETE = op
	}
}

func isResponseCodeRange(code string) bool {
	if len(code) != 3 {
		return false
	}
	// First char must be 1, 2, 3, 4 or 5.
	pre := code[0]
	if pre < 49 || pre > 53 {
		return false
	}
	// Last two chars are wildcard letter X.
	if code[1] != 'X' || code[2] != 'X' {
		return false
	}
	return true
}

// defaultResponseDescription returns a description for the given
// response code when none is provided. The description of a
// response is a mandatory property per the specification.
func defaultResponseDescription(code string) string {
	if code == "default" {
		return "Default response"
	}
	if isResponseCodeRange(code) {
		return code[:1] + "XX response"
	}
	return ""
}

// setOperationResponse adds a response to the operation that
// return the type t with the given media type and status code.
func (g *Generator) setOperationResponse(op *Operation, t reflect.Type, code, mt, desc string, headers []*ResponseHeader, example interface{}, examples map[string]interface{}) error {
	if _, ok := op.Responses[code]; ok {
		// A response already exists for this code.
		return fmt.Errorf("response with code %s already exists", code)
	}
	if example != nil && examples != nil {
		// Cannot set both 'example' and 'examples' values
		return fmt.Errorf("'example' and 'examples' are mutually exclusive")
	}

	// Check that the response code is valid per the spec:
	// https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#patterned-fields-1
	if code != "default" {
		if !isResponseCodeRange(code) { // ignore ranges
			// Convert code to number and check that it is
			// between 100 and 599.
			ci, err := strconv.Atoi(code)
			if err != nil {
				return fmt.Errorf("invalid response code: %s", err)
			}
			if ci < 100 || ci > 599 {
				return fmt.Errorf("response code out of range: %s", code)
			}
			if desc == "" {
				desc = http.StatusText(ci)
			}
		}
	}
	// The description of a response is mandatory per the
	// specification, so provide a sensible default instead
	// of marshaling an empty value.
	if desc == "" {
		desc = defaultResponseDescription(code)
	}
	r := &Response{
		Description: desc,
		Content:     make(map[string]*MediaTypeOrRef),
		Headers:     make(map[string]*HeaderOrRef),
	}

	var castedExamples map[string]*ExampleOrRef
	if examples != nil {
		castedExamples = make(map[string]*ExampleOrRef)
		for name, val := range examples {
			castedExamples[name] = &ExampleOrRef{Example: &Example{Value: val}}
		}
	}

	// The response may have no content type specified,
	// in which case we don't assign a schema.
	schema := g.newSchemaFromType(t, mt)

	if schema != nil || example != nil || castedExamples != nil {
		r.Content[mt] = &MediaTypeOrRef{MediaType: &MediaType{
			Schema:   schema,
			Example:  example,
			Examples: castedExamples,
		}}
	}
	// Assign headers.
	for _, h := range headers {
		if h != nil {
			var sor *SchemaOrRef
			if h.Model == nil {
				// default to string if no type is given.
				sor = &SchemaOrRef{Schema: &Schema{Type: "string"}}
			} else {
				sor = g.newSchemaFromType(reflect.TypeOf(h.Model), mt)
			}
			r.Headers[h.Name] = &HeaderOrRef{Header: &Header{
				Description: h.Description,
				Schema:      sor,
			}}
		}
	}
	op.Responses[code] = &ResponseOrRef{Response: r}

	return nil
}

// setOperationParams adds the fields of the struct type t
// to the given operation.
func (g *Generator) setOperationParams(op *Operation, t, parent reflect.Type, allowBody bool, path string, requestMediaType string) error {
	if t.Kind() != reflect.Struct {
		return errors.New("input type is not a struct")
	}
	if err := g.buildParamsRecursive(op, t, parent, allowBody, requestMediaType); err != nil {
		return err
	}
	// Input fields that are neither path- nor query-bound
	// have been extracted into the operation's RequestBody
	// If the RequestBody is not nil, give it a name and
	// move it to the openapi spec's components/schemas section
	// Replace the RequestBody's schema with a reference
	// to the named schema in components/schemas
	if op.RequestBody != nil {
		mt := requestMediaType
		if mt == "" {
			mt = anyMediaType
		}
		sch := op.RequestBody.Content[mt].Schema
		if sch != nil && !isMultipartFormData(requestMediaType) {
			name := strings.Title(op.ID) + "Input"
			g.api.Components.Schemas[name] = sch
			op.RequestBody.Content[mt].Schema = &SchemaOrRef{Reference: &Reference{
				Ref: componentsSchemaPath + name,
			}}
		}
	}
	// Extract all the path parameter names.
	matches := paramsInPathRe.FindAllStringSubmatch(path, -1)
	var pathParams []string
	for _, m := range matches {
		pathParams = append(pathParams, m[1])
	}
	// Check that all declared path parameters are
	// defined in the operation.
	for _, pp := range pathParams {
		has := false
		for _, param := range op.Parameters {
			if param.In == "path" && param.Name == pp {
				has = true
				break
			}
		}
		if !has {
			return fmt.Errorf("semantic error for path %s: declared path parameter %s needs to be defined at operation level", path, pp)
		}
	}
	// Sort operations parameters by location and name
	// in ascending order.
	if g.sortParams {
		paramsOrderedBy(
			g.paramyByLocation,
			g.paramyByName,
		).Sort(op.Parameters)
	}
	return nil
}

func (g *Generator) buildParamsRecursive(op *Operation, t, parent reflect.Type, allowBody bool, requestMediaType string) error {
	for i := 0; i < t.NumField(); i++ {
		sf := t.Field(i)
		sft := sf.Type

		// Dereference pointer.
		if sft.Kind() == reflect.Ptr {
			sft = sft.Elem()
		}
		isUnexported := sf.PkgPath != ""

		if sf.Anonymous {
			if isUnexported && sft.Kind() != reflect.Struct || isMultipartFormData(requestMediaType) {
				// Ignore embedded fields of unexported non-struct types.
				continue
			}
			// Do not ignore embedded fields of unexported struct
			// types since they may have exported fields, and recursively
			// use its fields as operations params. This allow developers
			// to reuse input models using type composition.
			if sft.Kind() == reflect.Struct {
				// If the type of the embedded struct is the same as
				// the topmost parent, skip it to avoid an infinite
				// recursive loop.
				if sft == parent {
					g.error(&FieldError{
						Message:  "recursive embedding",
						Name:     sf.Name,
						TypeName: g.typeName(parent),
						Type:     parent,
					})
				} else if err := g.buildParamsRecursive(op, sft, parent, allowBody, requestMediaType); err != nil {
					return err
				}
			}
			continue
		} else if isUnexported {
			// Ignore unexported non-embedded fields.
			continue
		}
		if err := g.addStructFieldToOperation(op, t, i, allowBody, requestMediaType); err != nil {
			return err
		}
	}
	return nil
}

func (g *Generator) paramyByName(p1, p2 *ParameterOrRef) bool {
	return g.resolveParameter(p1).Name < g.resolveParameter(p2).Name
}

func (g *Generator) paramyByLocation(p1, p2 *ParameterOrRef) bool {
	return locationsOrder[g.resolveParameter(p1).In] < locationsOrder[g.resolveParameter(p2).In]
}

// addStructFieldToOperation add the struct field of the type
// t at index idx to the operation op. A field will be considered
// as a parameter if it has a valid location tag key, or it will
// be treated as part of the request body.
func (g *Generator) addStructFieldToOperation(op *Operation, t reflect.Type, idx int, allowBody bool, requestMediaType string) error {
	sf := t.Field(idx)

	param, location, err := g.newParameterFromField(idx, t, requestMediaType)
	if err != nil {
		return err
	}
	if param != nil {
		// Check if a parameter with same name/location
		// already exists.
		for _, p := range op.Parameters {
			if p != nil && (p.Name == param.Name) && (p.In == param.In) {
				g.error(&FieldError{
					Message:           "duplicate parameter",
					Name:              param.Name,
					TypeName:          g.typeName(t),
					Type:              t,
					ParameterLocation: param.In,
				})
				return nil
			}
		}

		if location == "form" && isMultipartFormData(requestMediaType) {
			if op.RequestBody == nil {
				op.RequestBody = &RequestBody{
					Content: make(map[string]*MediaType),
				}
				schema := &Schema{
					Type:       "object",
					Properties: make(map[string]*SchemaOrRef),
				}
				op.RequestBody.Content[requestMediaType] = &MediaType{
					Schema: &SchemaOrRef{Schema: schema},
				}
			}
			if _, ok := op.RequestBody.Content[requestMediaType]; !ok {
				schema := &Schema{
					Type:       "object",
					Properties: make(map[string]*SchemaOrRef),
				}
				op.RequestBody.Content[requestMediaType] = &MediaType{
					Schema: &SchemaOrRef{Schema: schema},
				}
			}
			op.RequestBody.Content[requestMediaType].Schema.Properties[param.Name] = &SchemaOrRef{
				Schema: param.Schema.Schema,
			}
			// Attach the encoding of the part when its field declares
			// encoding related tags.
			setRequestBodyEncoding(op.RequestBody.Content[requestMediaType], param.Name, sf, requestMediaType)
		} else {
			op.Parameters = append(op.Parameters, &ParameterOrRef{
				Parameter: param,
			})
		}
	} else {
		if !allowBody {
			return nil
		}
		// If binding is disabled for this field, don't
		// add it to the request body. This allow using
		// a model type as an operation input while also
		// omitting some fields that are computed by the
		// server.
		if sf.Tag.Get("binding") == "-" {
			return nil
		}
		// The field is not a parameter, add it to
		// the request body.
		if op.RequestBody == nil {
			op.RequestBody = &RequestBody{
				Content: make(map[string]*MediaType),
			}
		}
		// Select the corresponding media type for the
		// given field tag, or default to any type.
		mt := requestMediaType
		if mt == "" {
			mt = anyMediaType
		}
		var schema *Schema

		// Create the media type if no fields
		// have been added yet.
		if _, ok := op.RequestBody.Content[mt]; !ok {
			schema = &Schema{
				Type:       "object",
				Properties: make(map[string]*SchemaOrRef),
			}
			op.RequestBody.Content[mt] = &MediaType{
				Schema: &SchemaOrRef{Schema: schema},
			}
		} else {
			schema = op.RequestBody.Content[mt].Schema.Schema
		}
		fname := fieldNameFromTag(sf, mediaTags[requestMediaType])

		// Check if a field with the same name already exists.
		if _, ok := schema.Properties[fname]; ok {
			g.error(&FieldError{
				Message:           "duplicate request body parameter",
				Name:              fname,
				TypeName:          g.typeName(t),
				Type:              t,
				ParameterLocation: "body",
			})
			return nil
		}

		var required bool
		// The required property of a field is not part of its
		// own schema but specified in the parent schema.
		if fname != "" && g.isStructFieldRequired(sf) {
			required = true
			schema.Required = append(schema.Required, fname)
			sort.Strings(schema.Required)
		}
		sfs := g.newSchemaFromStructField(sf, required, fname, t, requestMediaType)
		if schema != nil {
			schema.Properties[fname] = sfs
		}
		// Attach the encoding of the property when its field declares
		// encoding related tags.
		setRequestBodyEncoding(op.RequestBody.Content[mt], fname, sf, mt)
	}
	return nil
}

// setRequestBodyEncoding attaches an encoding object to the media type
// of a request body for the given property when the struct field
// declares encoding related tags. Encoding objects only apply to form
// based payloads, i.e. multipart and urlencoded payloads.
func setRequestBodyEncoding(mt *MediaType, name string, sf reflect.StructField, mediaType string) {
	if mt == nil || name == "" {
		return
	}
	if !isMultipartFormData(mediaType) && mediaType != "application/x-www-form-urlencoded" {
		return
	}
	enc := &Encoding{}
	has := false
	if ct := strings.TrimSpace(sf.Tag.Get(contentTypeTag)); ct != "" {
		enc.ContentType = ct
		has = true
	}
	if v, ok := sf.Tag.Lookup(tonic.ExplodeTag); ok {
		// Ignore invalid values.
		if b, err := strconv.ParseBool(v); err == nil {
			enc.Explode = &b
			has = true
		}
	}
	if !has {
		return
	}
	if mt.Encoding == nil {
		mt.Encoding = make(map[string]*Encoding)
	}
	mt.Encoding[name] = enc
}

// newParameterFromField create a new operation parameter
// from the struct field at index idx in type in. Only the
// parameters of type path, query, header or cookie are concerned.
func (g *Generator) newParameterFromField(idx int, t reflect.Type, mediaType string) (*Parameter, string, error) {
	field := t.Field(idx)

	var parameterLocations []string
	if isMultipartFormData(mediaType) {
		parameterLocations = []string{
			g.config.PathLocationTag,
			g.config.FormLocationTag,
			g.config.QueryLocationTag,
			g.config.HeaderLocationTag,
		}
	} else {
		parameterLocations = []string{
			g.config.PathLocationTag,
			g.config.QueryLocationTag,
			g.config.HeaderLocationTag,
		}
	}

	location, err := g.paramLocation(field, parameterLocations, t)
	if err != nil {
		return nil, location, err
	}
	// The parameter location is empty, return nil
	// to indicate that the field is not a parameter.
	if location == "" {
		return nil, location, nil
	}
	name, err := tonic.ParseTagKey(field.Tag.Get(location))
	if err != nil {
		return nil, location, err
	}
	required := g.isStructFieldRequired(field)

	// Path parameters are always required.
	if location == g.config.PathLocationTag {
		required = true
	}
	// Consider invalid values as false.
	deprecated, _ := strconv.ParseBool(field.Tag.Get(deprecatedTag))

	p := &Parameter{
		Name:        name,
		In:          location,
		Description: field.Tag.Get(descriptionTag),
		Required:    required,
		Deprecated:  deprecated,
		Schema:      g.newSchemaFromStructField(field, required, name, t, mediaType),
	}
	if field.Type.Kind() == reflect.Bool && location == g.config.QueryLocationTag {
		p.AllowEmptyValue = true
	}
	// Style.
	if location == g.config.QueryLocationTag {
		if field.Type.Kind() == reflect.Slice || field.Type.Kind() == reflect.Array {
			explode := true // default
			if t := field.Tag.Get(tonic.ExplodeTag); t != "" {
				if v, err := strconv.ParseBool(t); err == nil { // ignore invalid values
					explode = v
				}
			}
			p.Explode = &explode
			p.Style = "form" // default in spec, but make it obvious
		}
	}
	return p, location, nil
}

// paramLocation parses the tags of the struct field to extract
// the location of an operation parameter.
func (g *Generator) paramLocation(f reflect.StructField, parameterLocations []string, in reflect.Type) (string, error) {
	var c, p int

	has := func(name string, tag reflect.StructTag, i int) {
		if _, ok := tag.Lookup(name); ok {
			c++
			// save name position to extract
			// the value of the unique key.
			p = i
		}
	}
	for i, n := range parameterLocations {
		has(n, f.Tag, i)
	}
	if c == 0 {
		// This will be considered to be part
		// of the request body.
		return "", nil
	}
	if c > 1 {
		return "", &FieldError{
			Message:  "conflicting parameter location",
			Name:     f.Name,
			TypeName: g.typeName(in),
			Type:     in,
		}
	}
	return parameterLocations[p], nil
}

// newSchemaFromStructField returns a new Schema builded
// from the field's type and its tags.
func (g *Generator) newSchemaFromStructField(sf reflect.StructField, required bool, fname string, parent reflect.Type, mediaType string) *SchemaOrRef {
	sor := g.newSchemaFromType(sf.Type, mediaType)
	if sor == nil {
		return nil
	}
	// Get the underlying schema, it may be a reference
	// to a component, and update its fields using the
	// informations in the struct field tags.
	schema := g.resolveSchema(sor)

	if schema == nil {
		return sor
	}
	// A schema that references a shared component must not be
	// modified in place, otherwise the field tags would leak to
	// every other usage of this component in the specification.
	// Wrap the reference in an allOf schema that carries the
	// field-level overrides instead.
	if sor.Reference != nil {
		if !hasSchemaOverrides(sf, mediaType, g.config) {
			return sor
		}
		schema = &Schema{
			AllOf: []*SchemaOrRef{{Reference: sor.Reference}},
		}
		sor = &SchemaOrRef{Schema: schema}
	}
	// Default value.
	// See section 'Common Mistakes' at
	// https://swagger.io/docs/specification/describing-parameters/
	if d := sf.Tag.Get(g.config.DefaultTag); d != "" {
		if required {
			g.error(&FieldError{
				Message:  "field cannot be required and have a default value",
				Name:     fname,
				Type:     sf.Type,
				TypeName: g.typeName(sf.Type),
				Parent:   parent,
			})
		} else {
			if v, err := stringToType(d, sf.Type); err != nil {
				g.error(&FieldError{
					Message:  fmt.Sprintf("default value %s cannot be converted to field type: %s", d, err),
					Name:     fname,
					Type:     sf.Type,
					TypeName: g.typeName(sf.Type),
					Parent:   parent,
				})
			} else {
				schema.Default = v
			}
		}
	}
	// Enum.
	// Must be applied to underlying items schema if the
	// parameter is an array, instead of the parameter schema.
	enum := g.enumFromStructField(sf, fname, parent)

	if schema.Type == "array" && schema.Items != nil {
		itemsSchema := g.resolveSchema(schema.Items)
		if itemsSchema != nil {
			itemsSchema.Enum = enum
		}
	} else {
		schema.Enum = enum
	}
	// Field description.
	if desc, ok := sf.Tag.Lookup(descriptionTag); ok {
		schema.Description = desc
	}
	// Deprecated.
	// Consider invalid values as false.
	schema.Deprecated, _ = strconv.ParseBool(sf.Tag.Get(deprecatedTag))
	// Read-only and write-only properties.
	// Consider invalid values as false.
	schema.ReadOnly, _ = strconv.ParseBool(sf.Tag.Get(readOnlyTag))
	schema.WriteOnly, _ = strconv.ParseBool(sf.Tag.Get(writeOnlyTag))
	// Discriminator of a polymorphic schema.
	if d := strings.TrimSpace(sf.Tag.Get(discriminatorTag)); d != "" {
		schema.Discriminator = &Discriminator{PropertyName: d}
	}
	// XML metadata of the property, when the media type is XML.
	if x := xmlFromStructField(sf, mediaType); x != nil {
		schema.XML = x
	}
	// Composition keywords. They reference other components by name,
	// or using a full reference (starting with '#').
	if v := strings.TrimSpace(sf.Tag.Get(oneOfTag)); v != "" {
		schema.OneOf = schemaRefsFromTag(v)
	}
	if v := strings.TrimSpace(sf.Tag.Get(anyOfTag)); v != "" {
		schema.AnyOf = schemaRefsFromTag(v)
	}
	if v := strings.TrimSpace(sf.Tag.Get(notTag)); v != "" {
		if refs := schemaRefsFromTag(v); len(refs) > 0 {
			schema.Not = refs[0]
		}
	}

	// Update schema fields related to the JSON Validation
	// spec based on the content of the validator tag.
	schema = g.updateSchemaValidation(schema, sf)

	// Allow overidding schema properties that were
	// auto inferred manually via tags.
	if t, ok := sf.Tag.Lookup(formatTag); ok {
		schema.Format = t
	}

	// Set example value from tag to schema
	if e := strings.TrimSpace(sf.Tag.Get("example")); e != "" {
		if parsed, err := parseExampleValue(sf.Type, e); err != nil {
			g.error(&FieldError{
				Message:  fmt.Sprintf("could not parse the example value %q of field %q: %s", e, fname, err),
				Name:     fname,
				Type:     sf.Type,
				TypeName: g.typeName(sf.Type),
				Parent:   parent,
			})
		} else {
			schema.Example = parsed
		}
	}

	return sor
}

func (g *Generator) enumFromStructField(sf reflect.StructField, fname string, parent reflect.Type) []interface{} {
	var enum []interface{}

	etag := sf.Tag.Get(g.config.EnumTag)
	if etag != "" {
		values := strings.Split(etag, ",")
		sftype := sf.Type

		// Use underlying element type if it's an array/slice/pointer
		for sftype.Kind() == reflect.Ptr || sftype.Kind() == reflect.Slice || sftype.Kind() == reflect.Array {
			sftype = sftype.Elem()
		}
		for _, val := range values {
			if v, err := stringToType(val, sftype); err != nil {
				g.error(&FieldError{
					Message:  fmt.Sprintf("enum value %s cannot be converted to field type: %s", val, err),
					Name:     fname,
					Type:     sf.Type,
					TypeName: g.typeName(sf.Type),
					Parent:   parent,
				})
			} else {
				enum = append(enum, v)
			}
		}
	}
	return enum
}

// newSchemaFromType creates a new OpenAPI schema from
// the given reflect type.
func (g *Generator) newSchemaFromType(t reflect.Type, mediaType string) *SchemaOrRef {
	if t == nil {
		return nil
	}
	var nullable bool

	// Dereference pointer.
	if t.Kind() == reflect.Ptr {
		t = t.Elem()
		nullable = true
	} else if t.Implements(tofNullable) {
		i, ok := reflect.New(t).Interface().(Nullable)
		if ok {
			nullable = i.Nullable()
		}
	}
	dt := g.datatype(t)

	if dt == TypeUnsupported {
		g.error(&TypeError{
			Message: "unsupported type",
			Type:    t,
		})
		return nil
	}
	if dt == TypeComplex {
		switch t.Kind() {
		case reflect.Ptr, reflect.Slice, reflect.Array, reflect.Map:
			// The type is a pointer, a map, a slice or an array.
			// buildSchemaRecursive dereferences pointers and
			// builds the schema of the underlying type.
			sor := g.buildSchemaRecursive(t, mediaType)
			// A reference to a component cannot carry the nullable
			// property, which is consistent with a pointer to struct.
			if sor != nil && sor.Schema != nil && nullable {
				sor.Schema.Nullable = true
			}
			return sor
		case reflect.Struct:
			return g.newSchemaFromStruct(t, mediaType)
		}
	}
	if dt == TypeAny {
		return &SchemaOrRef{
			Schema: &Schema{
				Nullable:    true,
				Description: "Value of any type, including null",
			},
		}
	}
	schema := &Schema{
		Type:     dt.Type(),
		Format:   dt.Format(),
		Nullable: nullable,
	}
	return &SchemaOrRef{Schema: schema}
}

// buildSchemaRecursive recursively decomposes the complex
// type t into subsequent schemas.
func (g *Generator) buildSchemaRecursive(t reflect.Type, mediaType string) *SchemaOrRef {
	schema := &Schema{}
	// Switch over Golang types.
	switch t {
	case tofTime:
		schema.Type, schema.Format = TypeDateTime.Type(), TypeDateTime.Format()
	case tofDuration:
		schema.Type, schema.Format = TypeDuration.Type(), TypeDuration.Format()
	case tofByteSlice:
		schema.Type, schema.Format = TypeByte.Type(), TypeByte.Format()
	case tofNetIP:
		schema.Type, schema.Format = TypeIP.Type(), TypeIP.Format()
	case tofNetURL:
		schema.Type, schema.Format = TypeURL.Type(), TypeURL.Format()
	case tofEmptyInterface:
		schema.Type, schema.Format = TypeAny.Type(), TypeAny.Format()
	case tofFileHeader:
		schema.Type, schema.Format = TypeFile.Type(), TypeFile.Format()
	default:
		switch t.Kind() {
		case reflect.Ptr:
			return g.buildSchemaRecursive(t.Elem(), mediaType)
		case reflect.Struct:
			return g.newSchemaFromStruct(t, mediaType)
		case reflect.Map:
			// Map type is considered as a type "object"
			// and should declare underlying items type
			// in additional properties field.
			schema.Type = "object"

			// JSON Schema allow only strings as object key.
			if t.Key().Kind() != reflect.String {
				g.error(&TypeError{
					Message: "encountered type Map with keys of unsupported type",
					Type:    t,
				})
				return nil
			}
			schema.AdditionalProperties = g.buildSchemaRecursive(t.Elem(), mediaType)
		case reflect.Slice, reflect.Array:
			// Slice/Array types are considered as a type
			// "array" and should declare underlying items
			// type in items field.
			schema.Type = "array"

			// Go arrays have fixed size.
			if t.Kind() == reflect.Array {
				schema.MinItems = t.Len()
				schema.MaxItems = t.Len()
			}
			schema.Items = g.buildSchemaRecursive(t.Elem(), mediaType)
		default:
			dt := g.datatype(t)
			schema.Type, schema.Format = dt.Type(), dt.Format()
		}
	}

	return &SchemaOrRef{Schema: schema}
}

// structSchema returns an OpenAPI schema that describe
// the Go struct represented by the type t.
func (g *Generator) newSchemaFromStruct(t reflect.Type, mediaType string) *SchemaOrRef {
	if t.Kind() != reflect.Struct {
		return nil
	}

	typeName := g.typeName(t)
	name := refRe.ReplaceAllString(strings.Replace(typeName, "[]", "Array", 1), "$2")

	// If the type of the field has already been registered,
	// skip the schema generation to avoid a recursive loop.
	// We're not returning directly a reference from the components,
	// because there is no guarantee the generation is complete yet.
	if _, ok := g.schemaTypes[t]; ok {
		return &SchemaOrRef{Reference: &Reference{
			Ref: componentsSchemaPath + name,
		}}
	}
	schema := &Schema{
		Type:       "object",
		Properties: make(map[string]*SchemaOrRef),
	}
	// Register the type once before diving into
	// the recursive hole if it has a name. Anonymous
	// struct are all considered unique.
	if name != "" {
		g.schemaTypes[t] = struct{}{}
	}
	schema = g.flattenStructSchema(t, t, schema, mediaType)

	sor := &SchemaOrRef{Schema: schema}

	// Register the schema within the speccomponents and return a
	// relative reference. Unnamed types, like anonymous structs,
	// will always be inlined in the specification.
	if name != "" {
		g.api.Components.Schemas[name] = sor

		return &SchemaOrRef{Reference: &Reference{
			Ref: componentsSchemaPath + name,
		}}
	}
	// Return an inlined schema for types with no name.
	return sor
}

// flattenStructSchema recursively flatten the embedded
// fields of the struct type t to the given schema.
func (g *Generator) flattenStructSchema(t, parent reflect.Type, schema *Schema, mediaType string) *Schema {
	for i := 0; i < t.NumField(); i++ {
		f := t.Field(i)
		ft := f.Type

		// Dereference pointer.
		if ft.Kind() == reflect.Ptr {
			ft = ft.Elem()
		}
		isUnexported := f.PkgPath != ""
		mediaTag := mediaTags[mediaType]
		_, hasTag := f.Tag.Lookup(mediaTag)

		if f.Anonymous && !hasTag {
			if isUnexported && ft.Kind() != reflect.Struct {
				// Ignore embedded fields of unexported non-struct types.
				continue
			}
			// Do not ignore embedded fields of unexported struct
			// types since they may have exported fields.
			if ft.Kind() == reflect.Struct {
				// However, if the type of the embedded field is the same
				// as the topmost parent, skip it to avoid an infinite
				// recursive loop.
				if ft == parent {
					g.error(&FieldError{
						Message:  "recursive embedding",
						Name:     f.Name,
						TypeName: g.typeName(parent),
						Type:     parent,
						Parent:   parent,
					})
				} else {
					schema = g.flattenStructSchema(ft, parent, schema, mediaType)
				}
			}
			continue
		} else if isUnexported {
			// Ignore unexported non-embedded fields.
			continue
		}

		fname := fieldNameFromTag(f, mediaTags[mediaType])
		if fname == "" {
			// Field has no name, skip it.
			continue
		}
		var required bool
		// The required property of a field is not part of its
		// own schema but specified in the parent schema.
		if fname != "" && g.isStructFieldRequired(f) {
			required = true
			schema.Required = append(schema.Required, fname)
			sort.Strings(schema.Required)
		}
		sfs := g.newSchemaFromStructField(f, required, fname, t, mediaType)
		if sfs != nil {
			schema.Properties[fname] = sfs
		}
	}
	return schema
}

// isStructFieldRequired returns whether a struct field
// is required. The information is read from the field
// tag 'binding'.
func (g *Generator) isStructFieldRequired(sf reflect.StructField) bool {
	if t, ok := sf.Tag.Lookup(g.config.ValidatorTag); ok {
		options := strings.Split(t, ",")
		for _, o := range options {
			// As soon as we see a 'dive' or 'keys'
			// options, the following options won't
			// apply to the given field.
			if o == "dive" || o == "keys" {
				return false
			}
			if o == "required" {
				return true
			}
		}
	}
	return false
}

// resolveSchema returns either the inlined schema
// in s or the one referenced in the API components.
func (g *Generator) resolveSchema(s *SchemaOrRef) *Schema {
	if s.Schema != nil && s.Reference == nil {
		return s.Schema
	}
	if s.Reference != nil {
		parts := strings.Split(s.Reference.Ref, "/")
		if len(parts) == 4 {
			if parts[0] == "#" && // relative ref
				parts[1] == "components" &&
				parts[2] == "schemas" &&
				parts[3] != "" {
				ref, ok := g.api.Components.Schemas[parts[3]]
				if ok && ref != nil {
					return ref.Schema
				}
				return nil
			}
		}
	}
	return nil
}

// resolveParameter returns either the inlined parameter
// in p or the one referenced in the API components.
func (g *Generator) resolveParameter(p *ParameterOrRef) *Parameter {
	// Parameters are always automatically inlined in the spec.
	if p.Parameter != nil && p.Reference == nil {
		return p.Parameter
	}
	return nil
}

// typeName returns the unique name of a type, which is
// the concatenation of the package name and the name
// of the given type, transformed to CamelCase without
// a dot separator between the two parts.
func (g *Generator) typeName(t reflect.Type) string {
	if t.Kind() == reflect.Ptr {
		t = t.Elem()
	}
	if t.PkgPath() == "" {
		// Predeclared or unnamed type, return an empty
		// name, the schema will be inlined in the spec.
		return ""
	}
	// If the name of the type was overidded,
	// use it in priority.
	if name, ok := g.typeNames[t]; ok {
		return name
	}
	// Create a new instance of t's type and use a
	// type assertion to check if it implements the
	// Typer interface.
	v := reflect.New(t)
	if v.CanInterface() {
		if tn, ok := v.Interface().(Typer); ok {
			return tn.TypeName()
		}
	}
	name := t.String() // package.name.
	sp := strings.Index(name, ".")
	pkg := name[:sp]

	// If the package is the main package, remove
	// the package part from the name.
	if pkg == "main" {
		pkg = ""
	}
	typ := name[sp+1:]

	if !g.fullNames {
		return strings.Title(typ)
	}
	return strings.Title(pkg) + strings.Title(typ)
}

// updateSchemaValidation fills the fields of the schema
// related to the JSON Schema Validation RFC based on the
// content of the validator tag.
// see https://godoc.org/gopkg.in/go-playground/validator.v8
func (g *Generator) updateSchemaValidation(schema *Schema, sf reflect.StructField) *Schema {
	ts := sf.Tag.Get(g.config.ValidatorTag)
	if ts == "" {
		return schema
	}
	ft := sf.Type
	if sf.Type.Kind() == reflect.Ptr {
		ft = sf.Type.Elem()
	}
	tags := strings.Split(ts, ",")

	for _, t := range tags {
		if t == "dive" || t == "keys" {
			break
		}
		if t == "email" {
			schema.Format = "email"
			break
		}
		// Tags can be joined together with an OR operator.
		parts := strings.Split(t, "|")

		for _, p := range parts {
			var k, v string
			// Split k/v pair using separator.
			sepIdx := strings.Index(p, "=")
			if sepIdx == -1 {
				k = p
			} else {
				k = p[:sepIdx]
				v = p[sepIdx+1:]
			}
			// Handle validators with value.
			switch k {
			case "len", "max", "min", "eq", "gt", "gte", "lt", "lte":
				n, err := strconv.Atoi(v)
				if err != nil {
					// Numeric bounds may be fractional values.
					if f, ferr := strconv.ParseFloat(v, 64); ferr == nil && isNumber(ft) {
						switch k {
						case "max", "lte":
							schema.Maximum = float64Ptr(f)
						case "min", "gte":
							schema.Minimum = float64Ptr(f)
						}
					}
					continue
				}
				switch k {
				case "len":
					setSchemaLen(schema, n, ft)
				case "max", "lte":
					setSchemaMax(schema, n, ft)
				case "min", "gte":
					setSchemaMin(schema, n, ft)
				case "lt":
					setSchemaMax(schema, n-1, ft)
				case "gt":
					setSchemaMin(schema, n+1, ft)
				case "eq":
					setSchemaEq(schema, n, ft)
				}
			}
		}
	}
	return schema
}

func (g *Generator) error(err error) {
	g.errors = append(g.errors, err)
}

// hasSchemaOverrides returns whether the given struct field declares
// tags that override the schema generated from its type.
func hasSchemaOverrides(sf reflect.StructField, mediaType string, conf *SpecGenConfig) bool {
	if sf.Tag.Get(conf.DefaultTag) != "" {
		return true
	}
	if sf.Tag.Get(conf.EnumTag) != "" {
		return true
	}
	if _, ok := sf.Tag.Lookup(descriptionTag); ok {
		return true
	}
	if deprecated, _ := strconv.ParseBool(sf.Tag.Get(deprecatedTag)); deprecated {
		return true
	}
	if readOnly, _ := strconv.ParseBool(sf.Tag.Get(readOnlyTag)); readOnly {
		return true
	}
	if writeOnly, _ := strconv.ParseBool(sf.Tag.Get(writeOnlyTag)); writeOnly {
		return true
	}
	if _, ok := sf.Tag.Lookup(formatTag); ok {
		return true
	}
	if strings.TrimSpace(sf.Tag.Get("example")) != "" {
		return true
	}
	if strings.TrimSpace(sf.Tag.Get(discriminatorTag)) != "" {
		return true
	}
	if strings.TrimSpace(sf.Tag.Get(oneOfTag)) != "" {
		return true
	}
	if strings.TrimSpace(sf.Tag.Get(anyOfTag)) != "" {
		return true
	}
	if strings.TrimSpace(sf.Tag.Get(notTag)) != "" {
		return true
	}
	if xmlFromStructField(sf, mediaType) != nil {
		return true
	}
	return false
}

// xmlFromStructField returns the XML metadata of the given struct
// field built from the standard 'xml' tag. The tag is only
// considered for XML media types, since its syntax is specific
// to the encoding/xml package.
func xmlFromStructField(sf reflect.StructField, mediaType string) *XML {
	if mediaTags[mediaType] != "xml" {
		return nil
	}
	v, ok := sf.Tag.Lookup(xmlTag)
	if !ok {
		return nil
	}
	parts := strings.Split(strings.TrimSpace(v), ",")
	// The field is ignored for XML payloads, and nested
	// paths such as 'parent>child' cannot be expressed
	// by the XML object of the specification.
	if parts[0] == "-" || strings.Contains(parts[0], ">") {
		return nil
	}
	x := &XML{Name: parts[0]}
	for _, p := range parts[1:] {
		if p == "attr" {
			x.Attribute = true
		}
	}
	if x.Name == "" && !x.Attribute {
		return nil
	}
	return x
}

// schemaRefsFromTag returns a list of schema references built from a
// comma-separated list of component names. An item that starts with
// '#' or with an URL scheme is used as is, otherwise it is considered
// to be the name of a schema in the components of the specification.
func schemaRefsFromTag(v string) []*SchemaOrRef {
	var refs []*SchemaOrRef
	for _, name := range strings.Split(v, ",") {
		name = strings.TrimSpace(name)
		if name == "" {
			continue
		}
		if !strings.HasPrefix(name, "#") &&
			!strings.HasPrefix(name, "http://") &&
			!strings.HasPrefix(name, "https://") {
			name = componentsSchemaPath + name
		}
		refs = append(refs, &SchemaOrRef{Reference: &Reference{Ref: name}})
	}
	return refs
}

// fieldTagName returns the name of a struct field
// extracted from a serialization tag using its name.
func fieldNameFromTag(sf reflect.StructField, tagName string) string {
	v, ok := sf.Tag.Lookup(tagName)
	if !ok {
		return sf.Name
	}
	parts := strings.Split(strings.TrimSpace(v), ",")

	// Split return a one item slice if
	// the input string is empty, thus we
	// don't check the length.
	name := parts[0]
	if name == "" {
		return sf.Name
	}
	if name == "-" {
		return ""
	}
	return name
}

// / parseExampleValue is used to transform the string representation of the example value to the correct type.
func parseExampleValue(t reflect.Type, value string) (interface{}, error) {
	// If the type implements Exampler use the ParseExample method to create the example
	i, ok := reflect.New(t).Interface().(Exampler)
	if ok {
		return i.ParseExample(value)
	}

	switch t.Kind() {
	case reflect.Bool:
		return strconv.ParseBool(value)
	case reflect.String:
		return value, nil
	case reflect.Int, reflect.Int8, reflect.Int16, reflect.Int32, reflect.Int64:
		i, err := strconv.ParseInt(value, 10, t.Bits())
		if err != nil {
			return nil, err
		}
		switch t.Bits() {
		case 8:
			return int8(i), nil
		case 16:
			return int16(i), nil
		case 32:
			return int32(i), nil
		default:
		}
		return i, nil
	case reflect.Uint, reflect.Uint8, reflect.Uint16, reflect.Uint32, reflect.Uint64:
		u, err := strconv.ParseUint(value, 10, t.Bits())
		if err != nil {
			return nil, err
		}
		switch t.Bits() {
		case 8:
			return uint8(u), nil
		case 16:
			return uint16(u), nil
		case 32:
			return uint32(u), nil
		default:
		}
		return u, nil
	case reflect.Float32, reflect.Float64:
		return strconv.ParseFloat(value, t.Bits())
	case reflect.Ptr:
		return parseExampleValue(t.Elem(), value)
	case reflect.Struct:
		return nil, fmt.Errorf("type %s does not implement Exampler", t.String())
	default:
		return nil, fmt.Errorf("unsuported type: %s", t.String())
	}
}

// isMultipartFormData 是否表单
func isMultipartFormData(mediaType string) bool {
	return strings.HasPrefix(mediaType, "multipart/form-data")
}
