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

import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLTableCellElement
import org.w3c.dom.HTMLTableRowElement
import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.document

fun main(args: Array<String>) {

}

fun showAuthentication() {
    val xhr = XMLHttpRequest()
    xhr.open("GET", "/user")
    xhr.onload = {
        if (xhr.status.equals(200) && xhr.responseText.isEmpty()) {
            document.getElementById("user")?.setAttribute("style", "display: none")
            document.getElementById("user")?.textContent = ""
        } else if (xhr.status.equals(200) && xhr.response != null) {
            val user = JSON.parse<dynamic>(xhr.responseText)
            document.getElementById("user")?.textContent = user.userAuthentication.details.name
            document.getElementById("user")?.setAttribute("title", user.userAuthentication.details.id)
            document.getElementById("user")?.setAttribute("style", "display: inline")
            document.getElementById("assignmentContainer")?.setAttribute("style", "display: inline")

            document.getElementById("loginLink")?.setAttribute("style", "display: none")
            document.getElementById("logoutLink")?.setAttribute("style", "display: inline")
            (document.getElementById("company") as HTMLInputElement).value = user.userAuthentication.details.company
            (document.getElementById("contactEmail") as HTMLInputElement).value = user.userAuthentication.details.email
        }
    }
    xhr.send()
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
            showAssignments()
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
                    document.getElementById("assignmentsContainer")?.setAttribute("style", "display: block;")
                    val assignments = JSON.parse<dynamic>(xhr.responseText)
                    assignments.tenants.forEach({ tenant ->
                        val tenantCompany = document.getElementById("companyName") as HTMLElement
                        val tenantContactEmail = document.getElementById("companyContact") as HTMLElement
                        tenantCompany.textContent = "Company: " + tenant.company
                        tenantContactEmail.textContent = "Contact e-mail: " + tenant["contactEmail"]

                        tenant.sites.forEach({ site ->
                            val entry = document.createElement("tr") as HTMLTableRowElement
                            val siteId = document.createElement("td") as HTMLTableCellElement
                            siteId.textContent = site.id
                            val siteSecret = document.createElement("td") as HTMLTableCellElement
                            siteSecret.textContent = site.secret
                            val siteName = document.createElement("td") as HTMLTableCellElement
                            siteName.textContent = site.name
                            entry.appendChild(siteId)
                            entry.appendChild(siteSecret)
                            entry.appendChild(siteName)
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
