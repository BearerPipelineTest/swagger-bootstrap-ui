(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{507:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"增强模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增强模式"}},[t._v("#")]),t._v(" 增强模式")]),t._v(" "),a("p",[t._v("Knife4j自2.0.6版本开始,将目前在Ui界面中一些个性化配置剥离,开发者可以在后端进行配置，并且提供的knife4j-spring-boot-strater组件自动装载")]),t._v(" "),a("p",[t._v("spring.factories配置如下：")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Auto Configure")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("org.springframework.boot.autoconfigure.EnableAutoConfiguration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("\\\ncom.github.xiaoymin.knife4j.spring.configuration.Knife4jAutoConfiguration")]),t._v("\n\n")])])]),a("p",[t._v("在Spring Boot配置文件中,完整的配置如下:")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("knife4j")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("documents")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.2.x\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 测试自定义标题分组\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("locations")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" classpath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("md/*\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("setting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableSwaggerModels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableDocumentManage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableHost")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableHostText")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("999")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableRequestCache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableFilterMultipartApis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableFilterMultipartApiMethodType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" POST\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("language")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" zh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("CN\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("production")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("basic")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("\n")])])]),a("p",[t._v("在以前的版本中,开发者需要在配置文件中手动使用"),a("code",[t._v("@EnableKnife4j")]),t._v("来使用增强，自2.0.6版本后,只需要在配置文件中配置"),a("code",[t._v("knife4j.enable=true")]),t._v("即可不在使用注解")]),t._v(" "),a("p",[a("strong",[t._v("注意：要使用Knife4j提供的增强，"),a("code",[t._v("knife4j.enable=true")]),t._v("必须开启")])]),t._v(" "),a("p",[t._v("各个配置属性说明如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("说明值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("knife4j.enable")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("是否开启Knife4j增强模式")])]),t._v(" "),a("tr",[a("td",[t._v("knife4j.cors")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("是否开启一个默认的跨域配置,该功能配合自定义Host使用")])]),t._v(" "),a("tr",[a("td",[t._v("knife4j.production")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("是否开启生产环境保护策略,详情参考"),a("RouterLink",{attrs:{to:"/knife4j/accessControl.html"}},[t._v("文档")])],1)]),t._v(" "),a("tr",[a("td",[t._v("knife4j.basic")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("对Knife4j提供的资源提供BasicHttp校验,保护文档")])]),t._v(" "),a("tr",[a("td",[t._v("knife4j.basic.enable")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("关闭BasicHttp功能")])]),t._v(" "),a("tr",[a("td",[t._v("knife4j.basic.username")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("basic用户名")])]),t._v(" "),a("tr",[a("td",[t._v("knife4j.basic.password")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("basic密码")])]),t._v(" "),a("tr",[a("td",[t._v("knife4j.documents")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("自定义文档集合，该属性是数组")])]),t._v(" "),a("tr",[a("td",[t._v("knife4j.documents.group")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("所属分组")])]),t._v(" "),a("tr",[a("td",[t._v("knife4j.documents.name")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("类似于接口中的tag,对于自定义文档的分组")])]),t._v(" "),a("tr",[a("td",[t._v("knife4j.documents.locations")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("markdown文件路径,可以是一个文件夹("),a("code",[t._v("classpath:markdowns/*")]),t._v(")，也可以是单个文件("),a("code",[t._v("classpath:md/sign.md")]),t._v(")")])]),t._v(" "),a("tr",[a("td",[t._v("knife4j.setting")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("前端Ui的个性化配置属性")])]),t._v(" "),a("tr",[a("td",[t._v("knife4j.setting.enableAfterScript")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("调试Tab是否显示AfterScript功能,默认开启")])]),t._v(" "),a("tr",[a("td",[t._v("knife4j.setting.language")]),t._v(" "),a("td",[t._v("zh-CN")]),t._v(" "),a("td",[t._v("Ui默认显示语言,目前主要有两种:中文(zh-CN)、英文(en-US)")])]),t._v(" "),a("tr",[a("td",[t._v("knife4j.setting.enableSwaggerModels")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("是否显示界面中SwaggerModel功能")])]),t._v(" "),a("tr",[a("td",[t._v("knife4j.setting.swaggerModelName")]),t._v(" "),a("td",[a("code",[t._v("Swagger Model")])]),t._v(" "),a("td",[t._v("重命名SwaggerModel名称,默认")])]),t._v(" "),a("tr",[a("td",[t._v("knife4j.setting.enableDocumentManage")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v('是否显示界面中"文档管理"功能')])]),t._v(" "),a("tr",[a("td",[t._v("knife4j.setting.enableReloadCacheParameter")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("是否在每个Debug调试栏后显示刷新变量按钮,默认不显示")])]),t._v(" "),a("tr",[a("td",[t._v("knife4j.setting.enableVersion")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("是否开启界面中对某接口的版本控制,如果开启，后端变化后Ui界面会存在小蓝点")])]),t._v(" "),a("tr",[a("td",[t._v("knife4j.setting.enableRequestCache")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("是否开启请求参数缓存")])]),t._v(" "),a("tr",[a("td",[t._v("knife4j.setting.enableFilterMultipartApis")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("针对RequestMapping的接口请求类型,在不指定参数类型的情况下,如果不过滤,默认会显示7个类型的接口地址参数,如果开启此配置,默认展示一个Post类型的接口地址")])]),t._v(" "),a("tr",[a("td",[t._v("knife4j.setting.enableFilterMultipartApiMethodType")]),t._v(" "),a("td",[t._v("POST")]),t._v(" "),a("td",[t._v("具体接口的过滤类型")])]),t._v(" "),a("tr",[a("td",[t._v("knife4j.setting.enableHost")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("是否启用Host")])]),t._v(" "),a("tr",[a("td",[t._v("knife4j.setting.enableHostText")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("启用Host后的地址")])])])]),t._v(" "),a("p",[t._v("关于个性化文档("),a("code",[t._v("knife4j.documents")]),t._v(")以及个性化设置("),a("code",[t._v("knife4j.setting")]),t._v("),有一些细微的区别,开发者在配置文件中进行配合好后,还需要在创建Docket对象时调用"),a("code",[t._v("Knife4j")]),t._v("提供的扩展Extesions进行赋值")]),t._v(" "),a("p",[t._v("示例代码如下：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableSwagger2WebMvc")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SwaggerConfiguration")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*引入Knife4j提供的扩展类*/")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OpenApiExtensionResolver")]),t._v(" openApiExtensionResolver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Autowired")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SwaggerConfiguration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OpenApiExtensionResolver")]),t._v(" openApiExtensionResolver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("openApiExtensionResolver "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" openApiExtensionResolver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"defaultApi2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Docket")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defaultApi2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" groupName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.X版本"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Docket")]),t._v(" docket"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Docket")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DocumentationType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SWAGGER_2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.baidu.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apiInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apiInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("groupName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("groupName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestHandlerSelectors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("basePackage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.swagger.bootstrap.ui.demo.new2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PathSelectors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//赋予插件体系")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("extensions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("openApiExtensionResolver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildExtensions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("groupName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" docket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("buildExtensions")]),t._v("方法需要传入分组名称,该分组名称主要是为了区分开发者在构建自定义文档时，在不同的Docket逻辑分组下进行区别显示。")]),t._v(" "),a("p",[a("code",[t._v("OpenApiExtensionResolver")]),t._v("辅助类需要配置"),a("code",[t._v("knife4j.enable=true")]),t._v("才能自动"),a("code",[t._v("@Autowired")])]),t._v(" "),a("p",[t._v("增强效果开启后,在最终调用接口时，Knife4j会添加扩展属性"),a("code",[t._v("x-openapi")]),t._v(",如下图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/knife4j/images/knife4j/enc.png",alt:""}})]),t._v(" "),a("comment-comment")],1)}),[],!1,null,null,null);s.default=e.exports}}]);