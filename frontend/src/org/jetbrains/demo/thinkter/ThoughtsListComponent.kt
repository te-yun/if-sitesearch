package org.jetbrains.demo.thinkter

import kotlinx.html.*
import kotlinx.html.js.onClickFunction
import org.jetbrains.demo.thinkter.model.Thought
import react.RProps
import react.ReactComponentNoState
import react.ReactComponentSpec
import react.dom.ReactDOMBuilder
import react.dom.ReactDOMComponent

class ThoughtsListComponent : ReactDOMComponent<ThoughtsListComponent.Props, ReactComponentNoState>() {
    companion object : ReactComponentSpec<ThoughtsListComponent, Props, ReactComponentNoState>

    init {
        state = ReactComponentNoState()
    }

    override fun ReactDOMBuilder.render() {
        fun UL.thoughtLi(t: Thought) {
            li {
                section(classes = "post") {
                    header(classes = "post-header") {
                        p(classes = "post-meta") {
                            a(href = "javascript:void(0)") {
                                +t.date
                                +" by "
                                +t.userId

                                onClickFunction = {
                                    props.show(t)
                                }
                            }
                        }
                    }
                    div(classes = "post-description") {
                        ReactMarkdownComponent {
                            source = t.text
                        }
                    }
                }
            }
        }

        div {
            ul {
                if (props.thoughts.isEmpty()) {
                    li { +"There are no thoughts yet" }
                } else {
                    for (t in props.thoughts) {
                        thoughtLi(t)
                    }
                }
            }
        }
    }

    class Props(var thoughts: List<Thought> = emptyList(), var show: (Thought) -> Unit = {}) : RProps()
}