/*
 * Copyright 2018 IntraFind Software AG. All rights reserved.
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

package com.intrafind.sitesearch.dashboard

import com.intrafind.sitesearch.dashboard.SiteSearch.Companion.crawlerFinishedEvent
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLLabelElement
import org.w3c.dom.HTMLParagraphElement
import org.w3c.dom.events.Event
import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.document
import kotlin.browser.window

private suspend fun main(args: Array<String>) {
    window.addEventListener("DOMContentLoaded", {
        init()
    })

    document.addEventListener(crawlerFinishedEvent, {
        recrawl.disabled = false
        recrawl.textContent = "Recrawl & Reindex Site"
    })
}

private var siteId: String = ""
private var siteSecret: String = ""
private val serviceUrl: String = window.location.origin

private lateinit var pageBodyCssSelector: HTMLParagraphElement
private lateinit var sitemapsOnly: HTMLInputElement
private lateinit var url: HTMLParagraphElement
private lateinit var pageCountContainer: HTMLLabelElement
private lateinit var siteIdElement: HTMLDivElement
private lateinit var siteSecretElement: HTMLDivElement
private lateinit var recrawl: HTMLButtonElement
private lateinit var profile: SiteProfile

private fun init() {
    pageBodyCssSelector = document.getElementById("pageBodyCssSelector") as HTMLParagraphElement
    sitemapsOnly = document.getElementById("sitemapsOnly") as HTMLInputElement
    url = document.getElementById("url") as HTMLParagraphElement
    pageCountContainer = document.getElementById("pageCountContainer") as HTMLLabelElement
    siteIdElement = document.getElementById("siteId") as HTMLDivElement
    siteSecretElement = document.getElementById("siteSecret") as HTMLDivElement
    recrawl = document.getElementById("recrawl") as HTMLButtonElement

    applyQueryParameters()
}

private fun applyQueryParameters() {
    siteId = window.location.search.substring(window.location.search.indexOf("siteId=") + 7, 44)
    val siteSecretIndex = window.location.search.indexOf("siteSecret=") + 11
    siteSecret = window.location.search.substring(siteSecretIndex, siteSecretIndex + 44)
    fetchProfile()

    siteIdElement.textContent = siteId
    siteSecretElement.textContent = siteSecret
}

//@JsName("captchaResult")
//lateinit var captchaResult: String

@JsName("verifyCallback")
private fun verifyCallback(token: String) {
//    captchaResult = token
    recrawl.disabled = false
}

external fun encodeURIComponent(str: String): String
fun recrawl() {
    recrawl.disabled = true
    recrawl.textContent = "Crawling... please give us a minute or two"

    val profileConfig: SiteProfileConfig = profile.configs.asDynamic()[0]
    val xhr = XMLHttpRequest()
    xhr.open("POST", "$serviceUrl/sites/$siteId/recrawl?siteSecret=$siteSecret&clearIndex=true")
    xhr.send()

    xhr.onload = {
        console.warn(xhr.responseText)
        if (xhr.status.equals(200)) {
            document.dispatchEvent(Event(crawlerFinishedEvent))
            val pageCount = JSON.parse<dynamic>(xhr.responseText).pageCount as Int
            showPageCount(pageCount)
        } else {
            console.error("FAILED")
        }
    }
}

private fun showPageCount(pageCount: Int) {
    pageCountContainer.textContent = "Pages crawled: $pageCount"
}

private fun fetchProfile() {
    val xhr = XMLHttpRequest()
    xhr.open("GET", "$serviceUrl/sites/$siteId/profile?siteSecret=$siteSecret")
    xhr.send()
    xhr.onload = {
        profile = JSON.parse(xhr.responseText)
        showConfiguration()
        ""
    }
}

private fun showConfiguration() {
    url.textContent = profile.configs.asDynamic()[0].url
    sitemapsOnly.checked = profile.configs.asDynamic()[0].sitemapsOnly
    pageBodyCssSelector.textContent = profile.configs.asDynamic()[0].pageBodyCssSelector
}

class SiteSearch {
    companion object {
        const val crawlerFinishedEvent = "sis.crawlerFinished"
    }
}

data class SiteProfileConfig(val url: String = "", val pageBodyCssSelector: String = "body", val sitemapsOnly: Boolean = false)

data class SiteProfile(val id: String = "", val secret: String = "", val configs: List<SiteProfileConfig> = emptyList(), val email: String = "")