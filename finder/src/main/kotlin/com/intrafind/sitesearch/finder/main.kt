/*
 * Copyright 2017 IntraFind Software AG. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.intrafind.sitesearch.finder

import org.w3c.dom.*
import org.w3c.dom.events.Event
import org.w3c.dom.events.KeyboardEvent
import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.clear

private data class Finding(
        val title: String = "",
        val body: String = "",
        val url: String = ""
)

private data class Findings(val query: String, val results: Array<Finding> = arrayOf())

private val debugView = document.createElement("dl") as HTMLDListElement
private val selfTest = document.createElement("button") as HTMLButtonElement

private fun selfTest() {
    debugView.clear()
    validateServiceCall("search")
    validateServiceCall("autocomplete")
}

private fun validateServiceCall(apiEndpoint: String) {
    val xhr = XMLHttpRequest()
    xhr.open("GET", "https://api.sitesearch.cloud/$apiEndpoint?query=ifinder&siteId=$siteId")
    xhr.onload = {
        val dt = document.createElement("dt") as HTMLElement
        debugView.appendChild(dt)
        val dd = document.createElement("dd")
        if (xhr.status.equals(200) && 99 < xhr.responseText.length) {
            dt.style.color = "#191"
            dt.textContent = "PASSED: $apiEndpoint"
        } else {
            dt.style.color = "#911"
            dt.textContent = "FAILED: $apiEndpoint"
        }
        dd.textContent = "Status: ${xhr.status} | Response Length: ${xhr.responseText.length}"
        debugView.appendChild(dd)
        console.warn("CORS: ${xhr.getResponseHeader("Access-Control-Allow-Origin")}")
        for (header in xhr.getAllResponseHeaders()) {
            console.warn("header: $header")
        }
    }
    xhr.send()
}
fun init() {
    log("init")

    selfTest.addEventListener("click", { selfTest() })
    selfTest.innerText = "Self Test"
    selfTest.style.display = "block"

    val style = document.createElement("style") as HTMLStyleElement
    style.innerText = ".if-teaser-highlight {font-weight: bold;}"
    finder.appendChild(style)

    findingsContainer.style.cssText =
            "box-shadow: 0 2px 2px 0 gray, 0 1px 4px 0 gray, 0 3px 1px -2px gray; " +
                    "letter-spacing: .02em; " +
                    "min-height: 50px; max-height: 400px;" +
                    "margin-top: 0; overflow-y: auto;" +
                    "width: ${finder.clientWidth - 5}px;" +
                    "border-radius: 0 0 .5em .5em;" +
                    "padding-left: 8px;"

    if (DEBUG) {
        finder.parentElement?.appendChild(selfTest)
        finder.parentNode?.appendChild(debugView)
    }
}

private val DEBUG = window.location.search.contains("sitesearch-finder-debug-view")
private fun log(msg: Any?) {
    if (DEBUG) {
        println(msg)
    }
}

private val findingsContainer = document.createElement("dl") as HTMLDListElement
private val finder = document.getElementById("sitesearch-finder") as HTMLInputElement

private val finderService = "https://api.sitesearch.cloud"
private val siteId = document.getElementById("sitesearch-finder-init")?.getAttribute("data-siteId")
private val finderEndpoint = "/search"
private val autocompleteEndpoint = "/autocomplete"

fun main(args: Array<String>) {
    init()
    window.addEventListener("DOMContentLoaded", {
        log("DOMContentLoaded")
    })

    log(finder.value)
    finder.addEventListener("change", {
        log("change")
        log(finder.value)
    })
    finder.addEventListener("keydown", { event: Event ->
        debugView.remove()
        val keyboardEvent = event as KeyboardEvent
        if (keyboardEvent.key.equals("Enter")) {
            search(finder)
        } else {
            autocomplete(finder)
        }
    })
}

private fun autocomplete(finder: HTMLInputElement) { // TODO remove "finder: HTMLInputElement" as an argument of this method
    val xhr = XMLHttpRequest()
    xhr.open("GET", "$finderService/$autocompleteEndpoint?query=${finder.value}&siteId=$siteId")
    xhr.onload = {
        findingsContainer.clear()
        if (xhr.status.equals(200)) {
            val suggestions = JSON.parse<dynamic>(xhr.responseText)
            for (suggestion: String in suggestions.results) {
                val suggestionEntry = document.createElement("dd") as HTMLElement
                suggestionEntry.style.borderBottom = "1px dotted #000"
                suggestionEntry.style.marginLeft = "0"
                suggestionEntry.style.padding = "0.2em"
                suggestionEntry.style.fontSize = "1.5em"
                suggestionEntry.innerText = suggestion
                suggestionEntry.onclick = {
                    log(suggestionEntry.innerText)
                    finder.value = suggestionEntry.innerText
                    search(finder)
                }
                findingsContainer.appendChild(suggestionEntry)
            }
        } else if (xhr.status.equals(404)) {
            log("no suggestions")
        }
        finder.parentElement?.appendChild(findingsContainer)
        findingsContainer.focus()
    }
    xhr.onerror = {
        console.warn(xhr.response)
    }
    xhr.send()
}

private fun search(finder: HTMLInputElement) {
    if (finder.value.equals("/selftest")) {
        findingsContainer.remove()
        finder.parentNode?.appendChild(debugView)
        selfTest()
        return
    }
    val xhr = XMLHttpRequest()
    xhr.open("GET", "$finderService/$finderEndpoint?query=${finder.value}&siteId=$siteId")
    xhr.onload = {
        findingsContainer.clear()
        if (xhr.status.equals(200)) {
            val findings = JSON.parse<Findings>(xhr.responseText)
            findings.results.forEach { finding ->
                val dtTitle = document.createElement("dt") as HTMLElement
                dtTitle.innerHTML = finding.title
                dtTitle.setAttribute("style", "margin-bottom: .5em;" +
                        "font-style: italic;")
                findingsContainer.appendChild(dtTitle)
                val ddBody = document.createElement("dd") as HTMLElement
                ddBody.innerHTML = finding.body
                ddBody.setAttribute("style", "margin-bottom: .5em")
                findingsContainer.appendChild(ddBody)
                val ddUrl = document.createElement("dd") as HTMLElement
                ddUrl.innerHTML = "<a style=\"text-decoration:none\" href=\"${finding.url}\">${finding.url}</a>"
                ddUrl.setAttribute("style", "margin-bottom: 1em;")
                findingsContainer.appendChild(ddUrl)
            }
        } else if (xhr.status.equals(404)) {
            val dtTitle = document.createElement("dt") as HTMLElement
            dtTitle.innerHTML = "..."
            dtTitle.setAttribute("style", "margin-bottom: .5em;" +
                    "text-align: center;" +
                    "font-size: 2em;"
            )
            findingsContainer.appendChild(dtTitle)
        }
        finder.parentElement?.appendChild(findingsContainer)
    }
    xhr.onerror = {
        console.warn(xhr.response)
    }
    xhr.send()
}