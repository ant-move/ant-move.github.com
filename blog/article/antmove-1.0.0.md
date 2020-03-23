---
sidebar: auto
---

# 小程序转换器 Antmove 1.0.0 发布

Antmove 是一个小程序转换器，也是一种轻量级的小程序多端解决方案。它支持多种小程序平台的转换，也支持组件维度的转换，帮助小程序开发者提升开发效率，改善开发体验，降低多小程序平台开发成本。

自开源以来，Antmove 受到许多用户的关注，也成功帮助许多产品实现了跨小程序平台上线，这对我们来说是非常令人振奋的。但在发布初期 Antmove 转换支持程度不是十分完善，也存在 bug 缺陷，在众多用户的反馈和 Antmove 团队的努力下，Antmove 在转换能力的支持和稳定性上得到了改进，也提供了更多平台的支持。下面让我们一睹 Antmoe 1.0.0 版本带来哪些新的功能特性。

## 目录

<div class="wrap___9tcvZ undefined" ><ul class="directory___2WZ_s"><li class="directory-item"><a class="directory-item-link directory-item-link-1" href="#fe17ef94" title="更多小程序平台支持"><span>更多小程序平台支持</span></a></li><li class="directory-item"><a class="directory-item-link directory-item-link-1" href="#a52f3268" title="微信小程序转支付宝小程序能力极大提升"><span>微信小程序转支付宝小程序能力极大提升</span></a></li><li class="directory-item"><a class="directory-item-link directory-item-link-1" href="#fc4bec72" title="转换能力定制化"><span>转换能力定制化</span></a></li><li class="directory-item"><a class="directory-item-link directory-item-link-1" href="#7db88eb4" title="开发体验提升"><span>开发体验提升</span></a></li><li class="directory-item"><a class="directory-item-link directory-item-link-1" href="#37d92218" title="开发者生态完善"><span>开发者生态完善</span></a></li><li class="directory-item"><a class="directory-item-link directory-item-link-2" href="#d1088dd1" title="快速预览"><span>快速预览</span></a></li><li class="directory-item"><a class="directory-item-link directory-item-link-1" href="#d5c59ae3" title="谁在使用"><span>谁在使用</span></a></li><li class="directory-item"><a class="directory-item-link directory-item-link-2" href="#439845b8" title="微信小程序"><span>微信小程序</span></a></li><li class="directory-item"><a class="directory-item-link directory-item-link-2" href="#42d9221b" title="支付宝小程序"><span>支付宝小程序</span></a></li><li class="directory-item"><a class="directory-item-link directory-item-link-2" href="#6529c663" title="高德小程序"><span>高德小程序</span></a></li><li class="directory-item"><a class="directory-item-link directory-item-link-1" href="#5b5d312a" title="未来规划"><span>未来规划</span></a></li></ul></div>

## 更多小程序平台支持
经过这段时间的努力，现在 Antmove 支持更多平台的小程序转换，开源初期释放的能力地图以及实现，接下来我们会在跨平台能力支持上继续努力，也会提供更多转换能力文档出来，便于用户定制化转换能力。

