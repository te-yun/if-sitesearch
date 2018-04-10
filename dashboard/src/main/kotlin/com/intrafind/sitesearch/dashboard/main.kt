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

import org.w3c.dom.HTMLDivElement
import kotlin.browser.document
import kotlin.browser.window

private suspend fun main(args: Array<String>) {
    window.addEventListener("DOMContentLoaded", {
        init()
    })
}

private var siteId: String = ""
private var siteSecret: String = ""
private val serviceUrl: String = window.location.origin

private lateinit var siteIdContainer: HTMLDivElement
private lateinit var siteIdBox: HTMLDivElement
private lateinit var siteSecretContainer: HTMLDivElement
private lateinit var siteSecretBox: HTMLDivElement

fun init() {
    siteIdContainer = document.getElementById("siteId") as HTMLDivElement
    siteSecretContainer = document.getElementById("siteSecret") as HTMLDivElement
    siteIdBox = document.getElementById("siteIdContainer") as HTMLDivElement
    siteSecretBox = document.getElementById("siteSecretContainer") as HTMLDivElement

    applyQueryParameters()
}

fun applyQueryParameters() {
    siteId = window.location.search.substring(window.location.search.indexOf("siteId=") + 7, 44)
    val siteSecretIndex = window.location.search.indexOf("siteSecret=") + 11
    siteSecret = window.location.search.substring(siteSecretIndex, siteSecretIndex + 44)


    siteIdBox.textContent = siteId
    siteSecretBox.textContent = siteSecret
}

fun recrawl() {
    console.warn(1)
}

class SiteSearch {
    companion object
}