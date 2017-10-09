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

import org.w3c.dom.HTMLDListElement
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.Event
import org.w3c.dom.events.KeyboardEvent
import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.clear

data class Finding(
        val title: String = "",
        val body: String = "",
        val url: String = ""
)

data class Findings(val query: String, val results: Array<Finding> = arrayOf())

fun init() {
    console.warn("init")
    findingsContainer.setAttribute("style",
            "box-shadow: 0 2px 2px 0 gray, 0 1px 4px 0 gray, 0 3px 1px -2px gray; " +
                    "letter-spacing: .02em; " +
                    "min-height: 50px; max-height: 400px;" +
                    "margin-top: 0; overflow-y: auto;" +
                    "width: ${finder.clientWidth - 5}px;" +
                    "border-radius: 0 0 .5em .5em;" +
                    "padding-left: 8px"
    )
}

private val DEBUG = true
private fun log(msg: Any?) {
    if (DEBUG) {
        console.info(msg)
    }
}

private val findingsContainer = document.createElement("dl") as HTMLDListElement
private val finder = document.getElementById("sitesearch-finder") as HTMLInputElement
fun main(args: Array<String>) {
    window.addEventListener("DOMContentLoaded", {
        console.warn("DOMContentLoaded")
    })

    log(finder.value)

    finder.addEventListener("change", {
        console.warn("changed")
    })
    finder.addEventListener("keydown", { event: Event ->
        val keyboardEvent = event as KeyboardEvent
        if (keyboardEvent.key.equals("Enter")) {
            search(finder)
        } else {
            autocomplete(finder)
        }
    })
}

private val finderService = "https://api.sitesearch.cloud"
private val siteId = "5f2b9c2e-6071-4f30-8972-7781fac73726"
private val finderEndpoint = "/search"
private val autocompleteEndpoint = "/autocomplete"

private fun autocomplete(finder: HTMLInputElement) {
    val xhr = XMLHttpRequest()
    xhr.open("GET", "$finderService/$autocompleteEndpoint?query=${finder.value}&siteId=$siteId")
    xhr.onload = {
        findingsContainer.clear()
        if (xhr.status.equals(200)) {
            console.warn(xhr.response)
        } else if (xhr.status.equals(404)) {
            console.warn("empty autocomplete")
        }
        document.body?.appendChild(findingsContainer)
    }
    xhr.onerror = {
        console.warn(xhr.response)
    }
    xhr.send()
}

private fun search(finder: HTMLInputElement) {
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
        document.body?.appendChild(findingsContainer)
    }
    xhr.onerror = {
        console.warn(xhr.response)
    }
    xhr.send()
}