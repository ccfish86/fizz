const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DataType-IphMGoH9.js","./vendor-antd-r9DXLsA-.js","./vendor-vue-B9foJKPF.js","../css/vendor-antd-BL60uHJd.css","./doc-D4mARDbN.js","./vendor-marked-Br4yleP7.js","./vendor-lodash-BcZsTO3x.js","../css/doc-4RHTs_nx.css","./EditorShow-CAMiJFqM.js","./vendor-ace-Btbkjsya.js"])))=>i.map(i=>d[i]);
import{_ as O,j as X,h as ue,a as ce,T as he,k as fe,B as Q,l as ve,u as ge,F as ye,v as me,b as be,L as xe}from"./vendor-antd-r9DXLsA-.js";import{u as i,_ as k,c as D,b as N,l as F,a as je}from"./doc-D4mARDbN.js";import{x as M}from"./vendor-marked-Br4yleP7.js";import{V as Te}from"./vendor-ace-Btbkjsya.js";import{X as U,$ as x,h as l,S as o,G as E,V as j,a4 as W,U as c,W as w,F as q,a1 as H,Y as V,Z as y,R as P,a5 as Se,a0 as _e,f as L}from"./vendor-vue-B9foJKPF.js";import{u as Ee}from"./knife4jModels-YQlb7UFm.js";import"./vendor-lodash-BcZsTO3x.js";const K=`
.content-line {
  height: 25px;
  line-height: 25px;
}
.content-line-count {
  height: 35px;
  line-height: 35px;
}
.title {
  margin-top: 25px;
}
.knife4j-description {
 /*  width: 90%;
  margin: 15px auto; */
  margin-top: 5px;
}
.divider {
  margin: 4px 0;
}
.divider-count {
  margin: 8px 0;
}
.knife4j-document {
  margin-top: 30px;
}
.api-tab {
  margin-top: 15px;

  .ant-tag {
    height: 32px;
    line-height: 32px;
  }
}
.knife4j-menu-api-deprecated {
  text-decoration: line-through;
}

.knife4j-api-title {
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 600;
  color: #616368;
  height: 35px;
  line-height: 35px;
}
.knife4j-api-row {
  height: 45px;
  line-height: 45px;
}

.knife4j-api-summary {
  border-color: #49cc90;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 2px;
  cursor: pointer;
}
.knife4j-api-summary-method {
  font-size: 14px;
  font-weight: 700;
  min-width: 80px;
  padding: 6px 15px;
  text-align: center;
  border-radius: 3px;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  font-family: Titillium Web, sans-serif;
  color: #fff;
}
.knife4j-api-summary-path {
  font-size: 14px;
  display: flex;
  -webkit-box-flex: 0;
  -ms-flex: 0 3 auto;
  flex: 0 3 auto;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  word-break: break-all;
  padding: 0 32px;
}

.knife4j-api-post {
  border-color: #49cc90;
  background: rgba(73, 204, 144, 0.1);
}
.knife4j-api-post .knife4j-api-summary-method {
  background: #49cc90;
}

.knife4j-api-get {
  border-color: #61affe;
  background: rgba(97, 175, 254, 0.1);
}
.knife4j-api-get .knife4j-api-summary-method {
  background: #61affe;
}
.knife4j-api-head {
  border-color: #9012fe;
  background: rgba(144, 18, 254, 0.1);
}
.knife4j-api-head .knife4j-api-summary-method {
  background: #9012fe;
}
.knife4j-api-put {
  border-color: #fca130;
  background: rgba(252, 161, 48, 0.1);
}
.knife4j-api-put .knife4j-api-summary-method {
  background: #fca130;
}
.knife4j-api-delete {
  border-color: #f93e3e;
  background: rgba(249, 62, 62, 0.1);
}
.knife4j-api-delete .knife4j-api-summary-method {
  background: #f93e3e;
}
.knife4j-api-options {
  border-color: #0d5aa7;
  background: rgba(13, 90, 167, 0.1);
}
.knife4j-api-options .knife4j-api-summary-method {
  background: #0d5aa7;
}
.knife4j-api-patch {
  border-color: #50e3c2;
  background: rgba(80, 227, 194, 0.1);
}
.knife4j-api-patch .knife4j-api-summary-method {
  background: #50e3c2;
}
#knife4jDoc ul{
  padding-left: 10px;
  list-style: none;
  counter-reset: ordered;
}

#knife4jDoc ul li:before {
  counter-increment: ordered;
  content: counters(ordered,".")" ";
  color:#1890ff;
}
.api-basic {
  padding: 11px;
}
.api-basic-title {
  font-size: 14px;
  font-weight: 700;
}
.api-basic-body {
  font-size: 14px;
  font-family: -webkit-body;
}
.knife4j-api-editor-show {
  margin: 15px 0;
  font: 100 12px/18px monaco, andale mono, courier new;
  padding: 10px 12px;
  border: #ccc 1px solid;
  border-left-width: 4px;
  background-color: #fefefe;
  box-shadow: 0 0 4px #eee;
  word-break: break-all;
  word-wrap: break-word;
  color: #444;
}
.knife4j-api-editor-show .string { color: green; }        /*字符串的样式*/
.knife4j-api-editor-show .number { color: darkorange; }    /*数字的样式*/
.knife4j-api-editor-show .boolean { color: blue; }        /*布尔型数据的样式*/
.knife4j-api-editor-show .null { color: magenta; }        /*null值的样式*/
.knife4j-api-editor-show .key { color: red; }            /*key值的样式*/
.api-description {
  border-left: 4px solid #ddd;
  line-height: 30px;
}
.api-body-desc {
  padding: 10px;
  min-height: 35px;
  box-sizing: border-box;
  border: 1px solid #e8e8e8;
}
.ant-card-body {
  padding: 5px;
}
.api-title {
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 600;
  height: 30px;
  line-height: 30px;
  border-left: 4px solid #00ab6d;
  text-indent: 8px;
}
.content-line {
  height: 25px;
  line-height: 25px;
}
.content-line-count {
  height: 35px;
  line-height: 35px;
}
.divider {
  margin: 4px 0;
}
.knife4j-doc-m{
  position: fixed;
  height: 500px;
  width: 400px;
  border: 1px solid #b7b4b4;
  overflow-y: auto;
  right: 12px;
  top: 40px;
  z-index: 9999;
  background: #fcfafa;
}
`;function we(t,e,a){return`<!DOCTYPE html>
  <html>
  <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1.0">
      <title>${t}</title>
      <link rel="stylesheet" href="https://unpkg.com/ant-design-vue@1.4.10/dist/antd.min.css" />
      <style>
      ${e}
      </style>
  </head>
  <body>
      <div id="knife4jDocument" class="resume_preview_page" style="margin:10px auto;width:88%">
      <div class="htmledit_views" >
        <a-row>
          <!--基础信息-->
          <a-row>
            <a-col :span="24">
              <div class="title">
                <h2>{{instance.title}}</h2>
              </div>
              <div class="knife4j-description">
                <a-row class="content-line">
                  <a-col :span="5">
                    <h3>简介</h3>
                  </a-col>
                  <a-col :span="19"><span v-html="instance.description" /></a-col>
                </a-row>
                <a-divider class="divider" />
              </div>
              <div class="knife4j-description">
                <a-row class="content-line">
                  <a-col :span="5">
                    <h3>作者</h3>
                  </a-col>
                  <a-col :span="19"><span v-html="instance.contact" /></a-col>
                </a-row>
                <a-divider class="divider" />
              </div>
              <div class="knife4j-description">
                <a-row class="content-line">
                  <a-col :span="5">
                    <h3>版本</h3>
                  </a-col>
                  <a-col :span="19"><span v-html="instance.version" /></a-col>
                </a-row>
                <a-divider class="divider" />
              </div>
              <div class="knife4j-description">
                <a-row class="content-line">
                  <a-col :span="5">
                    <h3>host</h3>
                  </a-col>
                  <a-col :span="19"><span v-html="instance.host" /></a-col>
                </a-row>
                <a-divider class="divider" />
              </div>
              <div class="knife4j-description">
                <a-row class="content-line">
                  <a-col :span="5">
                    <h3>basePath</h3>
                  </a-col>
                  <a-col :span="19"><span v-html="instance.basePath" /></a-col>
                </a-row>
                <a-divider class="divider" />
              </div>
              <div class="knife4j-description">
                <a-row class="content-line">
                  <a-col :span="5">
                    <h3>服务Url</h3>
                  </a-col>
                  <a-col :span="19"><span v-html="instance.termsOfService" /></a-col>
                </a-row>
                <a-divider class="divider" />
              </div>
              <div class="knife4j-description">
                <a-row class="content-line">
                  <a-col :span="5">
                    <h3>分组名称</h3>
                  </a-col>
                  <a-col :span="19"><span v-html="instance.name" /></a-col>
                </a-row>
                <a-divider class="divider" />
              </div>
              <div class="knife4j-description">
                <a-row class="content-line">
                  <a-col :span="5">
                    <h3>分组url</h3>
                  </a-col>
                  <a-col :span="19"><span v-html="instance.url" /></a-col>
                </a-row>
                <a-divider class="divider" />
              </div>
              <div class="description">
                <a-row class="content-line">
                  <a-col :span="5">
                    <h3>分组location</h3>
                  </a-col>
                  <a-col :span="19"><span v-html="instance.location" /></a-col>
                </a-row>
                <a-divider class="divider" />
              </div>
              <div class="knife4j-description">
                <a-row class="content-line">
                  <a-col :span="5">
                    <h3>接口统计信息</h3>
                  </a-col>
                  <a-col :span="19">
                    <a-row class="content-line-count" v-for="param in instance.pathArrs" :key="param.method">
                      <a-col :span="3">
                        {{param.method}}
                      </a-col>
                      <a-col :span="2">
                        <a-tag color="#108ee9">{{param.count}}</a-tag>
                      </a-col>
                      <a-divider class="divider-count" />
                    </a-row>
                  </a-col>
                </a-row>
              </div>
            </a-col>
          </a-row>
    
          <!--目录-->
          <a-row id="knife4j-doc-m" class="knife4j-doc-m">
            <a-row style="float: right;width: 57px;z-index: 10000;overflow: hidden;">
              <a-button type="link" id="btnHide">隐藏</a-button>
            </a-row>
            <a-row v-if="hideShow" id="knife4jDoc">
              <ul>
                <li><a href="#knife4jDocument">主页</a></li>
                <li v-for="tag in tags" :key="tag.name">
                  <a :href="'#'+tag.name">{{tag.name}}</a>
                  <ul>
                    <li v-for="c in tag.childrens" :key="c.id"><a :href="'#'+c.operationId">{{c.summary}}</a></li>
                  </ul>
                </li>
              </ul>
            </a-row>
          </a-row>
          <!--分组API信息-->
          <!--遍历tags-->
          <a-row v-for="tag in tags" :key="tag.name">
            <h1 :id="tag.name">{{tag.name}}</h1>
            <div class="knife4j-document" v-for="api in tag.childrens">
              <!--接口基本信息-->
              <a-row>
                <a-row :id="api.operationId" class="knife4j-api-title">
                  <span v-if="api.deprecated" class="knife4j-menu-api-deprecated">
                    {{ api.summary }}
                  </span>
                  <span v-else>
                    {{ api.summary }}
                  </span>
                </a-row>
                <a-row :class="'knife4j-api-' + api.methodType.toLowerCase()">
                  <div class="knife4j-api-summary">
                    <span class="knife4j-api-summary-method">{{ api.methodType }}</span>
                    <span class="knife4j-api-summary-path">{{ api.showUrl }}</span>
                  </div>
                </a-row>
                <a-row class="knife4j-api-row">
                  <a-col :span="12">
                    <a-row>
                      <a-col class="api-basic-title" :span="6">请求数据类型</a-col>
                      {{ api.consumes }}
                    </a-row>
                  </a-col>
                  <a-col :span="12">
                    <a-row>
                      <a-col class="api-basic-title" :span="6">响应数据类型</a-col>
                      {{ api.produces }}
                    </a-row>
                  </a-col>
                </a-row>
              </a-row>
              <div v-if="api.author">
                <div class="api-title">
                  开发者
                </div>
                <div v-if="api.author" v-html="api.author" class="api-body-desc"></div>
              </div>
              <!--接口描述-->
              <div v-if="api.description">
                <div class="api-title">
                  接口描述
                </div>
                <div
                  v-if="api.description"
                  v-html="api.description"
                  class="api-body-desc"
                ></div>
              </div>
              <!--请求示例-->
              <div v-if="api.requestValue">
                <div class="api-title">
                  请求示例
                </div>
                <pre
                  class="knife4j-api-editor-show"
                  v-html="formaterJson(api.requestValue)"
                ></pre>
              </div>
              <div class="api-title">
              请求参数
              </div>
              <a-table default-expand-all-rows :columns="columns" :data-source="api.reqParameters"
                :row-key="genUnionTableKey"
                size="small"
                :pagination="page" >
                  <template slot="requireTemplate" slot-scope="text">
                    <span v-if="text" style="color:red">{{ text.toLocaleString() }}</span>
                    <span v-else>{{ text.toLocaleString() }}</span>
                  </template>

                  <template slot="typeTemplate" slot-scope="text">
                    <span :class="'knife4j-request-' + text">{{ text }}</span>
                  </template>

                  <template slot="datatypeTemplate" slot-scope="text, record">
                    <data-type :text="text" :record="record"></data-type>
                  </template>
              </a-table>
              <!--响应状态-->
              <div class="api-title">
                响应状态
              </div>
              <a-table
                :columns="responseStatuscolumns"
                :data-source="api.responseCodes"
                row-key="code"
                size="small"
                :pagination="page"
              >
                <template slot="descriptionTemplate" slot-scope="text">
                  <div v-html="text"></div>
                </template>
              </a-table>
              <!--响应参数-->
              <!--响应参数需要判断是否存在多个code-schema的情况-->
              <div v-if="api.multipartResponseSchema">
                <!--多个响应编码code的情况在离线文档中需要单独遍历分开-->
                <a-tabs v-for="resp in api.multipCodeDatas" :key="resp.code">
                  <a-tab-pane :tab="resp.code">
                    <!--判断响应头-->
                    <div v-if="resp.responseHeaderParameters">
                      <div class="api-title">
                        响应Header
                      </div>
                      <a-table
                        :columns="responseHeaderColumns"
                        :data-source="resp.responseHeaderParameters"
                        row-key="id"
                        size="small"
                        :pagination="page"
                      >
                      </a-table>
                    </div>
                    <!--响应参数-->
                    <div class="api-title">
                      响应参数
                    </div>
                    <a-table
                      :columns="responseParametersColumns"
                      :data-source="resp.data"
                      row-key="id"
                      size="small"
                      :pagination="page"
                    >
                    </a-table>
                    <div class="api-title">
                      响应示例
                    </div>
                    <div class="api-editor-show" v-if="resp.responseBasicType">
                      {{ resp.responseText }}
                    </div>
                    <pre
                      class="knife4j-api-editor-show"
                      v-else
                      v-html="formaterJson(resp.responseValue)"
                    ></pre>
                    <!-- <editor-show :value="resp.responseBasicType ? resp.responseText : resp.responseValue"></editor-show> -->
                    <!-- <editor :value="resp.responseBasicType ? resp.responseText : resp.responseValue" @init="multiResponseSampleEditorInit" lang="json" theme="eclipse" width="100%" :height="editorMultiHeight"></editor> -->
                  </a-tab-pane>
                </a-tabs>
              </div>
              <div v-else>
                <!--判断响应头-->
                <div v-if="api.responseHeaderParameters">
                  <div class="api-title">
                    响应Header
                  </div>
                  <a-table
                    :columns="responseHeaderColumns"
                    :data-source="api.responseHeaderParameters"
                    row-key="id"
                    size="small"
                    :pagination="page"
                  >
                  </a-table>
                </div>
                <!--响应参数-->
                <div class="api-title">
                  响应参数
                </div>
                <a-table
                  :columns="responseParametersColumns"
                  :data-source="api.multipData.data"
                  row-key="id"
                  size="small"
                  :pagination="page"
                >
                </a-table>
                <div class="api-title">
                  响应示例
                </div>
                <div class="api-editor-show" v-if="api.multipData.responseBasicType">
                  {{ api.multipData.responseText }}
                </div>
                <pre
                  class="knife4j-api-editor-show"
                  v-else
                  v-html="formaterJson(api.multipData.responseValue)"
                ></pre>
              </div>
              

            <!--接口遍历结束-->
            </div>
          </a-row>
      </a-row>

      </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/vue@2.6.9/dist/vue.js"><\/script>
      <script src="https://cdn.jsdelivr.net/npm/ant-design-vue@1.4.10/dist/antd.min.js"><\/script>
      <script type="text/javascript">
      function getData(){
        var datas=${a};
        //console(datas);
        return datas;
      }

      function main(){
        //当前接口json数据
        var d=getData();
        //请求参数table-header
        const requestcolumns = [
          {
            title: "参数名称",
            dataIndex: "name",
            width: "30%"
          },
          {
            title: "参数说明",
            dataIndex: "description",
            width: "25%"
          },
          {
            title: "请求类型",
            dataIndex: "in",
            scopedSlots: { customRender: "typeTemplate" }
          },
          {
            title: "是否必须",
            dataIndex: "require",
            scopedSlots: { customRender: "requireTemplate" }
          },
          {
            title: "数据类型",
            dataIndex: "type",
            scopedSlots: { customRender: "datatypeTemplate" }
          },
          {
            title: "schema",
            dataIndex: "schemaValue",
            width: "15%"
          }
        ];
        //响应状态table-header
        const responseStatuscolumns = [
          {
            title: "状态码",
            dataIndex: "code",
            width: "20%"
          },
          {
            title: "说明",
            dataIndex: "description",
            width: "55%",
            scopedSlots: { customRender: "descriptionTemplate" }
          },
          {
            title: "schema",
            dataIndex: "schema"
          }
        ];
        //响应头-header
        const responseHeaderColumns = [
          {
            title: "参数名称",
            dataIndex: "name",
            width: "30%"
          },
          {
            title: "参数说明",
            dataIndex: "description",
            width: "55%"
          },
          {
            title: "数据类型",
            dataIndex: "type"
          }
        ];
        const responseParametersColumns = [
          {
            title: "参数名称",
            dataIndex: "name",
            width: "35%"
          },
          {
            title: "参数说明",
            dataIndex: "description",
            width: "40%"
          },
          {
            title: "类型",
            dataIndex: "type"
          },
          {
            title: "schema",
            dataIndex: "schemaValue",
            width: "15%"
          }
        ];
        //dataType组件
        var dataType={
          name: "DataType",
          props: {
            text: {
              type: String,
              required: true
            },
            record: {
              type: Object,
              required: true
            }
          },
          data:function(){
            return {
               validators: []
            }
          },
          created() {
            this.intiValidator();
          },
          methods: {
            intiValidator() {
              var that = this;
              const record = this.record;
              if (record.validateInstance != null) {
                var len = that.getJsonKeyLength(record.validateInstance);
                var _size = 0;
                for (var k in record.validateInstance) {
                  var str = k + ":" + record.validateInstance[k];
                  that.validators.push({ key: k, val: str });
                }
              }
            },
            getJsonKeyLength(json) {
              var size = 0;
              if (json != null) {
                for (var key in json) {
                  if (json.hasOwnProperty(key)) size++;
                }
              }
              return size;
            }
          },
          template:'<div><span v-if="!record.validateStatus">{{text}}</span><span v-else class="knife4j-request-validate-jsr"><a-tooltip placement="right"><template slot="title"><div v-for="pt in validators" :key="pt.key">{{pt.val}}</div></template>{{text}}</a-tooltip></span></div>'

        }
        var data={
          tags:d.tags,
          instance:d.instance,
          columns: requestcolumns,
          responseHeaderColumns: responseHeaderColumns,
          responseStatuscolumns: responseStatuscolumns,
          responseParametersColumns: responseParametersColumns,
          expanRows: true,
          //接收一个响应信息对象,遍历得到树形结构的值
          multipCode: false,
          multipCodeDatas: [],
          multipData: {},
          page: false,
          hideShow:true
        }
        new Vue({
          el:"#knife4jDocument",
          components:{
            "DataType":dataType
          },
          data(){
            return data
          },
          mounted(){
             //初始化完成
            //赋予点击事件;
            document.getElementById("btnHide").addEventListener("click",function(){
              //隐藏目录
              var doc=document.getElementById("knife4jDoc");
              var docGlobal=document.getElementById("knife4j-doc-m");
              if(doc.style.display=="none"){
                doc.style.display="";
                document.getElementById("btnHide").innerHTML="隐 藏";
                docGlobal.style.width="400px";
                docGlobal.style.height="500px";
              }else{
                doc.style.display="none";
                document.getElementById("btnHide").innerHTML="目 录";
                docGlobal.style.width="52px";
                docGlobal.style.height="35px";
              }
            })
          },
          created(){
           
          },
          methods:{
            genUnionTableKey() {
              var key="param"+new Date().getTime().toString() + Math.floor(Math.random() * 1000000).toString();
              return key;
            },
            formaterJson(json) {
              try {
                if (typeof json != "string") {
                  json = JSON.stringify(json, undefined, 2);
                }
                json = json
                  .replace(/&/g, "&")
                  .replace(/</g, "<")
                  .replace(/>/g, ">");
                return json.replace(
                  /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(s*:)?|\b(true|false|null)\b|-?d+(?:.d*)?(?:[eE][+-]?d+)?)/g,
                  function(match) {
                    var cls = "number";
                    if (/^"/.test(match)) {
                      if (/:$/.test(match)) {
                        cls = "key";
                      } else {
                        cls = "string";
                      }
                    } else if (/true|false/.test(match)) {
                      cls = "boolean";
                    } else if (/null/.test(match)) {
                      cls = "null";
                    }
                    return '<span class="' + cls + '">' + match + "</span>";
                  }
                );
              } catch (error) {
                return json;
              }
            }
          }
        })

      }

      main();
      
      
    <\/script>
  </body>
  </html>`}function Pe(t,e,a){return`<!DOCTYPE html>
  <html>
  <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1.0">
      <title>${t}</title>
      <link rel="stylesheet" href="https://unpkg.com/ant-design-vue@1.4.10/dist/antd.min.css" />
      <style>
      ${e}
      </style>
  </head>
  <body>
      <div id="knife4jDocument" class="resume_preview_page" style="margin:10px auto;width:88%">
      <div class="htmledit_views" >
        <a-row>
          <!--基础信息-->
          <a-row>
            <a-col :span="24">
              <div class="title">
                <h2>{{instance.title}}</h2>
              </div>
              <div class="knife4j-description">
                <a-row class="content-line">
                  <a-col :span="5">
                    <h3>Description</h3>
                  </a-col>
                  <a-col :span="19"><span v-html="instance.description" /></a-col>
                </a-row>
                <a-divider class="divider" />
              </div>
              <div class="knife4j-description">
                <a-row class="content-line">
                  <a-col :span="5">
                    <h3>Author</h3>
                  </a-col>
                  <a-col :span="19"><span v-html="instance.contact" /></a-col>
                </a-row>
                <a-divider class="divider" />
              </div>
              <div class="knife4j-description">
                <a-row class="content-line">
                  <a-col :span="5">
                    <h3>Version</h3>
                  </a-col>
                  <a-col :span="19"><span v-html="instance.version" /></a-col>
                </a-row>
                <a-divider class="divider" />
              </div>
              <div class="knife4j-description">
                <a-row class="content-line">
                  <a-col :span="5">
                    <h3>Host</h3>
                  </a-col>
                  <a-col :span="19"><span v-html="instance.host" /></a-col>
                </a-row>
                <a-divider class="divider" />
              </div>
              <div class="knife4j-description">
                <a-row class="content-line">
                  <a-col :span="5">
                    <h3>basePath</h3>
                  </a-col>
                  <a-col :span="19"><span v-html="instance.basePath" /></a-col>
                </a-row>
                <a-divider class="divider" />
              </div>
              <div class="knife4j-description">
                <a-row class="content-line">
                  <a-col :span="5">
                    <h3>serviceUrl</h3>
                  </a-col>
                  <a-col :span="19"><span v-html="instance.termsOfService" /></a-col>
                </a-row>
                <a-divider class="divider" />
              </div>
              <div class="knife4j-description">
                <a-row class="content-line">
                  <a-col :span="5">
                    <h3>GroupName</h3>
                  </a-col>
                  <a-col :span="19"><span v-html="instance.name" /></a-col>
                </a-row>
                <a-divider class="divider" />
              </div>
              <div class="knife4j-description">
                <a-row class="content-line">
                  <a-col :span="5">
                    <h3>GroupUrl</h3>
                  </a-col>
                  <a-col :span="19"><span v-html="instance.url" /></a-col>
                </a-row>
                <a-divider class="divider" />
              </div>
              <div class="description">
                <a-row class="content-line">
                  <a-col :span="5">
                    <h3>GroupLocation</h3>
                  </a-col>
                  <a-col :span="19"><span v-html="instance.location" /></a-col>
                </a-row>
                <a-divider class="divider" />
              </div>
              <div class="knife4j-description">
                <a-row class="content-line">
                  <a-col :span="5">
                    <h3>count</h3>
                  </a-col>
                  <a-col :span="19">
                    <a-row class="content-line-count" v-for="param in instance.pathArrs" :key="param.method">
                      <a-col :span="3">
                        {{param.method}}
                      </a-col>
                      <a-col :span="2">
                        <a-tag color="#108ee9">{{param.count}}</a-tag>
                      </a-col>
                      <a-divider class="divider-count" />
                    </a-row>
                  </a-col>
                </a-row>
              </div>
            </a-col>
          </a-row>
    
          <!--目录-->
          <a-row id="knife4j-doc-m" class="knife4j-doc-m">
            <a-row style="float: right;width: 57px;z-index: 10000;overflow: hidden;">
              <a-button type="link" id="btnHide">Hide</a-button>
            </a-row>
            <a-row v-if="hideShow" id="knife4jDoc">
              <ul>
                <li><a href="#knife4jDocument">Home</a></li>
                <li v-for="tag in tags" :key="tag.name">
                  <a :href="'#'+tag.name">{{tag.name}}</a>
                  <ul>
                    <li v-for="c in tag.childrens" :key="c.id"><a :href="'#'+c.operationId">{{c.summary}}</a></li>
                  </ul>
                </li>
              </ul>
            </a-row>
          </a-row>
          <!--分组API信息-->
          <!--遍历tags-->
          <a-row v-for="tag in tags" :key="tag.name">
            <h1 :id="tag.name">{{tag.name}}</h1>
            <div class="knife4j-document" v-for="api in tag.childrens">
              <!--接口基本信息-->
              <a-row>
                <a-row :id="api.operationId" class="knife4j-api-title">
                  <span v-if="api.deprecated" class="knife4j-menu-api-deprecated">
                    {{ api.summary }}
                  </span>
                  <span v-else>
                    {{ api.summary }}
                  </span>
                </a-row>
                <a-row :class="'knife4j-api-' + api.methodType.toLowerCase()">
                  <div class="knife4j-api-summary">
                    <span class="knife4j-api-summary-method">{{ api.methodType }}</span>
                    <span class="knife4j-api-summary-path">{{ api.showUrl }}</span>
                  </div>
                </a-row>
                <a-row class="knife4j-api-row">
                  <a-col :span="12">
                    <a-row>
                      <a-col class="api-basic-title" :span="6">produces</a-col>
                      {{ api.consumes }}
                    </a-row>
                  </a-col>
                  <a-col :span="12">
                    <a-row>
                      <a-col class="api-basic-title" :span="6">consumes</a-col>
                      {{ api.produces }}
                    </a-row>
                  </a-col>
                </a-row>
              </a-row>
              <div v-if="api.author">
                <div class="api-title">
                  Author
                </div>
                <div v-if="api.author" v-html="api.author" class="api-body-desc"></div>
              </div>
              <!--接口描述-->
              <div v-if="api.description">
                <div class="api-title">
                  Note
                </div>
                <div
                  v-if="api.description"
                  v-html="api.description"
                  class="api-body-desc"
                ></div>
              </div>
              <!--请求示例-->
              <div v-if="api.requestValue">
                <div class="api-title">
                  Example
                </div>
                <pre
                  class="knife4j-api-editor-show"
                  v-html="formaterJson(api.requestValue)"
                ></pre>
              </div>
              <div class="api-title">
              Params
              </div>
              <a-table default-expand-all-rows :columns="columns" :data-source="api.reqParameters"
                :row-key="genUnionTableKey"
                size="small"
                :pagination="page" >
                  <template slot="requireTemplate" slot-scope="text">
                    <span v-if="text" style="color:red">{{ text.toLocaleString() }}</span>
                    <span v-else>{{ text.toLocaleString() }}</span>
                  </template>

                  <template slot="typeTemplate" slot-scope="text">
                    <span :class="'knife4j-request-' + text">{{ text }}</span>
                  </template>

                  <template slot="datatypeTemplate" slot-scope="text, record">
                    <data-type :text="text" :record="record"></data-type>
                  </template>
              </a-table>
              <!--响应状态-->
              <div class="api-title">
                Status
              </div>
              <a-table
                :columns="responseStatuscolumns"
                :data-source="api.responseCodes"
                row-key="code"
                size="small"
                :pagination="page"
              >
                <template slot="descriptionTemplate" slot-scope="text">
                  <div v-html="text"></div>
                </template>
              </a-table>
              <!--响应参数-->
              <!--响应参数需要判断是否存在多个code-schema的情况-->
              <div v-if="api.multipartResponseSchema">
                <!--多个响应编码code的情况在离线文档中需要单独遍历分开-->
                <a-tabs v-for="resp in api.multipCodeDatas" :key="resp.code">
                  <a-tab-pane :tab="resp.code">
                    <!--判断响应头-->
                    <div v-if="resp.responseHeaderParameters">
                      <div class="api-title">
                        Response Header
                      </div>
                      <a-table
                        :columns="responseHeaderColumns"
                        :data-source="resp.responseHeaderParameters"
                        row-key="id"
                        size="small"
                        :pagination="page"
                      >
                      </a-table>
                    </div>
                    <!--响应参数-->
                    <div class="api-title">
                      Response Params
                    </div>
                    <a-table
                      :columns="responseParametersColumns"
                      :data-source="resp.data"
                      row-key="id"
                      size="small"
                      :pagination="page"
                    >
                    </a-table>
                    <div class="api-title">
                     Response Example
                    </div>
                    <div class="api-editor-show" v-if="resp.responseBasicType">
                      {{ resp.responseText }}
                    </div>
                    <pre
                      class="knife4j-api-editor-show"
                      v-else
                      v-html="formaterJson(resp.responseValue)"
                    ></pre>
                    <!-- <editor-show :value="resp.responseBasicType ? resp.responseText : resp.responseValue"></editor-show> -->
                    <!-- <editor :value="resp.responseBasicType ? resp.responseText : resp.responseValue" @init="multiResponseSampleEditorInit" lang="json" theme="eclipse" width="100%" :height="editorMultiHeight"></editor> -->
                  </a-tab-pane>
                </a-tabs>
              </div>
              <div v-else>
                <!--判断响应头-->
                <div v-if="api.responseHeaderParameters">
                  <div class="api-title">
                    Response Header
                  </div>
                  <a-table
                    :columns="responseHeaderColumns"
                    :data-source="api.responseHeaderParameters"
                    row-key="id"
                    size="small"
                    :pagination="page"
                  >
                  </a-table>
                </div>
                <!--响应参数-->
                <div class="api-title">
                  Response Params
                </div>
                <a-table
                  :columns="responseParametersColumns"
                  :data-source="api.multipData.data"
                  row-key="id"
                  size="small"
                  :pagination="page"
                >
                </a-table>
                <div class="api-title">
                  Response Example
                </div>
                <div class="api-editor-show" v-if="api.multipData.responseBasicType">
                  {{ api.multipData.responseText }}
                </div>
                <pre
                  class="knife4j-api-editor-show"
                  v-else
                  v-html="formaterJson(api.multipData.responseValue)"
                ></pre>
              </div>
              

            <!--接口遍历结束-->
            </div>
          </a-row>
      </a-row>

      </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/vue@2.6.9/dist/vue.js"><\/script>
      <script src="https://cdn.jsdelivr.net/npm/ant-design-vue@1.4.10/dist/antd.min.js"><\/script>
      <script type="text/javascript">
      function getData(){
        var datas=${a};
        //console(datas);
        return datas;
      }

      function main(){
        //当前接口json数据
        var d=getData();
        //请求参数table-header
        const requestcolumns = [
          {
            title: "name",
            dataIndex: "name",
            width: "30%"
          },
          {
            title: "description",
            dataIndex: "description",
            width: "25%"
          },
          {
            title: "in",
            dataIndex: "in",
            scopedSlots: { customRender: "typeTemplate" }
          },
          {
            title: "require",
            dataIndex: "require",
            scopedSlots: { customRender: "requireTemplate" }
          },
          {
            title: "type",
            dataIndex: "type",
            scopedSlots: { customRender: "datatypeTemplate" }
          },
          {
            title: "schema",
            dataIndex: "schemaValue",
            width: "15%"
          }
        ];
        //响应状态table-header
        const responseStatuscolumns = [
          {
            title: "code",
            dataIndex: "code",
            width: "20%"
          },
          {
            title: "description",
            dataIndex: "description",
            width: "55%",
            scopedSlots: { customRender: "descriptionTemplate" }
          },
          {
            title: "schema",
            dataIndex: "schema"
          }
        ];
        //响应头-header
        const responseHeaderColumns = [
          {
            title: "name",
            dataIndex: "name",
            width: "30%"
          },
          {
            title: "description",
            dataIndex: "description",
            width: "55%"
          },
          {
            title: "type",
            dataIndex: "type"
          }
        ];
        const responseParametersColumns = [
          {
            title: "name",
            dataIndex: "name",
            width: "35%"
          },
          {
            title: "description",
            dataIndex: "description",
            width: "40%"
          },
          {
            title: "type",
            dataIndex: "type"
          },
          {
            title: "schema",
            dataIndex: "schemaValue",
            width: "15%"
          }
        ];
        //dataType组件
        var dataType={
          name: "DataType",
          props: {
            text: {
              type: String,
              required: true
            },
            record: {
              type: Object,
              required: true
            }
          },
          data:function(){
            return {
               validators: []
            }
          },
          created() {
            this.intiValidator();
          },
          methods: {
            intiValidator() {
              var that = this;
              const record = this.record;
              if (record.validateInstance != null) {
                var len = that.getJsonKeyLength(record.validateInstance);
                var _size = 0;
                for (var k in record.validateInstance) {
                  var str = k + ":" + record.validateInstance[k];
                  that.validators.push({ key: k, val: str });
                }
              }
            },
            getJsonKeyLength(json) {
              var size = 0;
              if (json != null) {
                for (var key in json) {
                  if (json.hasOwnProperty(key)) size++;
                }
              }
              return size;
            }
          },
          template:'<div><span v-if="!record.validateStatus">{{text}}</span><span v-else class="knife4j-request-validate-jsr"><a-tooltip placement="right"><template slot="title"><div v-for="pt in validators" :key="pt.key">{{pt.val}}</div></template>{{text}}</a-tooltip></span></div>'

        }
        var data={
          tags:d.tags,
          instance:d.instance,
          columns: requestcolumns,
          responseHeaderColumns: responseHeaderColumns,
          responseStatuscolumns: responseStatuscolumns,
          responseParametersColumns: responseParametersColumns,
          expanRows: true,
          //接收一个响应信息对象,遍历得到树形结构的值
          multipCode: false,
          multipCodeDatas: [],
          multipData: {},
          page: false,
          hideShow:true
        }
        new Vue({
          el:"#knife4jDocument",
          components:{
            "DataType":dataType
          },
          data(){
            return data
          },
          mounted(){
             //初始化完成
            //赋予点击事件;
            document.getElementById("btnHide").addEventListener("click",function(){
              //隐藏目录
              var doc=document.getElementById("knife4jDoc");
              var docGlobal=document.getElementById("knife4j-doc-m");
              if(doc.style.display=="none"){
                doc.style.display="";
                document.getElementById("btnHide").innerHTML="Hide";
                docGlobal.style.width="400px";
                docGlobal.style.height="500px";
              }else{
                doc.style.display="none";
                document.getElementById("btnHide").innerHTML="Home";
                docGlobal.style.width="52px";
                docGlobal.style.height="35px";
              }
            })
          },
          created(){
           
          },
          methods:{
            genUnionTableKey() {
              var key="param"+new Date().getTime().toString() + Math.floor(Math.random() * 1000000).toString();
              return key;
            },
            formaterJson(json) {
              try {
                if (typeof json != "string") {
                  json = JSON.stringify(json, undefined, 2);
                }
                json = json
                  .replace(/&/g, "&")
                  .replace(/</g, "<")
                  .replace(/>/g, ">");
                return json.replace(
                  /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(s*:)?|\b(true|false|null)\b|-?d+(?:.d*)?(?:[eE][+-]?d+)?)/g,
                  function(match) {
                    var cls = "number";
                    if (/^"/.test(match)) {
                      if (/:$/.test(match)) {
                        cls = "key";
                      } else {
                        cls = "string";
                      }
                    } else if (/true|false/.test(match)) {
                      cls = "boolean";
                    } else if (/null/.test(match)) {
                      cls = "null";
                    }
                    return '<span class="' + cls + '">' + match + "</span>";
                  }
                );
              } catch (error) {
                return json;
              }
            }
          }
        })

      }

      main();
      
      
    <\/script>
  </body>
  </html>`}function Re(t){var e=[];return t!=null&&t!=null&&(De(t,e),He(t,e),qe(t,e)),e.join(`
`)}function v(t){t.push(`
`)}function De(t,e){e.push("# "+t.title),v(e),e.push("**简介**:"+t.description),v(e),e.push("**HOST**:"+t.host),v(e),e.push("**联系人**:"+t.contact),v(e),e.push("**Version**:"+t.version),v(e),e.push("**接口路径**:"+t.url),v(e),e.push("[TOC]"),v(e)}function qe(t,e){i.checkUndefined(t.markdownFiles)&&t.markdownFiles.length>0&&(v(e),e.push("# 附录"),t.markdownFiles.forEach(function(a){v(e),i.arrNotEmpty(a.children)&&(e.push("## "+a.name),v(e),a.children.forEach(s=>{e.push("### "+s.title),e.push(s.content)}))}))}function He(t,e){t.tags!=null&&t.tags!=null&&(e.push(`
`),t.tags.forEach(function(a){v(e),e.push("# "+a.name),a.childrens!=null&&a.childrens!=null&&a.childrens.length>0?a.childrens.forEach(function(s){Ve(s,e)}):e.push("暂无接口文档")}))}function Ve(t,e){v(e),e.push("## "+t.summary),v(e),e.push("**接口地址**:`"+t.showUrl+"`"),v(e),e.push("**请求方式**:`"+t.methodType+"`"),v(e),e.push("**请求数据类型**:`"+i.toString(t.consumes,"*")+"`"),v(e),e.push("**响应数据类型**:`"+i.toString(t.produces,"*")+"`"),v(e),i.strNotBlank(t.author)&&(e.push("**开发者**:"+i.toString(t.author,"暂无")),v(e)),e.push("**接口描述**:"+i.toString(t.description,"暂无")),i.checkUndefined(t.requestValue)&&(v(e),e.push("**请求示例**:"),v(e),e.push("```javascript"),e.push(t.requestValue),e.push("```")),Ue(t,e),Me(t,e),Ne(t,e)}function Me(t,e){i.checkUndefined(t.responseCodes)&&t.responseCodes.length>0&&(v(e),e.push("**响应状态**:"),v(e),e.push("| 状态码 | 说明 | schema |"),e.push("| -------- | -------- | ----- | "),t.responseCodes.forEach(function(a){e.push("|"+i.toString(a.code,"")+"|"+i.toString(a.description,"")+"|"+i.toString(a.schema,"")+"|")}))}function Le(t,e){i.checkUndefined(t)&&t.length>0&&(v(e),e.push("**响应Header**:"),v(e),e.push("| 参数名称 | 参数说明 | 数据类型 |"),e.push("| -------- | -------- | ----- | "),t.forEach(function(a){e.push("|"+i.toString(a.name,"")+"|"+i.toString(a.description,"")+"|"+i.toString(a.type,"")+"|")}))}function Ne(t,e){if(t.multipartResponseSchema){var a=t.multipCodeDatas;i.arrNotEmpty(a)&&a.forEach(function(s){v(e),e.push("**响应状态码-"+i.toString(s.code,"")+"**:"),J(s,e)})}else J(t.multipData,e)}function J(t,e){Le(t.responseHeaderParameters,e),v(e),e.push("**响应参数**:"),v(e),i.arrNotEmpty(t.data)?(e.push("| 参数名称 | 参数说明 | 类型 | schema |"),e.push("| -------- | -------- | ----- |----- | "),t.data.forEach(function(a){a.level=1,e.push("|"+B(a)+"|"+i.toString(a.description,"")+"|"+i.toString(a.type,"")+"|"+i.toString(a.schemaValue,"")+"|"),C(a.children,e,a.level+1)})):e.push("暂无"),v(e),e.push("**响应示例**:"),t.responseBasicType?(e.push("```text"),e.push(t.responseText),e.push("```")):(e.push("```javascript"),e.push(t.responseValue),e.push("```"))}function Ue(t,e){let a=t.reqParameters;v(e),e.push("**请求参数**:"),i.arrNotEmpty(a)?(v(e),e.push("| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |"),e.push("| -------- | -------- | ----- | -------- | -------- | ------ |"),ee(a,e,1)):(v(e),e.push("暂无"))}function C(t,e,a){t!=null&&t!=null&&t.length>0&&t.forEach(function(s){s.level=a,e.push("|"+B(s)+"|"+i.toString(s.description,"")+"|"+i.toString(s.type,"")+"|"+i.toString(s.schemaValue,"")+"|"),C(s.children,e,s.level+1)})}function ee(t,e,a){t!=null&&t!=null&&t.length>0&&t.forEach(function(s){s.level=a,e.push("|"+B(s)+"|"+i.toString(s.description,"")+"|"+i.toString(s.in,"")+"|"+i.toString(s.require,"")+"|"+i.toString(s.type,"")+"|"+i.toString(s.schemaValue,"")+"|"),ee(s.children,e,s.level+1)})}function B(t){for(var e=[],a=1;a<t.level;a++)e.push("&emsp;&emsp;");var s=e.join("")+t.name;return s}M.setOptions({gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1});function Oe(t){var e=[];return t!=null&&t!=null&&(ke(e),Ie(t,e),Ae(t,e),ze(t,e),Be(e)),e.join(`
`)}function T(t){t.push(`
`)}function ke(t){var e=`<!DOCTYPE HTML PUBLIC "-// W3C//DTD HTML 4.0 Transitional//EN">
  <html>
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
      <title>导出Swagger文档到Word</title>
      <script src="https:// cdn.bootcss.com/jquery/3.2.1/jquery.min.js"><\/script>
      <style type="text/css">
          .knife4j-word-body{
              width: 90%;
              margin: 20px auto;
              font-family:"宋体";
              font-size: 16px;
          }
          .knife4j-word-row{
              position: relative;
              height: auto;
              margin-right: 0;
              margin-left: 0;
              zoom: 1;
              display: block;
              box-sizing: border-box;
          }
          .knife4j-word-line{
              height: 35px;
              line-height:35px;
          }
          .knife4j-word-divider{
              height: 1px;
              background: #e8e8e8;
              border-bottom: 1px solid #e8e8e8;
          }
          .knife4j-word-title{
              font-weight: 600;
              font-size: 18px;
              margin-top: 15px;
              border-left: 3px solid #00ab6d;
          }
          .knife4j-word-api{
              margin-top: 10px;
          }
          .knife4j-word-content{
              margin-top: 10px;
          }
          .knife4j-word-code-editor{
              border: #ccc 1px solid;
              border-left-width: 4px;
              background-color: #fefefe;
              box-shadow: 0 0 4px #eee;
              word-break: break-all;
              word-wrap: break-word;
              color: #444;
          }
          .knife4j-word-code-editor .string { color: green; }        /*字符串的样式*/
          .knife4j-word-code-editor .number { color: darkorange; }    /*数字的样式*/
          .knife4j-word-code-editor .boolean { color: blue; }        /*布尔型数据的样式*/
          .knife4j-word-code-editor .null { color: magenta; }        /*null值的样式*/
          .knife4j-word-code-editor .key { color: red; }            /*key值的样式*/
          .knife4j-word-method{
              font-size: 14px;
              font-weight: 600;
              margin-right: 10px;
              text-align: center;
              border-radius: 3px;
              text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
          }
          .knife4j-word-table{
              width: 120%;
              border: 1px solid #c7c4c4;
              border-collapse: collapse;
          }
          .knife4j-word-table tr{
              border: 1px solid #c7c4c4;
              height: 40px;
          }
          .knife4j-word-table th{
              border: 1px solid #c7c4c4;
              background-color: #dfdada;
          }
          .knife4j-word-table td{
              border: 1px solid #c7c4c4;
          }
      </style>
  </head>
  <body>
  <div class="knife4j-word-body">`;t.push(e)}function Be(t){t.push("</div></body></html>")}function Ie(t,e){e.push("<h1>1.项目说明</h1>"),e.push('<div class="knife4j-word-row">'),e.push('<div class="knife4j-word-line"><strong>标题</strong>:'+t.title+"</div>"),e.push('<div class="knife4j-word-divider"></div>'),e.push('<div class="knife4j-word-line"><strong>简介</strong>:'+t.description+"</div>"),e.push('<div class="knife4j-word-divider"></div>'),e.push('<div class="knife4j-word-line"><strong>作者</strong>:<code>'+t.contact+"</code></div>"),e.push('<div class="knife4j-word-divider"></div>'),e.push('<div class="knife4j-word-line"><strong>HOST</strong>:'+t.host+"</div>"),e.push('<div class="knife4j-word-divider"></div>'),e.push('<div class="knife4j-word-line"><strong>basePath</strong>:'+t.basePath+"</div>"),e.push('<div class="knife4j-word-divider"></div>'),e.push('<div class="knife4j-word-line"><strong>termsOfService</strong>:'+t.termsOfService+"</div>"),e.push('<div class="knife4j-word-divider"></div>'),e.push('<div class="knife4j-word-line"><strong>联系人</strong>:'+t.contact+"</div>"),e.push('<div class="knife4j-word-divider"></div>'),e.push('<div class="knife4j-word-line"><strong>Version</strong>:'+t.version+"</div>"),e.push('<div class="knife4j-word-divider"></div>'),e.push('<div class="knife4j-word-line"><strong>GroupName</strong>:'+t.name+"</div>"),e.push('<div class="knife4j-word-divider"></div>'),e.push('<div class="knife4j-word-line"><strong>分组Url</strong>:'+t.url+"</div>"),e.push('<div class="knife4j-word-divider"></div>'),e.push('<div class="knife4j-word-line"><strong>分组Location</strong>:'+t.location+"</div>"),e.push('<div class="knife4j-word-divider"></div>'),e.push("</div>")}function ze(t,e){i.checkUndefined(t.markdownFiles)&&i.arrNotEmpty(t.markdownFiles)&&(T(e),e.push("<h1>3.附录</h1>"),t.markdownFiles.forEach(function(a,s){T(e);var r=s+1,n="3."+r+a.name;e.push("<h2>"+n+"</h2>"),i.arrNotEmpty(a.children)&&a.children.forEach(d=>{e.push("<h3>"+d.title+"</h3>"),e.push('<div class="knife4j-word-content">'),i.strNotBlank(d.content)&&e.push(M.parse(d.content)),e.push("</div>")})}))}function Ae(t,e){t.tags!=null&&t.tags!=null&&(e.push(`
`),e.push("<h1>2.接口列表</h1>"),t.tags.forEach(function(a,s){var r=parseInt(s)+1,n="2."+r,d=n+a.name;e.push("<h2>"+d+"</h2>"),T(e),a.childrens!=null&&a.childrens!=null&&a.childrens.length>0?a.childrens.forEach(function(p,h){var f=h+1;Fe(p,e,n,f)}):e.push("暂无接口文档")}))}function Fe(t,e,a,s){T(e);var r=a+"."+s+t.summary;e.push("<h3>"+r+"</h3>"),e.push('<div class="knife4j-word-api">'),e.push('<div class="knife4j-word-title">接口地址</div>'),e.push('<div class="knife4j-word-content"><span class="knife4j-word-method">'+t.methodType+"</span>&nbsp;&nbsp;<code>"+t.showUrl+"</code></div>"),e.push('<div class="knife4j-word-title">接口描述</div>'),e.push('<div class="knife4j-word-content">'+i.toString(t.description,"暂无")+"</div>"),e.push('<div class="knife4j-word-title">请求数据类型</div>'),e.push('<div class="knife4j-word-content"><code>'+i.toString(t.consumes,"*")+"</code></div>"),e.push('<div class="knife4j-word-title">响应数据类型</div>'),e.push('<div class="knife4j-word-content"><code>'+i.toString(t.produces,"*")+"</code></div>"),i.strNotBlank(t.author)&&(e.push('<div class="knife4j-word-title">开发者</div>'),e.push('<div class="knife4j-word-content">'+i.toString(t.author,"暂无")+"</div>")),i.checkUndefined(t.requestValue)&&(e.push('<div class="knife4j-word-title">请求示例</div>'),e.push('<div class="knife4j-word-content">'),e.push('<pre class="knife4j-word-code-editor">'),t.xmlRequest?e.push(t.requestValue):e.push(se(t.requestValue)),e.push("</pre>"),e.push("</div>")),$e(t,e),We(t,e),Je(t,e),e.push("</div>")}function We(t,e){i.checkUndefined(t.responseCodes)&&t.responseCodes.length>0&&(T(e),e.push('<div class="knife4j-word-title">响应状态</div><br/>'),e.push('<div class="knife4j-word-content">'),e.push('<table class="knife4j-word-table">'),e.push("<thead><tr><th>状态码</th><th>说明</th><th>schema</th></tr></thead>"),e.push("<tbody>"),T(e),t.responseCodes.forEach(function(a){e.push("<tr>"),e.push("<td>"+i.toString(a.code,"")+"</td>"),e.push("<td>"+i.toString(a.description,"")+"</td>"),e.push("<td>"+i.toString(a.schema,"")+"</td>"),e.push("</tr>")}),e.push("</tbody>"),e.push("</table><br/>"),e.push("</div>"))}function Ke(t,e){i.checkUndefined(t)&&i.arrNotEmpty(t)&&(T(e),e.push('<div class="knife4j-word-title">响应Header</div>'),T(e),e.push('<div class="knife4j-word-content">'),e.push('<table class="knife4j-word-table">'),e.push("<thead><tr><th>参数名称</th><th>参数说明</th><th>类型</th></tr></thead>"),e.push("<tbody>"),t.forEach(function(a){e.push("<tr>"),e.push("<td>"+i.toString(a.name,"")+"</td>"),e.push("<td>"+i.toString(a.description,"")+"</td>"),e.push("<td>"+i.toString(a.type,"")+"</td>"),e.push("</tr>")}),e.push("</tbody>"),e.push("</table>"),e.push("</div>"))}function Je(t,e){if(t.multipartResponseSchema){var a=t.multipCodeDatas;i.arrNotEmpty(a)&&a.forEach(function(s){T(e),e.push('<div class="knife4j-word-title">响应状态码-'+i.toString(s.code,"")+"</div>"),$(s,e)})}else $(t.multipData,e)}function $(t,e){Ke(t.responseHeaderParameters,e),T(e),e.push('<div class="knife4j-word-title">响应参数</div>'),T(e),e.push('<div class="knife4j-word-content">'),e.push('<table class="knife4j-word-table">'),e.push("<thead><tr><th>参数名称</th><th>参数说明</th><th>类型</th><th>schema</th></tr></thead>"),e.push("<tbody>"),i.arrNotEmpty(t.data)?t.data.forEach(function(a){a.level=1,e.push("<tr>"),e.push("<td>"+I(a)+"</td>"),e.push("<td>"+i.toString(a.description,"")+"</td>"),e.push("<td>"+i.toString(a.type,"")+"</td>"),e.push("<td>"+i.toString(a.schemaValue,"")+"</td>"),e.push("</tr>"),te(a.children,e,a.level+1)}):e.push('<tr><td colspan="4">暂无</td></tr>'),e.push("</tbody>"),e.push("</table>"),e.push("</div>"),T(e),e.push('<div class="knife4j-word-title">响应示例</div>'),e.push('<div class="knife4j-word-content"><pre class="knife4j-word-code-editor">'),t.responseBasicType?e.push(t.responseText):e.push(se(t.responseValue)),e.push("</pre></div>")}function $e(t,e){let a=t.reqParameters;T(e),e.push('<div class="knife4j-word-title">请求参数</div><br/>'),e.push('<div class="knife4j-word-content">'),e.push('<table class="knife4j-word-table">'),e.push("<thead><tr><th>参数名称</th><th>参数说明</th><th>请求类型</th><th>必须</th><th>数据类型</th><th>schema</th></tr></thead>"),e.push("<tbody>"),i.arrNotEmpty(a)?ae(a,e,1):e.push('<tr><td colspan="6">暂无</td></tr>'),e.push("</tbody>"),e.push("</table>"),e.push("</div>")}function te(t,e,a){t!=null&&t!=null&&t.length>0&&t.forEach(function(s){s.level=a,e.push("<tr>"),e.push("<td>"+I(s)+"</td>"),e.push("<td>"+i.toString(s.description,"")+"</td>"),e.push("<td>"+i.toString(s.type,"")+"</td>"),e.push("<td>"+i.toString(s.schemaValue,"")+"</td>"),e.push("</tr>"),te(s.children,e,s.level+1)})}function ae(t,e,a){t!=null&&t!=null&&t.length>0&&t.forEach(function(s){s.level=a,e.push("<tr>"),e.push("<td>"+I(s)+"</td>"),e.push("<td>"+i.toString(s.description,"")+"</td>"),e.push("<td>"+i.toString(s.in,"")+"</td>"),e.push("<td>"+i.toString(s.require,"")+"</td>"),e.push("<td>"+i.toString(s.type,"")+"</td>"),e.push("<td>"+i.toString(s.schemaValue,"")+"</td>"),e.push("</tr>"),ae(s.children,e,s.level+1)})}function I(t){for(var e=[],a=1;a<t.level;a++)e.push("&nbsp;");var s=e.join("")+t.name;return s}function se(t){try{return typeof t!="string"&&(t=JSON.stringify(t,void 0,2)),t=t.replace(/&/g,"&").replace(/</g,"<").replace(/>/g,">"),t.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,function(e){var a="number";return/^"/.test(e)?/:$/.test(e)?a="key":a="string":/true|false/.test(e)?a="boolean":/null/.test(e)&&(a="null"),'<span class="'+a+'">'+e+"</span>"})}catch(e){return t}}M.setOptions({gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1});function Ge(t){var e=[];return t!=null&&t!=null&&(Ze(e),Xe(t,e),Ce(t,e),Qe(t,e),Ye(e)),e.join(`
`)}function S(t){t.push(`
`)}function Ze(t){var e=`<!DOCTYPE HTML PUBLIC "-// W3C//DTD HTML 4.0 Transitional//EN">
  <html>
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
      <title>Export Word API</title>
      <script src="https:// cdn.bootcss.com/jquery/3.2.1/jquery.min.js"><\/script>
      <style type="text/css">
          .knife4j-word-body{
              width: 90%;
              margin: 20px auto;
              font-family:"宋体";
              font-size: 16px;
          }
          .knife4j-word-row{
              position: relative;
              height: auto;
              margin-right: 0;
              margin-left: 0;
              zoom: 1;
              display: block;
              box-sizing: border-box;
          }
          .knife4j-word-line{
              height: 35px;
              line-height:35px;
          }
          .knife4j-word-divider{
              height: 1px;
              background: #e8e8e8;
              border-bottom: 1px solid #e8e8e8;
          }
          .knife4j-word-title{
              font-weight: 600;
              font-size: 18px;
              margin-top: 15px;
              border-left: 3px solid #00ab6d;
          }
          .knife4j-word-api{
              margin-top: 10px;
          }
          .knife4j-word-content{
              margin-top: 10px;
          }
          .knife4j-word-code-editor{
              border: #ccc 1px solid;
              border-left-width: 4px;
              background-color: #fefefe;
              box-shadow: 0 0 4px #eee;
              word-break: break-all;
              word-wrap: break-word;
              color: #444;
          }
          .knife4j-word-code-editor .string { color: green; }        /*字符串的样式*/
          .knife4j-word-code-editor .number { color: darkorange; }    /*数字的样式*/
          .knife4j-word-code-editor .boolean { color: blue; }        /*布尔型数据的样式*/
          .knife4j-word-code-editor .null { color: magenta; }        /*null值的样式*/
          .knife4j-word-code-editor .key { color: red; }            /*key值的样式*/
          .knife4j-word-method{
              font-size: 14px;
              font-weight: 600;
              margin-right: 10px;
              text-align: center;
              border-radius: 3px;
              text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
          }
          .knife4j-word-table{
              width: 120%;
              border: 1px solid #c7c4c4;
              border-collapse: collapse;
          }
          .knife4j-word-table tr{
              border: 1px solid #c7c4c4;
              height: 40px;
          }
          .knife4j-word-table th{
              border: 1px solid #c7c4c4;
              background-color: #dfdada;
          }
          .knife4j-word-table td{
              border: 1px solid #c7c4c4;
          }
      </style>
  </head>
  <body>
  <div class="knife4j-word-body">`;t.push(e)}function Ye(t){t.push("</div></body></html>")}function Xe(t,e){e.push("<h1>1.Project</h1>"),e.push('<div class="knife4j-word-row">'),e.push('<div class="knife4j-word-line"><strong>title</strong>:'+t.title+"</div>"),e.push('<div class="knife4j-word-divider"></div>'),e.push('<div class="knife4j-word-line"><strong>Description</strong>:'+t.description+"</div>"),e.push('<div class="knife4j-word-divider"></div>'),e.push('<div class="knife4j-word-line"><strong>Author</strong>:<code>'+t.contact+"</code></div>"),e.push('<div class="knife4j-word-divider"></div>'),e.push('<div class="knife4j-word-line"><strong>HOST</strong>:'+t.host+"</div>"),e.push('<div class="knife4j-word-divider"></div>'),e.push('<div class="knife4j-word-line"><strong>basePath</strong>:'+t.basePath+"</div>"),e.push('<div class="knife4j-word-divider"></div>'),e.push('<div class="knife4j-word-line"><strong>termsOfService</strong>:'+t.termsOfService+"</div>"),e.push('<div class="knife4j-word-divider"></div>'),e.push('<div class="knife4j-word-line"><strong>Concat</strong>:'+t.contact+"</div>"),e.push('<div class="knife4j-word-divider"></div>'),e.push('<div class="knife4j-word-line"><strong>Version</strong>:'+t.version+"</div>"),e.push('<div class="knife4j-word-divider"></div>'),e.push('<div class="knife4j-word-line"><strong>GroupName</strong>:'+t.name+"</div>"),e.push('<div class="knife4j-word-divider"></div>'),e.push('<div class="knife4j-word-line"><strong>Group Url</strong>:'+t.url+"</div>"),e.push('<div class="knife4j-word-divider"></div>'),e.push('<div class="knife4j-word-line"><strong>Location</strong>:'+t.location+"</div>"),e.push('<div class="knife4j-word-divider"></div>'),e.push("</div>")}function Qe(t,e){i.checkUndefined(t.markdownFiles)&&i.arrNotEmpty(t.markdownFiles)&&(S(e),e.push("<h1>3.appendix</h1>"),t.markdownFiles.forEach(function(a,s){S(e);var r=s+1,n="3."+r+a.name;e.push("<h2>"+n+"</h2>"),i.arrNotEmpty(a.children)&&a.children.forEach(d=>{e.push("<h3>"+d.title+"</h3>"),e.push('<div class="knife4j-word-content">'),i.strNotBlank(d.content)&&e.push(M.parse(d.content)),e.push("</div>")})}))}function Ce(t,e){t.tags!=null&&t.tags!=null&&(e.push(`
`),e.push("<h1>2.Interface list</h1>"),t.tags.forEach(function(a,s){var r=parseInt(s)+1,n="2."+r,d=n+a.name;e.push("<h2>"+d+"</h2>"),S(e),a.childrens!=null&&a.childrens!=null&&a.childrens.length>0?a.childrens.forEach(function(p,h){var f=h+1;et(p,e,n,f)}):e.push("None")}))}function et(t,e,a,s){S(e);var r=a+"."+s+t.summary;e.push("<h3>"+r+"</h3>"),e.push('<div class="knife4j-word-api">'),e.push('<div class="knife4j-word-title">method</div>'),e.push('<div class="knife4j-word-content"><span class="knife4j-word-method">'+t.methodType+"</span>&nbsp;&nbsp;<code>"+t.showUrl+"</code></div>"),e.push('<div class="knife4j-word-title">Note</div>'),e.push('<div class="knife4j-word-content">'+i.toString(t.description,"暂无")+"</div>"),e.push('<div class="knife4j-word-title">Produces</div>'),e.push('<div class="knife4j-word-content"><code>'+i.toString(t.consumes,"*")+"</code></div>"),e.push('<div class="knife4j-word-title">Consumes</div>'),e.push('<div class="knife4j-word-content"><code>'+i.toString(t.produces,"*")+"</code></div>"),i.strNotBlank(t.author)&&(e.push('<div class="knife4j-word-title">Developer</div>'),e.push('<div class="knife4j-word-content">'+i.toString(t.author,"暂无")+"</div>")),i.checkUndefined(t.requestValue)&&(e.push('<div class="knife4j-word-title">Example</div>'),e.push('<div class="knife4j-word-content">'),e.push('<pre class="knife4j-word-code-editor">'),t.xmlRequest?e.push(t.requestValue):e.push(re(t.requestValue)),e.push("</pre>"),e.push("</div>")),it(t,e),tt(t,e),st(t,e),e.push("</div>")}function tt(t,e){i.checkUndefined(t.responseCodes)&&t.responseCodes.length>0&&(S(e),e.push('<div class="knife4j-word-title">Status</div><br/>'),e.push('<div class="knife4j-word-content">'),e.push('<table class="knife4j-word-table">'),e.push("<thead><tr><th>code</th><th>description</th><th>schema</th></tr></thead>"),e.push("<tbody>"),S(e),t.responseCodes.forEach(function(a){e.push("<tr>"),e.push("<td>"+i.toString(a.code,"")+"</td>"),e.push("<td>"+i.toString(a.description,"")+"</td>"),e.push("<td>"+i.toString(a.schema,"")+"</td>"),e.push("</tr>")}),e.push("</tbody>"),e.push("</table><br/>"),e.push("</div>"))}function at(t,e){i.checkUndefined(t)&&i.arrNotEmpty(t)&&(S(e),e.push('<div class="knife4j-word-title">响应Header</div>'),S(e),e.push('<div class="knife4j-word-content">'),e.push('<table class="knife4j-word-table">'),e.push("<thead><tr><th>name</th><th>description</th><th>type</th></tr></thead>"),e.push("<tbody>"),t.forEach(function(a){e.push("<tr>"),e.push("<td>"+i.toString(a.name,"")+"</td>"),e.push("<td>"+i.toString(a.description,"")+"</td>"),e.push("<td>"+i.toString(a.type,"")+"</td>"),e.push("</tr>")}),e.push("</tbody>"),e.push("</table>"),e.push("</div>"))}function st(t,e){if(t.multipartResponseSchema){var a=t.multipCodeDatas;i.arrNotEmpty(a)&&a.forEach(function(s){S(e),e.push('<div class="knife4j-word-title">code-'+i.toString(s.code,"")+"</div>"),G(s,e)})}else G(t.multipData,e)}function G(t,e){at(t.responseHeaderParameters,e),S(e),e.push('<div class="knife4j-word-title">Response Params</div>'),S(e),e.push('<div class="knife4j-word-content">'),e.push('<table class="knife4j-word-table">'),e.push("<thead><tr><th>name</th><th>description</th><th>type</th><th>schema</th></tr></thead>"),e.push("<tbody>"),i.arrNotEmpty(t.data)?t.data.forEach(function(a){a.level=1,e.push("<tr>"),e.push("<td>"+z(a)+"</td>"),e.push("<td>"+i.toString(a.description,"")+"</td>"),e.push("<td>"+i.toString(a.type,"")+"</td>"),e.push("<td>"+i.toString(a.schemaValue,"")+"</td>"),e.push("</tr>"),ie(a.children,e,a.level+1)}):e.push('<tr><td colspan="4">None</td></tr>'),e.push("</tbody>"),e.push("</table>"),e.push("</div>"),S(e),e.push('<div class="knife4j-word-title">Response Example</div>'),e.push('<div class="knife4j-word-content"><pre class="knife4j-word-code-editor">'),t.responseBasicType?e.push(t.responseText):e.push(re(t.responseValue)),e.push("</pre></div>")}function it(t,e){let a=t.reqParameters;S(e),e.push('<div class="knife4j-word-title">Params</div><br/>'),e.push('<div class="knife4j-word-content">'),e.push('<table class="knife4j-word-table">'),e.push("<thead><tr><th>name</th><th>description</th><th>type</th><th>require</th><th>type</th><th>schema</th></tr></thead>"),e.push("<tbody>"),i.arrNotEmpty(a)?ne(a,e,1):e.push('<tr><td colspan="6">None</td></tr>'),e.push("</tbody>"),e.push("</table>"),e.push("</div>")}function ie(t,e,a){t!=null&&t!=null&&t.length>0&&t.forEach(function(s){s.level=a,e.push("<tr>"),e.push("<td>"+z(s)+"</td>"),e.push("<td>"+i.toString(s.description,"")+"</td>"),e.push("<td>"+i.toString(s.type,"")+"</td>"),e.push("<td>"+i.toString(s.schemaValue,"")+"</td>"),e.push("</tr>"),ie(s.children,e,s.level+1)})}function ne(t,e,a){t!=null&&t!=null&&t.length>0&&t.forEach(function(s){s.level=a,e.push("<tr>"),e.push("<td>"+z(s)+"</td>"),e.push("<td>"+i.toString(s.description,"")+"</td>"),e.push("<td>"+i.toString(s.in,"")+"</td>"),e.push("<td>"+i.toString(s.require,"")+"</td>"),e.push("<td>"+i.toString(s.type,"")+"</td>"),e.push("<td>"+i.toString(s.schemaValue,"")+"</td>"),e.push("</tr>"),ne(s.children,e,s.level+1)})}function z(t){for(var e=[],a=1;a<t.level;a++)e.push("&nbsp;");var s=e.join("")+t.name;return s}function re(t){try{return typeof t!="string"&&(t=JSON.stringify(t,void 0,2)),t=t.replace(/&/g,"&").replace(/</g,"<").replace(/>/g,">"),t.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,function(e){var a="number";return/^"/.test(e)?/:$/.test(e)?a="key":a="string":/true|false/.test(e)?a="boolean":/null/.test(e)&&(a="null"),'<span class="'+a+'">'+e+"</span>"})}catch(e){return t}}function nt(t){var e=[];return t!=null&&t!=null&&(rt(t,e),pt(t,e),dt(t,e)),e.join(`
`)}function g(t){t.push(`
`)}function rt(t,e){e.push("# "+t.title),g(e),e.push("**Description**:"+t.description),g(e),e.push("**HOST**:"+t.host),g(e),e.push("**Contacts**:"+t.contact),g(e),e.push("**Version**:"+t.version),g(e),e.push("**URL**:"+t.url),g(e),e.push("[TOC]"),g(e)}function dt(t,e){i.checkUndefined(t.markdownFiles)&&t.markdownFiles.length>0&&(g(e),e.push("# appendix"),t.markdownFiles.forEach(function(a){g(e),i.arrNotEmpty(a.children)&&(e.push("## "+a.name),g(e),a.children.forEach(s=>{e.push("### "+s.title),e.push(s.content)}))}))}function pt(t,e){t.tags!=null&&t.tags!=null&&(e.push(`
`),t.tags.forEach(function(a){g(e),e.push("# "+a.name),a.childrens!=null&&a.childrens!=null&&a.childrens.length>0?a.childrens.forEach(function(s){lt(s,e)}):e.push("None")}))}function lt(t,e){g(e),e.push("## "+t.summary),g(e),e.push("**url**:`"+t.showUrl+"`"),g(e),e.push("**method**:`"+t.methodType+"`"),g(e),e.push("**produces**:`"+i.toString(t.consumes,"*")+"`"),g(e),e.push("**consumes**:`"+i.toString(t.produces,"*")+"`"),g(e),i.strNotBlank(t.author)&&(e.push("**author**:"+i.toString(t.author,"暂无")),g(e)),e.push("**Note**:"+i.toString(t.description,"暂无")),i.checkUndefined(t.requestValue)&&(g(e),e.push("**Example**:"),g(e),e.push("```javascript"),e.push(t.requestValue),e.push("```")),ht(t,e),ot(t,e),ct(t,e)}function ot(t,e){i.checkUndefined(t.responseCodes)&&t.responseCodes.length>0&&(g(e),e.push("**Status**:"),g(e),e.push("| code | description | schema |"),e.push("| -------- | -------- | ----- | "),t.responseCodes.forEach(function(a){e.push("|"+i.toString(a.code,"")+"|"+i.toString(a.description,"")+"|"+i.toString(a.schema,"")+"|")}))}function ut(t,e){i.checkUndefined(t)&&t.length>0&&(g(e),e.push("**Response Header**:"),g(e),e.push("| name | description | type |"),e.push("| -------- | -------- | ----- | "),t.forEach(function(a){e.push("|"+i.toString(a.name,"")+"|"+i.toString(a.description,"")+"|"+i.toString(a.type,"")+"|")}))}function ct(t,e){if(t.multipartResponseSchema){var a=t.multipCodeDatas;i.arrNotEmpty(a)&&a.forEach(function(s){g(e),e.push("**code-"+i.toString(s.code,"")+"**:"),Z(s,e)})}else Z(t.multipData,e)}function Z(t,e){ut(t.responseHeaderParameters,e),g(e),e.push("**Response Params**:"),g(e),i.arrNotEmpty(t.data)?(e.push("| name | description | type | schema |"),e.push("| -------- | -------- | ----- |----- | "),t.data.forEach(function(a){a.level=1,e.push("|"+A(a)+"|"+i.toString(a.description,"")+"|"+i.toString(a.type,"")+"|"+i.toString(a.schemaValue,"")+"|"),de(a.children,e,a.level+1)})):e.push("None"),g(e),e.push("**Response Example**:"),t.responseBasicType?(e.push("```text"),e.push(t.responseText),e.push("```")):(e.push("```javascript"),e.push(t.responseValue),e.push("```"))}function ht(t,e){let a=t.reqParameters;g(e),e.push("**Params**:"),i.arrNotEmpty(a)?(g(e),e.push("| name | description | in    | require | type | schema |"),e.push("| -------- | -------- | ----- | -------- | -------- | ------ |"),pe(a,e,1)):(g(e),e.push("暂无"))}function de(t,e,a){t!=null&&t!=null&&t.length>0&&t.forEach(function(s){s.level=a,e.push("|"+A(s)+"|"+i.toString(s.description,"")+"|"+i.toString(s.type,"")+"|"+i.toString(s.schemaValue,"")+"|"),de(s.children,e,s.level+1)})}function pe(t,e,a){t!=null&&t!=null&&t.length>0&&t.forEach(function(s){s.level=a,e.push("|"+A(s)+"|"+i.toString(s.description,"")+"|"+i.toString(s.in,"")+"|"+i.toString(s.require,"")+"|"+i.toString(s.type,"")+"|"+i.toString(s.schemaValue,"")+"|"),pe(s.children,e,s.level+1)})}function A(t){for(var e=[],a=1;a<t.level;a++)e.push("&emsp;&emsp;");var s=e.join("")+t.name;return s}const ft=[{title:"参数名称",dataIndex:"name",width:"30%"},{title:"参数说明",dataIndex:"description",width:"25%"},{title:"请求类型",dataIndex:"in",scopedSlots:{customRender:"typeTemplate"}},{title:"是否必须",dataIndex:"require",scopedSlots:{customRender:"requireTemplate"}},{title:"数据类型",dataIndex:"type",scopedSlots:{customRender:"datatypeTemplate"}},{title:"schema",dataIndex:"schemaValue",width:"15%"}],vt=[{title:"状态码",dataIndex:"code",width:"20%"},{title:"说明",dataIndex:"description",width:"55%",scopedSlots:{customRender:"descriptionTemplate"}},{title:"schema",dataIndex:"schema"}],gt=[{title:"参数名称",dataIndex:"name",width:"30%"},{title:"参数说明",dataIndex:"description",width:"55%"},{title:"数据类型",dataIndex:"type"}],yt=[{title:"参数名称",dataIndex:"name",width:"35%"},{title:"参数说明",dataIndex:"description",width:"40%"},{title:"类型",dataIndex:"type"},{title:"schema",dataIndex:"schemaValue",width:"15%"}];var Y=null;const mt={name:"Document",components:{editor:Te,DataType:U(()=>N(()=>import("./DataType-IphMGoH9.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url)),EditorShow:U(()=>N(()=>import("./EditorShow-CAMiJFqM.js"),__vite__mapDeps([8,9,1,2,3,4,5,6,7]),import.meta.url))},props:{api:{type:Object,required:!0},swaggerInstance:{type:Object,required:!0}},beforeCreate(){Y=this},data(){return{content:"<span>Hello</span>",columns:ft,responseHeaderColumns:gt,responseStatuscolumns:vt,responseParametersColumns:yt,expanRows:!0,multipCode:!1,multipCodeDatas:[],multipData:{},page:!1,reqParameters:[]}},created(){this.reqParameters=this.api.reqParameters,Y.initResponseCodeParams()},methods:{genUnionTableKey(){return i.randomMd5()},initRequestParams(){var t=[],e=this,a=D.globalTreeTableModelParams+this.api.instanceId;this.swaggerInstance.refTreeTableModels;var s=this.api;s.parameters!=null&&s.parameters.length>0&&(t=t.concat(s.parameters)),s.refTreetableparameters!=null&&s.refTreetableparameters.length>0&&s.refTreetableparameters.forEach(function(n){t=t.concat(n.params)}),t!=null&&t.sort(function(n,d){return d.require-n.require});let r=[];t!=null&&t.length>0&&t.forEach(function(n){if(n.pid=="-1"){if(n.children=[],n.schema){var d=n.schemaValue;if(i.checkUndefined(d)&&e.$Knife4jModels.exists(a,d)){var p=e.$Knife4jModels.getByModelName(a,d);if(i.checkUndefined(p)){var h=p.params;i.arrNotEmpty(h)&&h.forEach(function(f){var b=e.copyNewParameter(f);b.pid=n.id,n.children.push(b)})}}}i.arrNotEmpty(n.children)||(n.children=null),r.push(n)}}),e.reqParameters=r},storeCacheModels(t){var e=D.globalTreeTableModelParams+this.api.instanceId;this.$localStore.setItem(e,t)},deepTreeTableSchemaModel(t,e,a){var s=this,r=D.globalTreeTableModelParams+this.api.instanceId;if(i.checkUndefined(t.schemaValue)){var n=e[t.schemaValue];i.checkUndefined(n)&&(a.parentTypes.push(t.schemaValue),i.arrNotEmpty(n.params)&&n.params.forEach(function(d){var p=s.copyNewParameter(d);if(p.pid=t.id,t.children.push(p),p.schema&&a.parentTypes.indexOf(p.schemaValue)==-1){var h=p.schemaValue;if(i.checkUndefined(h))if(p.children=[],s.$Knife4jModels.exists(r,h)){var f=s.$Knife4jModels.getByModelName(r,h);i.arrNotEmpty(f)&&f.forEach(function(b){var u=s.copyNewParameter(b);u.pid=p.id,p.children.push(u)})}else s.deepTreeTableSchemaModel(p,e,a),p.children.length==0&&(p.children=null),s.$Knife4jModels.addModels(r,h,p.children)}}))}},copyNewParameter(t){var e={children:t.children,childrenTypes:t.childrenTypes,def:t.def,description:t.description,enum:t.enum,example:t.example,id:t.id,ignoreFilterName:t.ignoreFilterName,in:t.in,level:t.level,name:t.name,parentTypes:t.parentTypes,pid:t.pid,readOnly:t.readOnly,require:t.require,schema:t.schema,schemaValue:t.schemaValue,show:t.show,txtValue:t.txtValue,type:t.type,validateInstance:t.validateInstance,validateStatus:t.validateStatus,value:t.value};return e},findModelChildren(t,e){var a=this;e!=null&&e!=null&&e.length>0&&e.forEach(function(s){s.pid==t.id&&(s.children=[],a.findModelChildren(s,e),s.children.length==0&&(s.children=null),t.children.push(s))})},initResponseCodeParams(){var t=this;t.multipCode=t.api.multipartResponseSchema;let e=t.api.responseCodes;e!=null&&e!=null&&e.forEach(function(a){if(a.schema!=null&&a.schema!=null){var s=[];a.responseParameters!=null&&a.responseParameters.length>0&&(s=s.concat(a.responseParameters)),a.responseTreetableRefParameters!=null&&a.responseTreetableRefParameters.length>0&&a.responseTreetableRefParameters.forEach(function(d){s=s.concat(d.params)});let n=[];s!=null&&s.length>0&&s.forEach(function(d){d.pid=="-1"&&(d.children=[],d.children.length==0&&(d.children=null),n.push(d))});var r={...a,data:n};t.multipCode||(t.multipData=r),t.multipCodeDatas.push(r)}})},formaterJson(t){try{return typeof t!="string"&&(t=JSON.stringify(t,void 0,2)),t=t.replace(/&/g,"&").replace(/</g,"<").replace(/>/g,">"),t.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,function(e){var a="number";return/^"/.test(e)?/:$/.test(e)?a="key":a="string":/true|false/.test(e)?a="boolean":/null/.test(e)&&(a="null"),'<span class="'+a+'">'+e+"</span>"})}catch(e){return t}}}},bt={class:"knife4j-document"},xt={class:"knife4j-api-summary"},jt={class:"knife4j-api-summary-method"},Tt={class:"knife4j-api-summary-path"},St={key:0},_t=["innerHTML"],Et={key:1},wt=["innerHTML"],Pt={slot:"requireTemplate","slot-scope":"text"},Rt={key:0,style:{color:"red"}},Dt={key:1},qt={slot:"typeTemplate","slot-scope":"text"},Ht={slot:"datatypeTemplate","slot-scope":"text, record"},Vt={slot:"descriptionTemplate","slot-scope":"text"},Mt=["innerHTML"],Lt={key:2},Nt={key:0},Ut={key:1,class:"api-editor-show"},Ot=["innerHTML"],kt={key:3},Bt={key:0},It={key:1,class:"api-editor-show"},zt=["innerHTML"];function At(t,e,a,s,r,n){const d=O,p=X,h=V("data-type"),f=ue,b=ce,u=he;return y(),x("div",bt,[l(d,null,{default:o(()=>[l(d,{id:a.api.operationId,class:"knife4j-api-title"},{default:o(()=>[E(j(a.api.summary),1)]),_:1},8,["id"]),l(d,{class:W("knife4j-api-"+a.api.methodType.toLowerCase())},{default:o(()=>[c("div",xt,[c("span",jt,j(a.api.methodType),1),c("span",Tt,j(a.api.showUrl),1)])]),_:1},8,["class"]),l(d,{class:"knife4j-api-row"},{default:o(()=>[l(p,{span:12},{default:o(()=>[l(d,null,{default:o(()=>[l(p,{class:"api-basic-title",span:6},{default:o(()=>[...e[0]||(e[0]=[E("请求数据类型",-1)])]),_:1}),E(" "+j(a.api.consumes),1)]),_:1})]),_:1}),l(p,{span:12},{default:o(()=>[l(d,null,{default:o(()=>[l(p,{class:"api-basic-title",span:6},{default:o(()=>[...e[1]||(e[1]=[E("响应数据类型",-1)])]),_:1}),E(" "+j(a.api.produces),1)]),_:1})]),_:1})]),_:1})]),_:1}),a.api.description?(y(),x("div",St,[e[2]||(e[2]=c("div",{class:"api-title"}," 接口描述 ",-1)),a.api.description?(y(),x("div",{key:0,innerHTML:a.api.description,class:"api-body-desc"},null,8,_t)):w("",!0)])):w("",!0),a.api.requestValue?(y(),x("div",Et,[e[3]||(e[3]=c("div",{class:"api-title"}," 请求示例 ",-1)),c("pre",{class:"api-editor-show",innerHTML:n.formaterJson(a.api.requestValue)},null,8,wt)])):w("",!0),e[10]||(e[10]=c("div",{class:"api-title"}," 请求参数 ",-1)),l(f,{defaultExpandAllRows:"",columns:r.columns,dataSource:r.reqParameters,rowKey:n.genUnionTableKey,size:"small",pagination:r.page},{default:o(()=>[c("template",Pt,[t.text?(y(),x("span",Rt,j(t.text.toLocaleString()),1)):(y(),x("span",Dt,j(t.text.toLocaleString()),1))]),c("template",qt,[c("span",{class:W("knife4j-request-"+t.text)},j(t.text),3)]),c("template",Ht,[l(h,{text:t.text,record:t.record},null,8,["text","record"])])]),_:1},8,["columns","dataSource","rowKey","pagination"]),e[11]||(e[11]=c("div",{class:"api-title"}," 响应状态 ",-1)),l(f,{defaultExpandAllRows:r.expanRows,columns:r.responseStatuscolumns,dataSource:a.api.responseCodes,rowKey:"code",size:"small",pagination:r.page},{default:o(()=>[c("template",Vt,[c("div",{innerHTML:t.text},null,8,Mt)])]),_:1},8,["defaultExpandAllRows","columns","dataSource","pagination"]),a.api.multipartResponseSchema?(y(),x("div",Lt,[(y(!0),x(q,null,H(r.multipCodeDatas,m=>(y(),P(u,{key:m.code},{default:o(()=>[l(b,{tab:m.code},{default:o(()=>[m.responseHeaderParameters?(y(),x("div",Nt,[e[4]||(e[4]=c("div",{class:"api-title"}," 响应Header ",-1)),l(f,{defaultExpandAllRows:r.expanRows,columns:r.responseHeaderColumns,dataSource:m.responseHeaderParameters,rowKey:"id",size:"small",pagination:r.page},null,8,["defaultExpandAllRows","columns","dataSource","pagination"])])):w("",!0),e[5]||(e[5]=c("div",{class:"api-title"}," 响应参数 ",-1)),l(f,{defaultExpandAllRows:r.expanRows,columns:r.responseParametersColumns,dataSource:m.data,rowKey:"id",size:"small",pagination:r.page},null,8,["defaultExpandAllRows","columns","dataSource","pagination"]),e[6]||(e[6]=c("div",{class:"api-title"}," 响应示例 ",-1)),m.responseBasicType?(y(),x("div",Ut,j(m.responseText),1)):(y(),x("pre",{key:2,class:"api-editor-show",innerHTML:n.formaterJson(m.responseValue)},null,8,Ot))]),_:2},1032,["tab"])]),_:2},1024))),128))])):(y(),x("div",kt,[a.api.responseHeaderParameters?(y(),x("div",Bt,[e[7]||(e[7]=c("div",{class:"api-title"}," 响应Header ",-1)),l(f,{defaultExpandAllRows:r.expanRows,columns:r.responseHeaderColumns,dataSource:a.api.responseHeaderParameters,rowKey:"id",size:"small",pagination:r.page},null,8,["defaultExpandAllRows","columns","dataSource","pagination"])])):w("",!0),e[8]||(e[8]=c("div",{class:"api-title"}," 响应参数 ",-1)),l(f,{defaultExpandAllRows:r.expanRows,columns:r.responseParametersColumns,dataSource:r.multipData.data,rowKey:"id",size:"small",pagination:r.page},null,8,["defaultExpandAllRows","columns","dataSource","pagination"]),e[9]||(e[9]=c("div",{class:"api-title"}," 响应示例 ",-1)),r.multipData.responseBasicType?(y(),x("div",It,j(r.multipData.responseText),1)):(y(),x("pre",{key:2,class:"api-editor-show",innerHTML:n.formaterJson(r.multipData.responseValue)},null,8,zt))]))])}const le=k(mt,[["render",At],["__scopeId","data-v-85a60062"]]),Ft=Object.freeze(Object.defineProperty({__proto__:null,default:le},Symbol.toStringTag,{value:"Module"})),Wt={components:{OnlineDocument:U(()=>N(()=>Promise.resolve().then(()=>Ft),void 0,import.meta.url))},props:{instance:{type:Object,required:!0},tags:{type:Array,required:!0}},data(){return{hideShow:!0}},methods:{}},Kt={class:"title"},Jt={class:"description"},$t=["innerHTML"],Gt=["innerHTML"],Zt=["innerHTML"],Yt=["innerHTML"],Xt=["innerHTML"],Qt=["innerHTML"],Ct=["innerHTML"],ea=["innerHTML"],ta=["innerHTML"],aa=["href"],sa=["href"],ia=["id"];function na(t,e,a,s,r,n){const d=X,p=O,h=fe,f=ve,b=Q;return y(),P(p,null,{default:o(()=>[l(p,null,{default:o(()=>[l(d,{span:24},{default:o(()=>[c("div",Kt,[c("h2",null,j(a.instance.title),1)]),c("div",Jt,[l(p,{class:"content-line"},{default:o(()=>[l(d,{span:5},{default:o(()=>[...e[0]||(e[0]=[c("h3",null,"简介",-1)])]),_:1}),l(d,{span:19},{default:o(()=>[c("span",{innerHTML:a.instance.description},null,8,$t)]),_:1})]),_:1}),l(h,{class:"divider"}),l(p,{class:"content-line"},{default:o(()=>[l(d,{span:5},{default:o(()=>[...e[1]||(e[1]=[c("h3",null,"作者",-1)])]),_:1}),l(d,{span:19},{default:o(()=>[c("span",{innerHTML:a.instance.contact},null,8,Gt)]),_:1})]),_:1}),l(h,{class:"divider"}),l(p,{class:"content-line"},{default:o(()=>[l(d,{span:5},{default:o(()=>[...e[2]||(e[2]=[c("h3",null,"版本",-1)])]),_:1}),l(d,{span:19},{default:o(()=>[c("span",{innerHTML:a.instance.version},null,8,Zt)]),_:1})]),_:1}),l(h,{class:"divider"}),l(p,{class:"content-line"},{default:o(()=>[l(d,{span:5},{default:o(()=>[...e[3]||(e[3]=[c("h3",null,"host",-1)])]),_:1}),l(d,{span:19},{default:o(()=>[c("span",{innerHTML:a.instance.host},null,8,Yt)]),_:1})]),_:1}),l(h,{class:"divider"}),l(p,{class:"content-line"},{default:o(()=>[l(d,{span:5},{default:o(()=>[...e[4]||(e[4]=[c("h3",null,"basePath",-1)])]),_:1}),l(d,{span:19},{default:o(()=>[c("span",{innerHTML:a.instance.basePath},null,8,Xt)]),_:1})]),_:1}),l(h,{class:"divider"}),l(p,{class:"content-line"},{default:o(()=>[l(d,{span:5},{default:o(()=>[...e[5]||(e[5]=[c("h3",null,"服务Url",-1)])]),_:1}),l(d,{span:19},{default:o(()=>[c("span",{innerHTML:a.instance.termsOfService},null,8,Qt)]),_:1})]),_:1}),l(h,{class:"divider"}),l(p,{class:"content-line"},{default:o(()=>[l(d,{span:5},{default:o(()=>[...e[6]||(e[6]=[c("h3",null,"分组名称",-1)])]),_:1}),l(d,{span:19},{default:o(()=>[c("span",{innerHTML:a.instance.name},null,8,Ct)]),_:1})]),_:1}),l(h,{class:"divider"}),l(p,{class:"content-line"},{default:o(()=>[l(d,{span:5},{default:o(()=>[...e[7]||(e[7]=[c("h3",null,"分组url",-1)])]),_:1}),l(d,{span:19},{default:o(()=>[c("span",{innerHTML:a.instance.url},null,8,ea)]),_:1})]),_:1}),l(h,{class:"divider"}),l(p,{class:"content-line"},{default:o(()=>[l(d,{span:5},{default:o(()=>[...e[8]||(e[8]=[c("h3",null,"分组location",-1)])]),_:1}),l(d,{span:19},{default:o(()=>[c("span",{innerHTML:a.instance.location},null,8,ta)]),_:1})]),_:1}),l(h,{class:"divider"}),l(p,{class:"content-line"},{default:o(()=>[l(d,{span:5},{default:o(()=>[...e[9]||(e[9]=[c("h3",null,"接口统计信息",-1)])]),_:1}),l(d,{span:19},{default:o(()=>[(y(!0),x(q,null,H(a.instance.pathArrs,u=>(y(),P(p,{class:"content-line-count",key:u.method},{default:o(()=>[l(d,{span:3},{default:o(()=>[E(j(u.method),1)]),_:2},1024),l(d,{span:2},{default:o(()=>[l(f,{color:"#108ee9"},{default:o(()=>[E(j(u.count),1)]),_:2},1024)]),_:2},1024),l(h,{class:"divider-count"})]),_:2},1024))),128))]),_:1})]),_:1})])]),_:1})]),_:1}),l(p,{id:"knife4j-doc-m",class:"knife4j-doc-m"},{default:o(()=>[l(p,{style:{float:"right",width:"57px","z-index":"10000",overflow:"hidden"}},{default:o(()=>[l(b,{type:"link",id:"btnHide"},{default:o(()=>[...e[10]||(e[10]=[E("隐藏",-1)])]),_:1})]),_:1}),r.hideShow?(y(),P(p,{key:0,id:"knife4jDoc"},{default:o(()=>[c("ul",null,[e[11]||(e[11]=c("li",null,[c("a",{href:"#knife4jDocument"},"主页")],-1)),(y(!0),x(q,null,H(a.instance.tags,u=>(y(),x("li",{key:u.name},[c("a",{href:"#"+u.name},j(u.name),9,aa),c("ul",null,[(y(!0),x(q,null,H(u.childrens,m=>(y(),x("li",{key:m.id},[c("a",{href:"#"+m.operationId},j(m.summary),9,sa)]))),128))])]))),128))])]),_:1})):w("",!0)]),_:1}),(y(!0),x(q,null,H(a.tags,u=>(y(),P(p,{key:u.name},{default:o(()=>[c("h1",{id:u.name},j(u.name),9,ia)]),_:2},1024))),128))]),_:1})}const ra=k(Wt,[["render",na]]),da={props:{data:{type:Object}},components:{OnlineDocument:le,DownloadHtml:ra,FileMarkdownOutlined:me,FileTextOutlined:ye,FileWordOutlined:ge},setup(){const t=je(),e=L(()=>t.language),a=L(()=>t.swagger),s=L(()=>t.swaggerCurrentInstance),r=Ee(),{messages:n}=_e();return{language:e,swagger:a,swaggerCurrentInstance:s,Knife4jModels:r,messages:n,kloading:{show(p){t.showLoading(p)},destroy(){t.destroyLoading()}}}},data(){return{deepTagFlag:!1,tags:[],downloadType:"DownloadHtml",markdownText:"",expanRows:!0,downloadHtmlFlag:!1,downloadPDF:!1,modal:null,page:!1}},updated(){var t=this;t.downloadType=="DownloadHtml"&&this.downloadHtmlFlag&&setTimeout(()=>{t.downloadHtml(),t.kloading.destroy()},1500)},created(){this.initModels()},watch:{language:function(t,e){this.markdownText=null}},methods:{getCurrentI18nInstance(){return this.messages[this.language]},initModels(){var t=D.globalTreeTableModelParams+this.data.instance.id,e=this.data.instance.swaggerTreeTableModels;this.Knife4jModels.setValue(t,e)},deepTags(){var t=this,e=D.globalTreeTableModelParams+this.data.instance.id;if(!this.deepTagFlag){var a=this.data.instance.tags;i.arrNotEmpty(a)&&a.forEach(function(s){i.arrNotEmpty(s.childrens)&&s.childrens.forEach(function(r){r.init||t.swagger.initApiInfoAsync(r);var n=[];r.parameters!=null&&r.parameters.length>0&&(n=n.concat(r.parameters)),r.refTreetableparameters!=null&&r.refTreetableparameters.length>0&&r.refTreetableparameters.forEach(function(p){n=n.concat(p.params)}),n!=null&&n.sort(function(p,h){return h.require-p.require});var d=[];i.arrNotEmpty(n)&&n.forEach(function(p){if(p.pid=="-1"){if(p.children=[],p.schema){var h=p.schemaValue;if(i.checkUndefined(h)&&t.Knife4jModels.exists(e,h)){var f=t.Knife4jModels.getByModelName(e,h);if(f=t.swagger.analysisDefinitionRefTableModel(t.data.instance.id,f),i.checkUndefined(f)){var b=f.params;i.arrNotEmpty(b)&&b.forEach(function(u){var m=t.copyNewParameter(u);m.pid=p.id,p.children.push(m)})}}}i.arrNotEmpty(p.children)||(p.children=null),d.push(p)}}),r.reqParameters=d,t.deepResponseParameters(r)})}),this.tags=a,this.deepTagFlag=!0}},deepResponseParameters(t){var e=this,a=D.globalTreeTableModelParams+this.data.instance.id;t.multipCode=t.multipartResponseSchema,t.multipCodeDatas=[],t.multipData={};let s=t.responseCodes;s!=null&&s!=null&&s.forEach(function(r){if(r.schema!=null&&r.schema!=null){var n=[];r.responseParameters!=null&&r.responseParameters.length>0&&(n=n.concat(r.responseParameters)),r.responseTreetableRefParameters!=null&&r.responseTreetableRefParameters.length>0&&r.responseTreetableRefParameters.forEach(function(h){n=n.concat(h.params)});let p=[];n!=null&&n.length>0&&n.forEach(function(h){if(h.pid=="-1"){if(h.children=[],h.schema){var f=h.schemaValue;if(i.checkUndefined(f)&&e.Knife4jModels.exists(a,f)){var b=e.Knife4jModels.getByModelName(a,f);if(b=e.swagger.analysisDefinitionRefTableModel(e.data.instance.id,b),i.checkUndefined(b)){var u=b.params;i.arrNotEmpty(u)&&u.forEach(function(m){var R=e.copyNewParameter(m);R.pid=h.id,h.children.push(R)})}}}h.children.length==0&&(h.children=null),p.push(h)}});var d={...r,data:p};t.multipCode||(t.multipData=d),t.multipCodeDatas.push(d)}})},copyNewParameter(t){var e=t.children;i.checkUndefined(e)||(e=null);var a={children:e,childrenTypes:t.childrenTypes,def:t.def,description:t.description,enum:t.enum,example:t.example,id:t.id,ignoreFilterName:t.ignoreFilterName,in:t.in,level:t.level,name:t.name,parentTypes:t.parentTypes,pid:t.pid,readOnly:t.readOnly,require:t.require,schema:t.schema,schemaValue:t.schemaValue,show:t.show,txtValue:t.txtValue,type:t.type,validateInstance:t.validateInstance,validateStatus:t.validateStatus,value:t.value};return a},triggerDownloadOpenAPI(){var t=this.swaggerCurrentInstance.name,e=this.swaggerCurrentInstance.swaggerData,a=i.json5stringify(e),s=document.createElement("a"),r={},n=t+"_OpenAPI.json",d=window.URL.createObjectURL(new Blob([a],{type:(r.type||"text/plain")+";charset="+(r.encoding||"utf-8")}));s.href=d,s.download=n||"file",s.click(),window.URL.revokeObjectURL(d)},triggerDownloadPDF(){const t=this.getCurrentI18nInstance().message.offline.imple;be.info(t)},triggerDownloadWord(){const t=this,e=this.getCurrentI18nInstance().message.offline.word;t.kloading.show({text:e}),this.deepTags();const a=this.data.instance.id+"markdownFiles";F.getItem(a).then(s=>{var r=t.data.instance.markdownFiles;i.checkUndefined(s)&&i.arrNotEmpty(r)&&r.forEach(p=>{i.arrNotEmpty(p.children)&&p.children.forEach(h=>{var f=s[h.id];i.strNotBlank(f)&&(h.content=f)})});var n={title:t.data.instance.title,description:t.data.instance.title,contact:t.data.instance.contact,version:t.data.instance.version,host:t.data.instance.host,basePath:t.data.instance.basePath,termsOfService:t.data.instance.termsOfService,name:t.data.instance.name,url:t.data.instance.url,location:t.data.instance.location,pathArrs:t.data.instance.pathArrs,tags:t.tags,markdownFiles:r};let d="";this.getCurrentI18nInstance().lang==="zh"?d=Oe(n):d=Ge(n),setTimeout(()=>{t.downloadWord(d),t.kloading.destroy()},1e3)})},triggerDownloadMarkdown(){var t=this;const e=this.getCurrentI18nInstance().message.offline.markdown;t.kloading.show({text:e}),this.deepTags();const a=this.data.instance.id+"markdownFiles";F.getItem(a).then(s=>{const r=t.data.instance.markdownFiles;i.checkUndefined(s)&&i.arrNotEmpty(r)&&r.forEach(d=>{i.arrNotEmpty(d.children)&&d.children.forEach(p=>{var h=s[p.id];i.strNotBlank(h)&&(p.content=h)})});var n={title:t.data.instance.title,description:t.data.instance.title,contact:t.data.instance.contact,version:t.data.instance.version,host:t.data.instance.host,basePath:t.data.instance.basePath,termsOfService:t.data.instance.termsOfService,name:t.data.instance.name,url:t.data.instance.url,location:t.data.instance.location,pathArrs:t.data.instance.pathArrs,tags:t.tags,markdownFiles:r};(this.markdownText==null||this.markdownText=="")&&(this.getCurrentI18nInstance().lang==="zh"?this.markdownText=Re(n):this.markdownText=nt(n)),setTimeout(()=>{t.downloadMarkdown(t.markdownText),t.kloading.destroy()},1e3)})},triggerDownloadHtml(){let t=this;t.downloadType="DownloadHtml";var e=this.getCurrentI18nInstance().message.offline.html;t.kloading.show({text:e}),t.deepTags(),setTimeout(()=>{t.kloading.destroy(),t.downloadHtml()},1e3)},downloadWord(t){var e=document.createElement("a"),a={},s=this.data.instance.name+".doc",r=window.URL.createObjectURL(new Blob([t],{type:(a.type||"application/msword")+";charset="+(a.encoding||"utf-8")}));e.href=r,e.download=s||"file",e.click(),window.URL.revokeObjectURL(r)},downloadMarkdown(t){var e=document.createElement("a"),a={},s=this.data.instance.name+".md",r=window.URL.createObjectURL(new Blob([t],{type:(a.type||"text/plain")+";charset="+(a.encoding||"utf-8")}));e.href=r,e.download=s||"file",e.click(),window.URL.revokeObjectURL(r)},downloadHtml(){var t=document.createElement("a"),e=this.getHtmlContent(this.data.instance.title),a={},s=this.data.instance.name+".html",r=window.URL.createObjectURL(new Blob([e],{type:(a.type||"text/plain")+";charset="+(a.encoding||"utf-8")}));t.href=r,t.download=s||"file",t.click(),window.URL.revokeObjectURL(r)},deepRequestParameters(t){var e=null;return i.arrNotEmpty(t.children)&&(e=new Array,t.children.forEach(a=>{var s=this.deepRequestParameters(a);e.push({name:a.name,children:s,description:a.description,in:a.in,require:a.require,type:a.type,schemaValue:a.schemaValue})})),e},deepResponseStaticParameters(t){var e=null;return i.arrNotEmpty(t.children)&&(e=new Array,t.children.forEach(a=>{var s=this.deepResponseStaticParameters(a);e.push({name:a.name,children:s,description:a.description,id:a.id,type:a.type,schemaValue:a.schemaValue})})),e},getHtmlData(){var t=this,e=[].concat(t.tags);e.forEach(s=>{if(s.description=null,i.checkUndefined(s.childrens)&&i.arrNotEmpty(s.childrens)){var r=[];s.childrens.forEach(n=>{var d=null;i.arrNotEmpty(n.reqParameters)&&(d=new Array,n.reqParameters.forEach(u=>{var m=this.deepRequestParameters(u);d.push({name:u.name,children:m,description:u.description,in:u.in,require:u.require,type:u.type,schemaValue:u.schemaValue})}));var p=null;i.arrNotEmpty(n.responseCodes)&&(p=new Array,n.responseCodes.forEach(u=>{p.push({code:u.code,description:u.description,schema:u.schema})}));var h=null;i.arrNotEmpty(n.multipCodeDatas)&&(h=new Array,n.multipCodeDatas.forEach(u=>{var m=null;i.arrNotEmpty(u.responseHeaderParameters)&&(m=new Array,u.responseHeaderParameters.forEach(_=>{m.push({id:_.id,name:_.name,description:_.description,type:_.type})}));var R=null;i.arrNotEmpty(u.data)&&(R=new Array,u.data.forEach(_=>{var oe=this.deepResponseStaticParameters(_);R.push({name:_.name,children:oe,description:_.description,id:_.id,type:_.type,schemaValue:_.schemaValue})})),h.push({code:u.code,responseHeaderParameters:m,data:R,responseBasicType:u.responseBasicType,responseText:u.responseText,responseValue:u.responseValue})}));var f=null;if(i.arrNotEmpty(n.responseHeaderParameters)&&(f=new Array,n.responseHeaderParameters.forEach(u=>{f.push({id:u.id,name:u.name,description:u.description,type:u.type})})),i.checkUndefined(n.multipData)){var b=null;i.checkUndefined(n.multipData.data)&&i.arrNotEmpty(n.multipData.data)&&(b=new Array,n.multipData.data.forEach(u=>{var m=this.deepResponseStaticParameters(u);b.push({name:u.name,children:m,description:u.description,id:u.id,type:u.type,schemaValue:u.schemaValue})})),n.multipData.responseBasicType,n.multipData.responseText,n.multipData.responseValue}r.push({id:n.id,operationId:n.operationId,deprecated:n.deprecated,summary:n.summary,methodType:n.methodType,showUrl:n.showUrl,consumes:n.consumes,produces:n.produces,author:n.author,description:n.description,requestValue:n.requestValue,reqParameters:d,responseCodes:p,multipartResponseSchema:n.multipartResponseSchema,multipCodeDatas:h,responseHeaderParameters:f,multipData:n.multipData})}),s.childrens=r}});var a={instance:{title:t.data.instance.title,description:t.data.instance.title,contact:t.data.instance.contact,version:t.data.instance.version,host:t.data.instance.host,basePath:t.data.instance.basePath,termsOfService:t.data.instance.termsOfService,name:t.data.instance.name,url:t.data.instance.url,location:t.data.instance.location,pathArrs:t.data.instance.pathArrs},hideShow:!0,tags:e};return a},getHtmlContent(t){""+this.data.instance.id,(t==null||t==null||t=="")&&(t="Knife4j-API Documenation");var e=JSON.stringify(this.getHtmlData());return this.getCurrentI18nInstance().lang==="zh"?we(t,K,e):Pe(t,K,e)}}},pa={class:"markdown-row"},la={class:"globalparameters"},oa={class:"gptips"},ua=["id"];function ca(t,e,a,s,r,n){const d=V("FileMarkdownOutlined"),p=Q,h=V("FileTextOutlined"),f=V("FileWordOutlined"),b=O,u=xe;return y(),P(u,{class:"knife4j-body-content"},{default:o(()=>[c("div",pa,[c("div",la,[c("div",oa,j(t.$t("offline.des")),1)]),l(b,{class:"knife4j-download-button"},{default:o(()=>[l(p,{onClick:n.triggerDownloadMarkdown},{default:o(()=>[l(d),c("span",null,j(t.$t("offline.download.markdown")),1)]),_:1},8,["onClick"]),l(p,{type:"default",onClick:n.triggerDownloadHtml},{default:o(()=>[l(h),c("span",null,j(t.$t("offline.download.html")),1)]),_:1},8,["onClick"]),l(p,{type:"default",onClick:n.triggerDownloadWord},{default:o(()=>[l(f),c("span",null,j(t.$t("offline.download.word")),1)]),_:1},8,["onClick"]),l(p,{type:"default",onClick:n.triggerDownloadOpenAPI},{default:o(()=>[l(h),e[0]||(e[0]=c("span",null,"OpenAPI",-1))]),_:1},8,["onClick"])]),_:1}),a.data.instance?(y(),x("div",{key:0,class:"htmledit_views",id:"content_views"+a.data.instance.id},[(y(),P(Se(r.downloadType),{instance:a.data.instance,tags:r.tags},null,8,["instance","tags"]))],8,ua)):w("",!0)])]),_:1})}const xa=k(da,[["render",ca],["__scopeId","data-v-abc7ad75"]]);export{xa as default};
