package main

import (
	"fmt"
	"mime/multipart"

	"github.com/ccfish86/fizz/v2"
	"github.com/ccfish86/fizz/v2/openapi"
	"github.com/ccfish86/fizz/v2/ui"
	"github.com/gin-gonic/gin"

	"github.com/mcorbin/gadgeto/tonic"
)

func main() {
	gin.SetMode(gin.DebugMode)
	router := gin.Default()

	router.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "pong"})
	})

	InitFizzApis(router)

	router.Run(":8080")
}

func InitFizzApis(engine *gin.Engine) {

	_, appConfigUrl, _ := initAppRouter(engine)

	ui.AddUIGroupHandler(engine, "/doc", ui.SwaggerUrl{
		Name: "app",
		Url:  appConfigUrl,
	},
	)

}

func initAppRouter(engine *gin.Engine) (*fizz.Fizz, string, error) {

	fizz := fizz.NewFromEngine(engine)
	configURL := "/app/openapi.json"
	// Initialize the informations of
	// the API that will be served with
	// the specification.
	infos := &openapi.Info{
		Title:       "车门.管理系统 APP Api",
		Description: `This is a chemen api server.`,
		Version:     "1.0.0",
	}

	servers := []*openapi.Server{
		{
			Description: "车门.管理系统 APP Api",
			URL:         "/",
		},
	}
	fizz.Generator().SetServers(servers)
	// Create a new route that serve the OpenAPI spec.
	fizz.GET(configURL, nil, fizz.OpenAPI(infos, "json"))

	InitFizz(fizz)

	if len(fizz.Errors()) != 0 {
		return nil, "", fmt.Errorf("fizz errors: %v", fizz.Errors())
	}
	return fizz, configURL, nil
}

func InitFizz(f *fizz.Fizz) {
	initAppUserRoutes(f.Group("/app/user", "UserApiGroup", "车门用户接口等"))

}

func initAppUserRoutes(grp *fizz.RouterGroup) {

	// 文件上传
	grp.POST("upload/image", []fizz.OperationOption{
		fizz.Summary("图像上传(FormData)"),
		fizz.InputModel(FileUploadReq{}),
		fizz.Response("400", "Bad request", nil, nil,
			HttpResult[any]{
				Code: 400, Msg: "文件上传失败",
			},
		)}, tonic.Handler(UploadImage, 200, func(r *tonic.Route) {
		r.SetRequestMediaType("multipart/form-data")
		r.SetResponseMediaType("application/json")
		r.SetBindHook(func(c *gin.Context, i any) error {
			err := c.ShouldBind(i)
			if err != nil {
				return fmt.Errorf("error parsing request body: %s", err.Error())
			}
			return nil
		})
		r.SetRenderHook(func(c *gin.Context, statusCode int, payload any) {
			c.JSON(statusCode, payload)
		})
	}))
	// 文件上传
	grp.POST("upload/images", []fizz.OperationOption{
		fizz.Summary("多图像上传(FormData)"),
		fizz.InputModel(MultiFileUploadReq{}),
		fizz.Response("400", "Bad request", nil, nil,
			HttpResult[any]{
				Code: 400, Msg: "文件上传失败",
			},
		)}, tonic.Handler(MultiUploadImage, 200, func(r *tonic.Route) {
		r.SetRequestMediaType("multipart/form-data")
		r.SetResponseMediaType("application/json")
		r.SetBindHook(func(c *gin.Context, i any) error {
			err := c.ShouldBind(i)
			if err != nil {
				return fmt.Errorf("error parsing request body: %s", err.Error())
			}
			return nil
		})
		r.SetRenderHook(func(c *gin.Context, statusCode int, payload any) {
			c.JSON(statusCode, payload)
		})
	}))

	// //  提交地址
	// grp.POST("submit/address", []fizz.OperationOption{
	// 	fizz.Summary("提交地址"),
	// }, tonic.Handler(SubmitAddress, 200))

}

func UploadImage(c *gin.Context, req *FileUploadReq) (versionUpResp HttpResult[FileUploadResp], err error) {

	return
}
func MultiUploadImage(c *gin.Context, req *MultiFileUploadReq) (versionUpResp HttpResult[FileUploadResp], err error) {

	return
}

func SubmitAddress(c *gin.Context, req *AddressReq) (versionUpResp HttpResult[AddressResp], err error) {

	return
}

type AddressReq struct {
	Province string `json:"province" form:"province"`
	City     string `json:"city"`
	Remark   string `query:"remark"`
}

type AddressResp struct {
	ID       int    `json:"id"`
	Province string `json:"province"`
	City     string `json:"city"`
}

// FileUploadReq 文件上传结果
type FileUploadReq struct {
	File   *multipart.FileHeader `form:"file" `
	NoSave string                `form:"noSave" `
	// Watermark bool                  `form:"watermark" `
	Dir   string `form:"dir" `
	Cover string `query:"cover" `
}

type MultiFileUploadReq struct {
	Files  []*multipart.FileHeader `form:"files" `
	NoSave string                  `form:"noSave" `
	// Watermark bool                  `form:"watermark" `
	Dir   string `form:"dir" `
	Cover string `query:"cover" `
}

// APP HttpResult 通用返回值
type HttpResult[T any] struct {
	Data T      `json:"data"`
	Msg  string `json:"msg,omitempty"`
	Code int    `json:"code"`
}

// FileUploadResp 文件上传结果
type FileUploadResp struct {
	Url   string `json:"url"`
	State int8   `json:"state"`
}