![plugins](https://img.alicdn.com/tfs/TB13u6Cb4z1gK0jSZSgXXavwpXa-3852-936.png)

| # | 编译命令 | 描述 | 文档 | GitHub | Npm |
|--|--|--|--|--|--|
| 1 | wx-alipay | 微信小程序转支付宝小程序，支持阿里系其它平台小程序编译（如 钉钉小程序） | [README.md](https://github.com/ant-move/Antmove/blob/master/packages/%40antmove/wx-alipay-plugin/README.md)| [Github](https://github.com/ant-move/Antmove/tree/master/packages/%40antmove/wx-alipay-plugin) | [@antmove/wx-alipay - npm](https://www.npmjs.com/package/@antmove/wx-alipay) |
| 2 | wx-baidu | 微信小程序转百度智能小程序 | [README.md](https://github.com/ant-move/Antmove/blob/master/packages/%40antmove/wx-baidu-plugin/README.md) | [Github](https://github.com/ant-move/Antmove/tree/master/packages/%40antmove/wx-baidu-plugin) | [@antmove/wx-baidu - npm](https://www.npmjs.com/package/@antmove/wx-baidu) |
| 3 | wx-tt （非正式版）| 微信小程序转字节跳动小程序 | [README.md](https://github.com/ant-move/Antmove/blob/master/packages/%40antmove/wx-tt-plugin/README.md) | [Github](https://github.com/ant-move/Antmove/tree/master/packages/%40antmove/wx-tt-plugin) | [@antmove/wx-tt - npm](https://www.npmjs.com/package/@antmove/wx-tt)|
| 4 | alipay-wx | 支付宝小程序转微信小程序 | [README.md](https://github.com/ant-move/Antmove/blob/master/packages/%40antmove/alipay-wx-plugin/README.md) | [Github](https://github.com/ant-move/Antmove/tree/master/packages/%40antmove/alipay-wx-plugin) | [@antmove/alipay-wx - npm](https://www.npmjs.com/package/@antmove/alipay-wx)|
| 5 | alipay-baidu | 支付宝小程序转百度智能小程序 |  [README.md](https://github.com/ant-move/Antmove/blob/master/packages/%40antmove/alipay-baidu-plugin/README.md) | [Github](https://github.com/ant-move/Antmove/tree/master/packages/%40antmove/alipay-baidu-plugin) | [@antmove/alipay-baidu - npm](https://www.npmjs.com/package/@antmove/alipay-baidu)|
| 6 | wx-compiler | 对于有跨平台代码编写的，可以用该命令得到纯净的微信小程序代码 | [README.md](https://github.com/ant-move/Antmove/blob/master/packages/%40antmove/wx-wx-plugin/README.md) | [Github](https://github.com/ant-move/Antmove/tree/master/packages/%40antmove/wx-wx-plugin)  | [@antmove/wx-wx - npm](https://www.npmjs.com/package/@antmove/wx-wx) |
| 7 | alipay-compiler | 原生支付宝小程序引用 Antmove 转换而来的组件库时，使用该命令对引用项目编译，以支持 relations 和 selectComponent 能力 | [README.md](https://github.com/ant-move/Antmove/blob/master/packages/%40antmove/alipay-polyfill-plugin/README.md) | [Github](https://github.com/ant-move/Antmove/tree/master/packages/%40antmove/alipay-polyfill-plugin)  | [@antmove/alipay-polyfill - npm](https://www.npmjs.com/package/@antmove/alipay-polyfill)|


## 微信小程序转支付宝小程序能力极大提升
开源初期，Antmove 微信小程序转支付宝小程序功能还仅仅停留在两者框架功能的交集上，测试覆盖度也比较低，许多隐藏的差一点没有补全，经过这段时间团队的努力和社区的反馈，微信小程序转支付宝小程序功能得到了极大的完善。如下是本次优化新增的主要功能点：

* 自定义组件支持更加完善
	* observers 支持
	* behaviors 支持
	* relations 支持
	* externalClass 支持
* selectComponent/selectComponents 支持
* 分包支持
* behavior 支持
* wxs 支持
* 阿里系小程序一键转换支持
* 支持 component2 模式编译

为了弥补 Antmove 微信小程序转支付宝小程序插件测试 case 的不足，Antmove 团队将 Github 上开源的 100 star 以上的微信小程序做了转换测试，转换能力极大提升，覆盖度趋于完整。

* [微信小程序站支付宝小程序转换支持详情](https://ant-move.github.io/website/docs/wechat-alipay-components-view.html)

## 转换能力定制化

Antmove 提供转换插件模板，基于此可快速实现特定小程序平台转换支持，除此之外还提供转换功能辅助工具函数，对于有特殊平台需求的用户这将是很便利的能力。

## 开发体验提升

在 1.0.0 版本中，Antmove 提供了交互式的命令行操作，日志能力全新改版优化。在 dev 编译模式中，提供了详细的命令行日志/编译时日志/运行时日志能力，极大提高转换调试能力。

* 交互式命令行编译
	> 与新增 antmove.config.js 转换配置文件搭配使用，二次编译更加方便。通过配置文件，开发者可进行更详细的编译配置。
	<img style='width: 100%'  async src='https://cache.amap.com/ecology/tool/antmove/web/assets/cmd-log-min.gif'/>

* 编译时日志，直观了解转换支持程度以及需适配能力定位
	<img style='width: 100%'  async src='https://cache.amap.com/ecology/tool/antmove/web/assets/compiler-log-min.gif'/>
* 运行时日志，便于开发模式调试
	<img width='200' style='width: 200px;' async src='https://cache.amap.com/ecology/tool/antmove/web/assets/run-time-log-min.gif'/>

## 开发者生态完善

Antmove 在帮助开发者实现小程序转换的同时，也对小程序开发者生态提供了大力的支持。在生态上，Antmove 提供了主流社区组件库跨平台的支持。

如下是 Antmove 团队挑选的几个比较热门的小程序项目，在 Antmove 转换器转换后，现已提供了微信小程序/支付宝小程序（钉钉小程序百度），weui 还提供了百度小程序版本支持。无论是微信小程序开发者还是支付宝百度小程序开发者都可以使用以下的开源项目辅助自己项目的开发。接下来我们会将他们扩展到其它小程序平台，打造跨小程序平台可用的组件集/工具。

* [iview 小程序组件库](https://github.com/ant-move/iView-Aliapp)
* [vant 小程序组件库](https://github.com/ant-move/Vant-Aliapp)
* [weui 小程序组件库](https://github.com/ant-move/WeUI-MiniApp)
* [echarts 小程序图表库](https://github.com/ant-move/echarts-Aliapp)

> 如上只是经团队处理的项目，作为示例参考，我们希望借助于 Antmove 的转换能力能够提供更多的跨小程序平台项目。希望开发者通过Antmove转换后的项目发PR告诉我们，完善Antmove开发生态

### 快速预览

<img style='width: 180px' width='180' src='https://cache.amap.com/ecology/tool/antmove/web/assets/iView-Aliapp.jpg'/><img style='width: 180px' width='180' src='https://cache.amap.com/ecology/tool/antmove/web/assets/qr/qr.jpg'/><img style='width: 180px' width='180' src='https://cache.amap.com/ecology/tool/antmove/web/assets/qr/echart.jpg'/>

## 谁在使用

### 微信小程序

> 这里展示的微信小程序为原小程序应用，下面的其它平台小程序为基于这些微信小程序转换得到。

<img width='150' src='http://cache.amap.com/ecology/tool/amap-backend-server/platform/img/15782950065567308.jpg'><img width='150' src='http://cache.amap.com/ecology/tool/amap-backend-server/platform/img/15782952846212329.jpg'><img width='150' src='http://cache.amap.com/ecology/tool/amap-backend-server/platform/img/15782953106003106.jpg'><img width='150' src='http://cache.amap.com/ecology/tool/amap-backend-server/platform/img/15782953317193007.jpg'>

### 支付宝小程序

<img width='150' src='http://cache.amap.com/ecology/tool/amap-backend-server/platform/img/15782958847436418.jpg'><img width='150' src='http://cache.amap.com/ecology/tool/amap-backend-server/platform/img/15782959106179161.jpg'><img width='150' src='http://cache.amap.com/ecology/tool/amap-backend-server/platform/img/15782959378977715.jpg'><img width='150' src='http://cache.amap.com/ecology/tool/amap-backend-server/platform/img/15782959600209087.jpg'><img width='150' src='http://cache.amap.com/ecology/tool/amap-backend-server/platform/img/15782960063558225.jpg'>

### 高德小程序

<img width='150' src='http://cache.amap.com/ecology/tool/amap-backend-server/platform/img/15782960342118999.jpg'><img width='150' src='http://cache.amap.com/ecology/tool/amap-backend-server/platform/img/15782960508762175.jpg'><img width='150' src='http://cache.amap.com/ecology/tool/amap-backend-server/platform/img/15782961458874630.jpg'><img width='150' src='http://cache.amap.com/ecology/tool/amap-backend-server/platform/img/15782961717464794.jpg'>

## 未来规划

Antmove 目前对主流小程序平台提供了支持，在小程序生态也作出了贡献，但 Antmove 还有很长的路要走，在小程序标准化没有得到落实之前，Antmove 的使命就有存在的意义，接下来 Antmove 会进一步的优化现在平台的支持能力，保证转换插件的稳定性和转换性能。同时会提供更多平台的转换支持，借助于微信小程序生态，不断完善其它小程序平台的开发者生态。

## 参考链接

* [跨平台小程序开发风格指南](https://ant-move.github.io/website/docs/mini-code-style.html)
* [小程序跨平台开发解决方案探索](https://ant-move.github.io/website/blog/2019/07/30/miniprogram-development.html)