---
sidebar: auto
---

## 介绍
#### 微信转钉钉，可以一键转换微信小程序到钉钉小程序。让小程序跨平台开发变得简单、高效。
## 安装
### 使用 npm 或 yarn 安装

> 我们推荐使用 npm 或 yarn 的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

* 全局安装

```bash
$ npm install antmove -g
```

* 本地安装

```bash
$ npm install antmove --save
```

> 如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。
## 如何使用
### 命令行使用

> 通过 npm 或 yarn 全局安装才能使用如下命令行

提供两种可用的命令行调用方式

* `antmove wx-alipay`（使用前请将终端切换到需转换编译的微信小程序项目路径）

```bash
antmove wx-alipay --platform dd ./dist/alipay-app
```

* `antmove` - 该命令更加灵活，可配置输出输出目录/编译模式等

```bash
antmove --platform dd -i ./wechat-mini/project -o ./dist/alipay-mini/project --env development
```
> 如上的命令表示将 `./wechat-mini/project` 微信小程序项目转换为钉钉小程序项目，转换到 `./dist/alipay-mini/project` 目录

### 命令行参数说明

* `--input,-i`
    * 可选，编译源码目录，如果不传则是当前目录
* `--output,-o`
    * 必传，编译输出目录
* `--env,-e`
    * 可选（development/production），编译模式，生产模式代码会压缩，无编译日志及运行时日志
* `--component,-c`
    * 可选，组件维度转换，用来转换小程序的插件或组件
* `--type,-t`
    * 可选,(wx-alipay)，选择编译工具，此参数代表选择的微信转支付宝的工具
* `--scope,-s`
    * 给组件加样式作用域 
* `--component2`
    * 编译输出 component2 版本的支付宝小程序
* `--platform`  
    * 编译输出其它平台的支付宝小程序（比如钉钉）

## 常见问题
Q：转换支持程度怎样，不支持的功能怎么处理？
A： 不同类型的微信小程序转换的支持程度可能不同，这依赖于转换器对微信整体能力的支持程度，dev 模式编译会统计出支持程度。