---
sidebar: auto
---
# 如何使用 Antmove 小程序组件库

## 介绍

Antmove 可以将微信小程序转换为钉钉小程序，同时支持 Vant/iView 小程序组件库的引用，那么原生钉钉小程序是否可以使用 Antmove 版本的小程序组件呢？答案是肯定的，但需要注意的是 Antmove 是编译时的解决方案，所以直接使用组件库也需要运行一次编译命令。
> 编译命令：`antmove alipay-compiler`

* [vant 支付宝小程序源码下载](https://github.com/ant-move/Vant-Aliapp)

## 使用概览
### 第一步
#### 引入组件库到项目中（推荐直接拷贝到项目中）
* __antmove 目录 - antmove 编译代码产物
* dist 目录 - vant 小程序组件代码

> 如上两个目录是必须的，也可以直接拷贝[组件代码整体](https://github.com/ant-move/Vant-Aliapp/tree/master/dd/vant-app)，小程序组件代码可整体拷贝到项目中，小程序打包上线会按需打包，所以不用担心引用了不必要的组件

### 第二步
#### 执行 Antmove 编译命令

运行如下命令（运行前请先安装 antmove 工具）
```bash
antmove alipay-compiler
```

## 使用详情

### 组件库代码引入

#### 直接下载代码使用
直接通过 git 下载 Vant Aliapp 源代码，并将 dd/vant-app 代码拷贝到自己的项目中。

```bash
git clone https://github.com/ant-move/Vant-Aliapp.git
```

* dist - 小程序组件源码
* __antmove - (这是 Antmove 处理代码，通过它将钉钉小程序和小程序组件连接起来)

> dist 和 __antmove 拷贝到小程序项目中要保持目录同级。


#### 通过 npm 安装使用
```bash
npm i vant-aliapp -S --production 
```

## 组件使用示例

### json 组件依赖引入
以 Button 为例，其它组件在对应的文档页查看，在引入小程序页面的 json 中配置（路径根据自己项目位置配置）：

#### 拷贝源码到项目中用相对路径引入
```json
"usingComponents": {
    "i-button": "../../dd/vant-app/dist/button/index"
} 
```

#### npm 安装方式使用绝对路径

```json
"usingComponents": {
    "i-button": "vant-app/dist/button/index"
} 
```

### axml 中使用组件：

```html
<i-button type="primary" onClick="handleClick">这是一个按钮</i-button>
```

### 执行 `alipay-compiler` 命令

* `antmove alipay-compiler`

## 参考链接

* [钉钉小程序引用组件库参考示例项目](https://github.com/ant-move/Vant-Aliapp/tree/master/examples/vant-polyfill)
* [antmove-complier 命令](https://github.com/ant-move/Antmove/blob/master/packages/%40antmove/alipay-polyfill-plugin/README.md)
* [vant-aliapp](https://github.com/ant-move/Vant-Aliapp)