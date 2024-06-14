package main

import (
	"fmt"
	"reflect"
	"strings"

	"github.com/ccfish86/gadgeto/tonic"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"

	"github.com/ccfish86/fizz/v2"
	"github.com/ccfish86/fizz/v2/openapi"
	"github.com/ccfish86/fizz/v2/ui"
)

// NewRouter returns a new router for the
// Pet Store.
func NewRouter() (*fizz.Fizz, error) {
	engine := gin.New()
	engine.Use(cors.Default())

	fizz := fizz.NewFromEngine(engine)

	// Override type names.
	// fizz.Generator().OverrideTypeName(reflect.TypeOf(Fruit{}), "SweetFruit")

	// Initialize the informations of
	// the API that will be served with
	// the specification.
	infos := &openapi.Info{
		Title:       "Fruits Market",
		Description: `This is a sample Fruits market server.`,
		Version:     "1.0.0",
	}
	// Create a new route that serve the OpenAPI spec.
	fizz.GET("/openapi.json", nil, fizz.OpenAPI(infos, "json"))

	ui.AddUIHandler(fizz.Engine(), "/doc", "/openapi.json")

	// Setup routes.
	routes(fizz.Group("/market", "market", "Your daily dose of freshness"))

	if len(fizz.Errors()) != 0 {
		return nil, fmt.Errorf("fizz errors: %v", fizz.Errors())
	}

	return fizz, nil
}

func routes(grp *fizz.RouterGroup) {
	// Add a new fruit to the market.
	grp.POST("", []fizz.OperationOption{
		fizz.Summary("Add a fruit to the market"),
		fizz.Response("400", "Bad request", nil, nil,
			map[string]interface{}{"error": "fruit already exists"},
		),
	}, tonic.Handler(CreateFruit, 200))

	tonic.RegisterTagNameFunc(func(fld reflect.StructField) string {
		name := strings.SplitN(fld.Tag.Get("json"), ",", 2)[0]
		if name == "-" {
			return ""
		}
		return name
	})
	// Remove a fruit from the market,
	// probably because it rotted.
	grp.DELETE("/:name", []fizz.OperationOption{
		fizz.Summary("Remove a fruit from the market"),
		fizz.ResponseWithExamples("400", "Bad request", nil, nil, map[string]interface{}{
			"fruitNotFound": map[string]interface{}{"error": "fruit not found"},
			"invalidApiKey": map[string]interface{}{"error": "invalid api key"},
		}),
	}, tonic.Handler(DeleteFruit, 204))

	// List all available fruits.
	grp.GET("", []fizz.OperationOption{
		fizz.Summary("List the fruits of the market"),
		fizz.Response("400", "Bad request", nil, nil, nil),
		fizz.Header("X-Market-Listing-Size", "Listing size", fizz.Long),
	}, tonic.Handler(ListFruits, 200))

	// List all available fruits.
	grp.POST("/:name/override", []fizz.OperationOption{
		fizz.InputModel(OverrideParam{}),
		fizz.Summary("show how to override tonic hooks/media types for a route"),
	}, tonic.Handler(Override, 200, func(r *tonic.Route) {
		r.SetBindHook(func(c *gin.Context, i interface{}) error {
			// you can override Tonic bind hook per path
			return nil
		})
		r.SetRenderHook(func(c *gin.Context, statusCode int, payload interface{}) {
			// you can override Tonic render hook per path
			c.String(statusCode, "<h2>override</h2>")
		})
		// you can override Tonic requests/responses Media types per path
		r.SetResponseMediaType("text/html")
		// random media type for tests
		r.SetRequestMediaType("multipart/form-data")
	}))
}
