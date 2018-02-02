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

package com.intrafind.sitesearch.gadget

import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLTextAreaElement
import org.w3c.dom.events.Event
import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.document
import kotlin.browser.window

fun main(args: Array<String>) {
    window.addEventListener("DOMContentLoaded", {
        showInitCode()
        js("    IFS.eventbus.addEventListener(IFS.constants.events.SEARCHBAR_RENDERED_INITIALLY, function () {" +
                "        document.getElementById('ifs-sb-searchfield').setAttribute('placeholder', 'Search for \\\"Knowledge\\\"');" +
                "    });"
        )
    })
}

private var siteId: String = ""
private var siteSecret: String = ""
private val serviceUrl: String = if (window.location.hostname.equals("localhost")) {
    "http://localhost:8001"
} else {
    "https://api.sitesearch.cloud"
}

fun triggerFirstUsageOwnership() {
    val xhr = XMLHttpRequest()
    xhr.open("POST", "$serviceUrl/sites")
    xhr.onload = {
        siteId = JSON.parse<dynamic>(xhr.responseText).siteId as String
        siteSecret = JSON.parse<dynamic>(xhr.responseText).siteSecret as String
        (document.getElementById("siteId") as HTMLDivElement).textContent = siteId
        (document.getElementById("siteSecret") as HTMLDivElement).textContent = siteSecret
        overrideSite(siteId)
        document.dispatchEvent(Event("sis.triggerFirstUsageOwnershipEvent"))
    }
    xhr.send()
}

@JsName("overrideSite")
fun overrideSite(siteId: String) {
    document.cookie = "override-site = $siteId; domain = .sitesearch.cloud; path = /"
}

private lateinit var integrationCode: HTMLTextAreaElement
private lateinit var siteIdContainer: HTMLDivElement
private lateinit var triggerButton: HTMLButtonElement
private lateinit var url: HTMLInputElement

fun showInitCode() {
    url = document.getElementById("url") as HTMLInputElement
    integrationCode = document.getElementById("integration-code") as HTMLTextAreaElement
    siteIdContainer = document.getElementById("siteId") as HTMLDivElement
    triggerButton = document.getElementById("index") as HTMLButtonElement
    val enterpriseSearchbar = document.getElementById("sitesearch-searchbar") as HTMLDivElement
    val searchbarVersion = "2018-01-15" // when updating, update the value in the corresponding HTML container too
    val siteSearchConfig = "https://cdn.sitesearch.cloud/searchbar/$searchbarVersion/config/sitesearch.json"
    val enterpriseSearchbarCode = enterpriseSearchbar.outerHTML
            .replace("/searchbar/$searchbarVersion/config/sitesearch.json", siteSearchConfig)
    integrationCode.value = enterpriseSearchbarCode

    document.addEventListener("sis.crawlerFinishedEvent", {
        triggerButton.textContent = "Enable Search"
        triggerButton.disabled = false
        (document.getElementById("ifs-sb-searchfield") as HTMLInputElement).placeholder = "$crawlerPageCount pages have been crawled. Consider that it takes around a minute before you can find here everything we have found."
    })

    val waitWhileCrawlerIsRunningMsg = "Crawler is running... please give us just a minute or two."
    document.addEventListener("sis.triggerFirstUsageOwnershipEvent", {
        startCrawler()
        triggerButton.textContent = waitWhileCrawlerIsRunningMsg
        triggerButton.disabled = true
        (document.getElementById("ifs-sb-searchfield") as HTMLInputElement).placeholder = waitWhileCrawlerIsRunningMsg
        insertSiteIdIntoIntegrationCode()
    })

    applyQueryOverrides()
}

private fun applyQueryOverrides() {
    if (window.location.search.indexOf("siteId=") != -1) {
        val siteId = window.location.search.substring(window.location.search.indexOf("siteId=") + 7)
        console.warn("applyQueryOverrides $siteId")
        siteIdContainer.textContent = siteId
        url.value = "The search results below, belong to Site ID: $siteId"
        (document.getElementById("siteSecret") as HTMLDivElement).textContent = "Securely stored in our records"
        overrideSite(siteId)
        insertSiteIdIntoIntegrationCode()
    }
}

private fun insertSiteIdIntoIntegrationCode() {
    if (!siteIdContainer.textContent?.isBlank()!!) {
            integrationCode.value = integrationCode.value.replace("siteId: \".+".toRegex(), "siteId: \"${siteIdContainer.textContent}\"")
    }
}

external fun encodeURIComponent(str: String): String
private var crawlerPageCount: Int = 0
fun startCrawler() {
    val xhr = XMLHttpRequest()
    xhr.open("POST", "$serviceUrl/sites/$siteId/crawl?siteSecret=$siteSecret&url=${encodeURIComponent(url.value)}")
    xhr.onload = {
        console.warn(xhr.responseText)
        crawlerPageCount = JSON.parse<dynamic>(xhr.responseText).pageCount as Int
        document.dispatchEvent(Event("sis.crawlerFinishedEvent"))
    }
    xhr.send()
}
