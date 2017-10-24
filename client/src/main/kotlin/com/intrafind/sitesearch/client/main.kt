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

import org.w3c.dom.*
import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.clear

fun main(args: Array<String>) {
    window.addEventListener("DOMContentLoaded", {
        init()
    })
}

fun triggerFirstUsageOwnership() {
    val serviceUrl: String
    if (window.location.hostname.equals("localhost")) {
        serviceUrl = "http://localhost:8001"
    } else {
        serviceUrl = "https://api.sitesearch.cloud"
    }

    val xhr = XMLHttpRequest()
    val feedUrl = (document.getElementById("feedUrl") as HTMLInputElement).value
    xhr.open("POST", "$serviceUrl/sites/rss?feedUrl=$feedUrl&stripHtmlTags=true")
    xhr.onload = {
        val siteId = JSON.parse<dynamic>(xhr.responseText).siteId as String
        val siteSecret = JSON.parse<dynamic>(xhr.responseText).siteSecret as String
        (document.getElementById("siteId") as HTMLInputElement).value = siteId
        (document.getElementById("siteSecret") as HTMLInputElement).value = siteSecret
        document.cookie = "override-site = $siteId"
        ""
    }
    xhr.send()
}

private val loginLink = document.getElementById("loginLink") as HTMLAnchorElement
fun init() {
    loginLink.text = " Login"
    if (window.location.hostname.equals("localhost")) {
        loginLink.href = "http://${window.location.host}/login?redirect_uri=http://${window.location.host}/login"
    } else {
        loginLink.href = "https://api.sitesearch.cloud/login?redirect_uri=https://api.sitesearch.cloud/login"
    }

    val xhr = XMLHttpRequest()
    xhr.open("GET", "/user")
    xhr.onload = {
        showUser(xhr)
    }
    xhr.send()
}

fun showInitCode() {
    val enterpriseSearchbarCode = document.getElementById("sitesearch-searchbar") as HTMLDivElement
    val finderCode = document.getElementById("sitesearch-finder-init") as HTMLScriptElement
    val finderContainer = document.getElementById("sitesearch-finder") as HTMLInputElement
    finderContainer.style.display = "none"
    val finderVariant = document.getElementById("finder-variant") as HTMLInputElement
    val searchbarVariant = document.getElementById("searchbar-variant") as HTMLInputElement
    val integrationCode = document.getElementById("integration-code") as HTMLTextAreaElement
    integrationCode.value = enterpriseSearchbarCode.outerHTML
    console.warn(document.getElementById("finder-variant").asDynamic().checked)
    console.warn(document.getElementById("searchbar-variant").asDynamic().checked)

    searchbarVariant.addEventListener("click", {
        enterpriseSearchbarCode.style.display = "block"
        finderContainer.style.display = "none"
        integrationCode.value = enterpriseSearchbarCode.outerHTML
    })
    finderVariant.addEventListener("click", {
        enterpriseSearchbarCode.style.display = "none"
        finderContainer.style.display = "block"
        integrationCode.value = finderCode.outerHTML
    })

}

private fun showUser(xhr: XMLHttpRequest) {
    if (xhr.status.equals(200) && xhr.responseText.isEmpty()) {
        loginLink.text = " Login"
    } else
        if (xhr.status.equals(200) && xhr.response != null) {
            showAssignments()
            val user = JSON.parse<dynamic>(xhr.responseText)
            (document.getElementById("assignmentController") as HTMLDivElement).style.display = "block"
            loginLink.textContent = " Logout: ${user.userAuthentication.details.name}"
            loginLink.title = user.userAuthentication.details.id
            loginLink.className = "fa fa-sign-out"
            loginLink.href = "/logout"
            if (document.getElementById("company") != null) {
                (document.getElementById("company") as HTMLInputElement).value = user.userAuthentication.details.company
                (document.getElementById("contactEmail") as HTMLInputElement).value = user.userAuthentication.details.email
            }
        }
}

@JsName("assignSite")
private fun assignSite() {
    val xhr = XMLHttpRequest()
    xhr.open("GET", "/user")
    xhr.onload = {
        if (xhr.status.equals(200) && xhr.response != null) {
            val user = JSON.parse<dynamic>(xhr.responseText)
            val xhr = XMLHttpRequest()
            xhr.open("PUT", "/assignments/sites/"
                    + (document.getElementById("siteId") as HTMLInputElement).value + "?siteSecret="
                    + (document.getElementById("siteSecret") as HTMLInputElement).value
                    + "&siteName=" + (document.getElementById("siteName") as HTMLInputElement).value)
            xhr.setRequestHeader("content-type", "application/json")
            xhr.onload = {
                showAssignments()
            }

            val tenantSiteAssignment: dynamic = Any()
            tenantSiteAssignment.authProviderId = user.userAuthentication.details.id
            tenantSiteAssignment.authProvider = "github"
            tenantSiteAssignment.authProviderToken = user.details.tokenValue
            tenantSiteAssignment.contactEmail = (document.getElementById("contactEmail") as HTMLInputElement).value
            tenantSiteAssignment.company = (document.getElementById("company") as HTMLInputElement).value

//            xhr.send(JSON.stringify("""
//                "authProviderId": "${user.userAuthentication.details.id}",
//                "authProvider": "github",
//                "authProviderToken": "${user.details.tokenValue}",
//                "contactEmail": "${(document.getElementById("contactEmail") as HTMLInputElement).value}",
//                "company": "${(document.getElementById("company") as HTMLInputElement).value}"
//            """))
            xhr.send(JSON.stringify(tenantSiteAssignment))
        }
    }
    xhr.send()
}

private fun showAssignments() {
    val xhr = XMLHttpRequest()
    xhr.open("GET", "/user")
    xhr.onload = {
        if (xhr.status.equals(200) && xhr.response != null) {
            val user = JSON.parse<dynamic>(xhr.responseText)
            val xhr = XMLHttpRequest()
            xhr.open("GET", "/authentication-providers/github/" + user.userAuthentication.details.id
                    + "?accessToken=" + user.details.tokenValue)
            xhr.setRequestHeader("content-type", "application/json")
            xhr.onload = {
                if (xhr.status.equals(200) && xhr.response != null) {
                    document.getElementById("assignments")?.clear()
                    document.getElementById("assignmentsContainer")?.setAttribute("style", "display: block;")
                    val assignments = JSON.parse<dynamic>(xhr.responseText)
                    assignments.tenants.forEach({ tenant ->
                        val tenantCompany = document.getElementById("companyName") as HTMLElement
                        val tenantContactEmail = document.getElementById("companyContact") as HTMLElement
                        tenantCompany.textContent = "Company: " + tenant.company
                        tenantContactEmail.textContent = "Contact: " + tenant.contactEmail

                        tenant.sites.forEach({ site ->
                            val entry = document.createElement("tr") as HTMLTableRowElement
                            val siteId = document.createElement("td") as HTMLTableCellElement
                            siteId.textContent = site.id
                            val siteSecret = document.createElement("td") as HTMLTableCellElement
                            siteSecret.textContent = site.secret
                            val siteName = document.createElement("td") as HTMLTableCellElement
                            siteName.textContent = site.name
                            entry.appendChild(siteName)
                            entry.appendChild(siteId)
                            entry.appendChild(siteSecret)
                            document.getElementById("assignments")?.appendChild(entry)
                        })
                    })
                }
            }
            xhr.send()
        }
    }
    xhr.send()
}

