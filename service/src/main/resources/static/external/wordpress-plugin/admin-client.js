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


var registerSiteInSiS = function () {
    console.warn("TODO: (1) Create siteId/siteSecret with a POST to api.sitesearch.cloud/sites" + document.getElementById("sis-url").value);

    var siteCreation = new XMLHttpRequest();
    siteCreation.open("POST", "https://api.sitesearch.cloud/sites");
    siteCreation.onload = function () {
        console.warn(siteCreation.responseText);
    };
    siteCreation.send();

    var siteIdElement = document.getElementById("sis-siteId");
    var siteSecretElement = document.getElementById("sis-siteSecret");

    var siteId = siteIdElement.value;
    var siteSecret = siteSecretElement.value;

    console.warn("TODO: (2) Submit URL to api.sitesearch.cloud, using siteId/Secret from the previous call." + document.getElementById("sis-url").value);
};

registerSiteInSiS();