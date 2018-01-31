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

import org.w3c.dom.*
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
        document.dispatchEvent(Event("triggerFirstUsageOwnershipEvent"))
    }
    xhr.send()
}

@JsName("overrideSite")
fun overrideSite(siteId: String) {
    document.cookie = "override-site = $siteId; domain = .sitesearch.cloud; path = /"
}

private lateinit var searchbarVariant: HTMLInputElement
private lateinit var integrationCode: HTMLTextAreaElement
private lateinit var siteIdContainer: HTMLDivElement
fun showInitCode() {
    integrationCode = document.getElementById("integration-code") as HTMLTextAreaElement
    searchbarVariant = document.getElementById("searchbar-variant") as HTMLInputElement
    siteIdContainer = document.getElementById("siteId") as HTMLDivElement
    val triggerButton = document.getElementById("index") as HTMLButtonElement
    val enterpriseSearchbar = document.getElementById("sitesearch-searchbar") as HTMLDivElement
    val finderInit = document.getElementById("sitesearch-page-finder-init") as HTMLScriptElement
    val finderContainer = document.getElementById("page-finder") as HTMLDivElement
    val finderVariant = document.getElementById("finder-variant") as HTMLInputElement
    val siteSearchConfig = "https://cdn.sitesearch.cloud/searchbar/2018-01-15/config/sitesearch.json"
    val enterpriseSearchbarCode = enterpriseSearchbar.outerHTML
            .replace("/searchbar/2018-01-15/config/sitesearch.json", siteSearchConfig)
    integrationCode.value = enterpriseSearchbarCode
    finderContainer.style.display = "none"
    val finderInitCode = "<script src=\"https://api.sitesearch.cloud/app/runtime/kotlin.js\"></script>\n" +
            finderInit.outerHTML
                    .replace("/app/finder/finder.js", "https://api.sitesearch.cloud/app/finder/finder.js")

    searchbarVariant.addEventListener("click", {
        enterpriseSearchbar.style.display = "block"
        finderContainer.style.display = "none"
        if (siteIdContainer.textContent?.isBlank()!!) {
            integrationCode.value = enterpriseSearchbarCode
        } else {
            integrationCode.value = enterpriseSearchbarCode.replace("siteId: \".+".toRegex(), "siteId: \"${siteIdContainer.textContent}\"")
        }
    })

    finderVariant.addEventListener("click", {
        enterpriseSearchbar.style.display = "none"
        finderContainer.style.display = "block"
        if (siteIdContainer.textContent?.isBlank()!!) {
            integrationCode.value = finderInitCode
        } else {
            integrationCode.value = finderInitCode.replace("data-siteId=\".+\"".toRegex(RegexOption.IGNORE_CASE), "data-siteId=\"${siteIdContainer.textContent}\"")
        }
    })

    document.addEventListener("crawlerFinishedEvent", {
        triggerButton.textContent = "Enable Search"
        triggerButton.disabled = false
        (document.getElementById("ifs-sb-searchfield") as HTMLInputElement).placeholder = "Consider that it takes around a minute before you can find here everything we have found."
    })

    val waitWhileCrawlerIsRunningMsg = "Crawler is running... please give us just a minute or two."
    document.addEventListener("triggerFirstUsageOwnershipEvent", {
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
        (document.getElementById("siteSecret") as HTMLDivElement).textContent = "Safely stored in our records"
        overrideSite(siteId)
        insertSiteIdIntoIntegrationCode()       // TODO check if it works
    }
}

private fun insertSiteIdIntoIntegrationCode() {
    console.warn(siteIdContainer.textContent)
    if (!siteIdContainer.textContent?.isBlank()!!) {
        if (searchbarVariant.checked) {
            integrationCode.value = integrationCode.value.replace("siteId: \".+".toRegex(), "siteId: \"${siteIdContainer.textContent}\"")
        } else {
            integrationCode.value = integrationCode.value.replace("data-siteId=\".+\"".toRegex(RegexOption.IGNORE_CASE), "data-siteId=\"${siteIdContainer.textContent}\"")
        }
    }
}

external fun encodeURIComponent(str: String): String
fun startCrawler() {
    val url = (document.getElementById("url") as HTMLInputElement).value

    val xhr = XMLHttpRequest()
    xhr.open("POST", "$serviceUrl/sites/$siteId/crawl?siteSecret=$siteSecret&url=${encodeURIComponent(url)}")
    xhr.onload = {
        console.warn(xhr.responseText)
        val pageCount = JSON.parse<dynamic>(xhr.responseText).pageCount as Int
//        console.warn(JSON.parse<dynamic>(xhr.responseText).urls as List<String?>?)
//        val urls = JSON.parse<dynamic>(xhr.responseText).urls as ArrayList<String?>?
//        console.warn(urls)
        document.dispatchEvent(Event("crawlerFinishedEvent"))
    }
    xhr.send()
}
