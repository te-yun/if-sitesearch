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

package com.intrafind.sitesearch.client

import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.window

fun main(args: Array<String>) {
    println("Client")

    val xhr = XMLHttpRequest()
    xhr.open("GET", "/user")
    xhr.onload = {
        if (xhr.status.equals(200) && !xhr.responseText.isEmpty() && window.location.pathname.equals("/admin.html")) {
//            console.warn(window.location.pathname)
//            console.warn(window.location.href)
//            window.location.pathname = "/admin.html"
//            console.warn(window.location.pathname)
//            console.warn(window.location.href)
        } else {
            console.warn("something else")
        }
    }
    xhr.send()
}