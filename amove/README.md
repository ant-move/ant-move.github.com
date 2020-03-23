---
sidebar: auto
---

# Amove

## 简介

结构化代码编译框架，该框架将代码编译流程以一个个编译原子的形式组织起来，新的编译原子可以随意插入原有的编译执行流程，从而可以将编译逻辑和代码结构分离，极大的便于代码的复用抽象和扩展。

## 名词解释

### 编译原子

编译原子就是一个处理一个编译功能的函数，原则上来说，流程中的某一个编译原子的移除不会打断整个编译流程产生，新增一个编译原子插入到原有的编译流程中也不会打断编译，但是能够影响最终的编译效果。

### 编译集合

编译集合是编译原子的组合，在实际应用中，某一个功能需要由多个编译原子一起工作处理，为了便于代码复用和可读，将这些关联的编译原子组合在一起统一管理。编译集合和编译原子一样，在整个编译流程中是独立的，即该编译集合是否存在不会阻塞整个处理流程。

### 编译插件

编译插件是由编译原子和编译集合组合而成的对象，对应特定场景的处理事务。

## 架构原理

### 设计思想

框架会以文件结构深度优先遍历的方式依次触发对应文件的编译原子，框架触发的原子也可以触发其它原子的执行。

### treeAst

```json
{
    "type": "Application",
    "body": {
        "children": [
            {
                "type": "File",
                "body": {
                    "filename": "index.acss",
                    "path": "/pages/am-icon/index.acss",
                    "extname": ".acss",
                    "dirname": "/pages/am-icon",
                    "basename": "index",
                    "children": null,
                    "parent": null,
                    "deep": 0,
                    "entry": "/pages/am-icon",
                    "type": "Acss",
                    "packageInfo": null,
                    "isOutput": true
                }
            },
            {
                "type": "File",
                "body": {
                    "filename": "index.axml",
                    "path": "/pages/am-icon/index.axml",
                    "extname": ".axml",
                    "dirname": "/pages/am-icon",
                    "basename": "index",
                    "children": null,
                    "parent": null,
                    "deep": 0,
                    "entry": "/pages/am-icon",
                    "type": "Axml",
                    "packageInfo": null,
                    "isOutput": true
                }
            },
            {
                "type": "File",
                "body": {
                    "filename": "index.js",
                    "path": "/pages/am-icon/index.js",
                    "extname": ".js",
                    "dirname": "/pages/am-icon",
                    "basename": "index",
                    "children": null,
                    "parent": null,
                    "deep": 0,
                    "entry": "/pages/am-icon",
                    "type": "Js",
                    "packageInfo": null,
                    "isOutput": true
                }
            },
            {
                "type": "File",
                "body": {
                    "filename": "index.json",
                    "path": "/pages/am-icon/index.json",
                    "extname": ".json",
                    "dirname": "/pages/am-icon",
                    "basename": "index",
                    "children": null,
                    "parent": null,
                    "deep": 0,
                    "entry": "/pages/am-icon",
                    "type": "Json",
                    "packageInfo": null,
                    "isOutput": true
                }
            }
        ]
    }
}
```

如上述所示的文件结构，框架会依次执行 `Application`, `File` 编译原子。


### compile

如下有两个编译插件，

```js
const a = {
    compilerA () {
        console.log('A');
    },
    compilerB () {
        console.log('B');
    },
    compilerC () {
        console.log('C');
    },
    compilerD () {
        console.log('D');
    },
};

const b = {
    compilerA () {
        console.log('bA');
    },
    compilerB {
        hook: 'before',
        body () {
            console.log('bB');
        }
    },
    compilerC {
        hook: 'replace',
        body () {
            console.log('bC');
        }
    },
    compilerD {
        hook: 'mounted',
        body () {
            console.log('bD');
        }
    }
};
```

执行

```js
new Compiler({
    entry,
    output,
    plugins: [a, b]
});
```

上述的 a、b 两个编译插件具有一样的编译原子，所以 b 的编译原子会插入到 a 的运行流程中，hook 有四种，分别为 `before`, `replace`, `after`, `mounted`。默认为 `after`，所以 b 的 `compilerA` 会紧接着 a 的 `compilerA` 执行。

这里假设 a 的编译原子的执行顺序如下：

* A
* B
* C
* D

那么加上 b 编译插件会，最终的执行流程为 

* A
* bA
* bB
* B
* bC
* D
* bd

## 使用

### 如何编写编译原子

* 具有同样的上下文
* 参数
    * 第一个参数为当前遍历节点（主动触发则受触发调用影响）
    * 第二个参数为整个流程配置文件
