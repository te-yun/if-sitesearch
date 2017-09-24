package org.jetbrains.demo.thinkter

import react.RProps
import react.ReactExternalComponentSpec

private val ReactMarkdown: dynamic = runtime.wrappers.require("react-markdown")

class ReactMarkdownProps(var source: String = "") : RProps()

object ReactMarkdownComponent : ReactExternalComponentSpec<ReactMarkdownProps>(ReactMarkdown)
