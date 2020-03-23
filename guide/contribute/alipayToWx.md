---
sidebar: auto
---

## 介绍
#### 支付宝转微信，可以一键转换支付宝小程序到微信小程序。让小程序跨平台开发变得简单、高效。

## 安装
### VsCode 转换插件

在 VsCode 扩展中搜索 `Antmove` 下载安装 Antmove vscode 转换插件实现一键转换。

<p>
    <img style='max-width: 800px;margin-left: 0;' src='https://img.alicdn.com/tfs/TB1KqazdhD1gK0jSZFyXXciOVXa-1154-516.png'>
</p>


<span id='VsCode'></span>
### VsCode 编译步骤

* 安装扩展（Antmove - antmove-vscode-plugin）
* 在 VsCode 中打开要转换的项目
* 打开 VsCode 命令面板
    * Mac: `command + shift + p`
    * Windows: `ctrl + shift + p`
* 输入 `Antmove`
* 运行 `Antmove: Run antmove alipay-wx` 命令，实现支付宝小程序转换微信小程序的转换
* 运行如上命令后会给出一个弹窗，选择转换后生成代码存储目录
* 转换完成

* [antmove-vscode-plugin](https://marketplace.visualstudio.com/items?itemName=antmove-app.antmove-vscode-plugin&ssr=false)

> 本插件依赖于 vscode 代码编辑器，安装了 vscode 的用户才能使用。


<span id='使用npm或yarn安装'></span>
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

* `antmove alipay-wx`（使用前请将终端切换到需转换编译的支付宝小程序项目路径）

```bash
antmove alipay-wx ./dist/wx-app
```

* `antmove` - 该命令更加灵活，可配置输出输出目录/编译模式等

```bash
antmove -i ./mini-antui/project -o ./dist/mini-demo/project --env development
```
> 如上的命令表示将 `./mini-antui/project` 支付宝小程序项目转换为微信小程序项目，转换到 `./dist/mini-demo/project` 目录

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
    * 可选,(alipay-wx)，选择编译工具，此参数代表选择的支付宝转微信的工具
* `--scope,-s`
    * 给组件加样式作用域 

<span id='Node.js'></span>
### Node.js 使用方式

#### 示例
```js
const path = require('path');
const transformFramework = require('antmove');
const WechatPlugin = require('@antmove/alipay-wx');

let outputPath = path.join(__dirname, '../../dist');
let inputDirPath = path.join(__dirname, '../../examples/mini-antui');

const App = transformFramework();

App.use(
    WechatPlugin, 
    {
        entry: inputDirPath,
        dist: outputPath + '/mini-demo',
        env: 'development'
    })
    .start();
```

## 常见问题

### Q：转换支持程度怎样，不支持的功能怎么处理？
### A： 不同类型的支付宝小程序转换的支持程度可能不同，这依赖于转换器对支付宝整体能力的支持程度，dev 模式编译会统计出支持程度。

* [不支持功能列表](https://ant-move.github.io/website/docs/alipay-wechat-api-view.html)