---
title: 我是如何使用 Docusaurus 的
authors: [slhmy]
tags: [指引, 思考]
---

在此之前，我也使用过很多其他的静态网站生成器，
比如 [Hugo](https://gohugo.io/)、[Hexo](https://hexo.io/) 以及 [mdBook](https://github.com/rust-lang/mdBook) 等等。
这些都是非常优秀的工具，但 Docuasurus 自由度和功能的完善程度都是我所见过的最好的，它让我感觉到内容能被更好的组织和展示。

不过强大的自由度带来的是配置的复杂性，虽然 Docusaurus 官方提供了完善的文档，但是我还是花了很多时间来熟悉它的工作方式。
我认为从 Docusaurus 的启动项目开始，到最终真正的工作流的建立，依旧有很多内容值得记录。

这就是这篇博客存在的原因。

<!-- truncate -->

### 关于 i18n

我对于项目的国际化是有执念的，尽管我在这个仓库中基本只使用中文，但是我还是希望能够为未来的合作者提供更多的可能性。

随着 i18n 的引入，创建和编辑文档的动作变得更加的复杂。
你可能会发现 “编辑此页” 按钮只会定向到英文版本的源码，那是因为你忽略了一项配置导致的。
`editLocalizedFiles` 配置项默认是 `false`，你需要将它设置为 `true` 才能够在其他语言的文档中使用 “编辑此页” 按钮。

:::tip
你可能需要在 Docuasurus 的 [官方网站](https://docusaurus.io/) 中查看更多的内容，
或者你可以搜索 edit url 以获取更多的信息（注意是 edit url，不是 editurl，这会影响搜索的结果）。
我当时就因为搜索问题甚至去 Discord 询问了 Docuasurus 的开发者，最后发现是这样一个小差异导致的。
:::
