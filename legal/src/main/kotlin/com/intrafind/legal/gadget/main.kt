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

import org.w3c.dom.HTMLDListElement
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLTextAreaElement
import org.w3c.dom.events.CompositionEvent
import org.w3c.dom.events.CompositionEventInit
import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.document
import kotlin.browser.window

private fun main(args: Array<String>) {
    window.addEventListener("DOMContentLoaded", {
        init()
    })

    document.addEventListener(Legal.contractAnalyzeEvent, {
        val event = it as CompositionEvent
        console.warn(event.data)
    })
}

private val serviceUrl: String = window.location.origin

private lateinit var analyzedContractContainer: HTMLDListElement
private lateinit var contractContainer: HTMLTextAreaElement
private fun init() {
    analyzedContractContainer = document.getElementById("analyzedContract") as HTMLDListElement
    contractContainer = document.getElementById("contract") as HTMLTextAreaElement
}

fun analyze() {
    val xhr = XMLHttpRequest()
    xhr.open("PUT", "$serviceUrl/legal/37abd346-261b-11e8-989a-63440ea45232/contract/gist")
    xhr.send(contractContainer.value)
    xhr.onload = {
        val analyzedContract: AnalyzedContract = JSON.parse(xhr.responseText)
        displayContractGist(analyzedContract)
        document.dispatchEvent(CompositionEvent(Legal.contractAnalyzeEvent, CompositionEventInit(xhr.responseText)))
    }
}

private fun displayContractGist(analyzedContract: dynamic) {
    fun showTypeListings(typeName: String) {
        val type = document.createElement("dt") as HTMLElement
        analyzedContractContainer.appendChild(type)
        for (tag in analyzedContract.tags) {
            if (tag.type.equals(typeName)) {
                type.textContent = tag.type

                val mainForm = document.createElement("dd") as HTMLElement
                mainForm.textContent = tag.mainForm
                analyzedContractContainer.appendChild(mainForm)

                val otherForms = document.createElement("dd") as HTMLElement
                otherForms.textContent = tag.otherForms
                analyzedContractContainer.appendChild(otherForms)

                val displayform = document.createElement("dd") as HTMLElement
                displayform.textContent = tag.features.displayform
                analyzedContractContainer.appendChild(displayform)
            }
        }
    }
    showTypeListings("Location")
    showTypeListings("Organization")
    showTypeListings("Person")
    showTypeListings("PersonRole")
}

class Legal {
    companion object {
        val contractAnalyzeEvent = "sis.contract.analyze"
    }
}

data class AnalyzedContract(val tags: List<Tag>)
data class Tag(val mainForm: String, val type: String, val otherForms: List<String>, val features: Features)
data class Features(val displayform: String)
