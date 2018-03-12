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

package com.intrafind.legal.gadget

import kotlin.browser.window

fun main(args: Array<String>) {
}

private var siteId: String = ""
private var siteSecret: String = ""
private var websiteUrl: String = ""
private val serviceUrl: String = if (window.location.hostname.equals("localhost")) {
    "http://localhost:8001"
} else {
    "https://api.sitesearch.cloud"
}

fun showInitCode() {


}

class Legal {
    companion object {
        val captchaSiteKey = ""
    }
}

data class SiteProfileCreation(val urls: Set<String>, val email: String)
