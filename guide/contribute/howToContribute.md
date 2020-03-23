---
sidebar: auto
---

## 介绍
Antmove - 小程序转换器，基于支付宝/微信小程序转换为多端小程序，让小程序跨平台开发变得简单。
一键实现小程序转换迁徙，不再为重复开发而烦恼。
## 基础
Antmove并不是开发框架，准确的说是源码到源码的转换器。意思是向Antmove提供微信、支付宝等多端小程序的源码，通过Antmove转换为其他小程序。
### 基本原理
* Antmove转换小程序大致分为三个阶段，分别为转换前、转换中和转换后
* 转换前，Antmove对小程序做了预处理，包括判断小程序的平台、使用者配置的开发环境、判断转换的完整小程序还是组件维度等。
* 转换中，Antmove对模版，样式，Json，Js等文件进行处理，以达到跨平台开发的目的。
* 转换后，在转换后的文件中生成_antmove文件，该文件中包含对API、组件、生命周期的差异支持和抹平。
### 文件结构对象（parseDir）
* 介绍
> 在解析项目时会使用到一个文件结构对象fileInfo，上面记录了文件路径、文件名称、文件结构等相关信息。
* 对象字段说明
```json
{
  "type" : "file", // 文件类型
  "path" : "User/../UserLogin/login.wxml", // 文件路径
  "filename" : "login.wxml", // 文件名称
  "extname" : ".wxml", // 扩展名称
  "dirname" : "User/../UserLogin", // 目录名称
  "basename" : "UserLogin", // 基础名称
  "children" : {
    "type" : "",
    "path" : "",
    //...
    // 结构与外层相同
  },
  "parent" : {
    // 结构与children相同
  },
  "deep" : 3, // 相对小程序根目录的结构深度
  "entry" : "", // 输入路径
  "dist" : "", // 输出路径
}
```
• 如何使用（配合代码示例）
• 插件代码示例
### 编译时文件对象
在config里记录了组件、API、JSON配置、生命周期的描述文件。在Antmove编译时参照config中描述进行编译。同时根据描述制作了Antmove的官网文档等。
#### 组件描述对象
```json
{
    "componentName" : { // 组件
    "name" : "", // 组件名称
    "url" : {
        "beforeUrl" : "", //转换前平台该API参考网址
        "afterUrl" : "" //转换后平台该API参考网址
    },
    "desc" : "" , // 组件描述
    "props" : { // 属性
        "propName" : { // 属性名
        "type" : "", // 支持差异（值与API描述对象的支持差异相同） 
        "status" : "", // 支持程度
        "desc" : "" // 属性描述
      }, 
    },
  }
}
```
#### API 描述对象
```json
{
    "apiName (api名称)" : {
    "status (支持程度)" : ,// 0 - 完整支持 / 1 - 部分支持 / 2 - 不支持
    "desc (api的描述)" : "" ,
    "url" : {
            "beforeUrl" : "转换前平台该API参考网址",
            "afterUrl" : "转换后平台该API参考网址"
    },
    "body" : {
            "msg" : "api抹平描述信息",
            "returnValue (返回值)" : {
                "props" : {
                    "returnValueName (返回值名称)" : {
                        "type (支持差异)" : 
                                     /**0 - missing - 不支持该属性/
                                        1 - diff - 命名格式说明/
                                        3 - difftype - 类型不同/
                                        4 - defaultValue - 默认值不同/
                                        5 - wrapComponent - 使用自定义组件/
                                        6 - diff tagName/
                                        7 - equal - 完全支持*/  ,
                        "desc" : "返回值描述信息"
                    }
                }
            },
            "params (入参)" : {
                /**
                结构与返回值相同
                */
            }
        }
    }
}
```
#### json 配置描述对象
```json
{
    "JSONName" : { // 配置
    "name" : "", // 配置名称
    "url" : {
        "beforeUrl" : "", //转换前平台该API参考网址
        "afterUrl" : "" //转换后平台该API参考网址
    },
    "desc" : "" , // 配置描述
    "props" : { // 属性
        "propName" : { // 属性名
        "type" : "", // 支持差异（值与API描述对象的支持差异相同） 
        "status" : "", // 支持程度
        "desc" : "" // 属性描述
      }, 
    },
  }
}
```
#### App/Page/Component 描述对象
```json
{
    "lifeName (生命周期名称)" : {
    "status (支持程度)" : ,//0 - 完整支持 / 1 - 部分支持 / 2 - 不支持
    "desc (api的描述)" : "" ,
    "url" : {
            "beforeUrl" : "转换前平台该API参考网址",
            "afterUrl" : "转换后平台该API参考网址"
        },
    "body" : {
        "msg" : "api抹平描述信息",
        "returnValue (返回值)" : {
                "props" : {
                    "returnValueName (返回值名称)" : {
                    "type (支持差异)" : 
                                     /**0 - missing - 不支持该属性/
                                        1 - diff - 命名格式说明/
                                        3 - difftype - 类型不同/
                                        4 - defaultValue - 默认值不同/
                                        5 - wrapComponent - 使用自定义组件/
                                        6 - diff tagName/
                                         - equal - 完全支持*/  ,
                    "desc" : "返回值描述信息"
                    }
                }
            },
            "params (入参)" : {
                /**
                结构与返回值相同
                */
            }
        }
    }
}
```
## 项目结构
* bin > 定义和使用Antmove的配置
* src > Antmove工具入口文件
* packages/@antmove > 包含wx-alipay在内的各转换工具集合
* wx-aipay-plugin > 微信平台转支付宝平台工具
* __api > 对API能力的支持和抹平
* __component > 抹平部分微信端支持但支付宝端不支持的组件/框架接口的处理
* classSubdirectory > 框架接口的处理
* app.js > 对小程序App的处理
* page.js > 对页面的处理
* componnet.js > 对自定义组件的处理
* config > 小程序平台差异的配置文件
* generate > 转换中对源码处理并生成文件
* lifeCircles > 小程序转换主要文件，对'.wxml'、'.wxss'、'.js'、'.json'、'.wxs'等文件进行转换处理
* utils > 各转换工具的公共工具集合
## 实现原理
### 模板转换（wxml）
* 介绍
> Antmove在转换模版时会进行替换扩展名、检测wxs、处理标签、处理标签属性等步骤。
* 原理说明
> Antmove会在编译时先替换源码模版的扩展名，之后会检测模版中引用的wxs模块转换成支付宝端支持的sjs文件进而引用。当然双端模版标签属性会有不同，Antmove会对标签进行过滤，下面会看到代码示例。
* 代码示例
* 插件代码索引（github 代码链接）
> https://github.com/ant-move/Antmove/blob/master/packages/%40antmove/wx-alipay-plugin/lifeCycles/compile/compileWxml.js
### 逻辑转换（js）
* 介绍
> Antmove对各级接口进行过滤。同时在js文件我们经常会使用到基础库提供的API，Antmove在编译时会在js文件引入‘__antmove/api/index’，该文件提供了经过过滤的api来抹平跨平台差异。
* 原理说明
> 在编译时Antmove在各级接口引入'__antmove/component/componentClass.js',对接口对象进行了过滤处理。意思是将接口对象传到我们的过滤工具中，通过我们的工具对生命周期、api、函数、接口对象等进行支持和抹平。
* 代码示例
* 插件代码索引
> https://github.com/ant-move/Antmove/blob/master/packages/%40antmove/wx-alipay-plugin/lifeCycles/compile/compileJs.js
### 样式转换（wxss）
* 介绍
> Antmove在过滤样式文件时，最大可能的保持了文件的原貌。当然我们也要注意，当从微信转到支付宝时不要使用属性选择器，支付宝端并不支持属性选择器。
* 原理说明
> Antmove在改掉文件后缀名（wxss改为acss）后，当判断存在引入的外部样式时会把‘@import’的路径改为支付宝可以识别的路径样式。转换后的app.acss文件还会引入一个全局样式@import  "/__antmove/static/app.acss"。
* 代码示例
* 插件代码索引
> https://github.com/ant-move/Antmove/blob/master/packages/%40antmove/wx-alipay-plugin/lifeCycles/compile/compileWxss.js
### 配置文件转换（json）
* 介绍
> 对于json我们主要对配置做了处理，转换成了支付宝小程序可识别的配置。
* 原理说明
> Antmove利用编译时文件对象进行配置名称的替换，同时对usingComponents的路径进行了处理。
* 代码示例
* 插件代码索引
> https://github.com/ant-move/Antmove/blob/master/packages/%40antmove/wx-alipay-plugin/lifeCycles/index.js
### API 运行时处理
* 介绍
> 在小程序中，我们时一定会用到提供的API。但可使用的开放能力和API命名等都有所不同。Antmove利用过滤文件进行了支持与抹平
* 原理说明
> 在用到api的脚本，Antmove会引入‘const _my =reqiure("/__antmove/api/index.js")’，引入文件对所用到的api做了过滤处理，当用到支付宝端不支持的api或者api属性、返回值等，Antmove都会进行警告等处理。原本的 ‘_my.xxx’ 相当于 ‘my.xxx’ 。
* 代码示例
* 插件代码索引
> https://github.com/ant-move/Antmove/tree/master/packages/%40antmove/wx-alipay-plugin/__api
### 页面和自定义组件运行时处理
* 介绍
> Antmove对组件、页面、全局的接口对象进行了转换，对生命周期、事件、observer、relations、behavior等进行了支持和抹平
* 原理说明
> 在编译时，Antmove对各js文件进行甄别，确定各级接口分别引入接口对应的过滤文件。在运行时，过滤文件和把接口对象中的各个对象进行处理，在页面渲染前会对behavior，relations等进行预处理。之后会对各生命周期用到的功能进行支持和抹平。
* 代码示例
* 插件代码索引
> https://github.com/ant-move/Antmove/blob/master/packages/%40antmove/wx-alipay-plugin/__component/componentClass.js
### 自定义封装组件处理（custom-map）
* 介绍
> 平台间的组件能力也有差别，例如map组件。Antmove选择自定义封装组件来处理类似问题。
* 原理说明
> 组件不支持的属性和返回值会利用api和自定义逻辑来抹平，如果开放能力不允许会进行警告等处理方式。
* 代码示例
* 插件代码索引
> https://github.com/ant-move/Antmove/tree/master/packages/%40antmove/wx-alipay-plugin/component