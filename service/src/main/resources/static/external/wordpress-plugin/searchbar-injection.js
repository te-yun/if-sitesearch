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

// should be loaded after DOMContentLoaded or in the head but then a DOMContentLoaded listener is required
// TODO address different DOM structure in mobile view
var injectSearchbar = function () {
    console.warn("injectSearchbar");

    var hiddenSiteSearchSearchbar = document.querySelector("#searchform");
    var defaultSearchbar = document.querySelector("#mk-header-1 > div.mk-header-holder > div.mk-header-inner.add-header-height > div.mk-grid.header-grid > div.mk-header-nav-container.one-row-style.menu-hover-style-5 > div.main-nav-side-search");
    defaultSearchbar.firstElementChild.remove();
    defaultSearchbar.appendChild(hiddenSiteSearchSearchbar);
    // defaultSearchbar.innerHTML = '<div id="sitesearch-searchbar" class="searchbar">\n' +
    //     '    <div id="ifs-searchbar" class="ifs-component ifs-sb">BLAH!!!???????!</div>\n' +
    //     '    <script src="https://cdn.sitesearch.cloud/searchbar/2018-05-15/app/js/app.js"></script>\n' +
    //     '    <script>\n' +
    //     '        IFS.initClient({\n' +
    //     '            customConfig: {\n' +
    //     '                overwrite: {\n' +
    //     '                    "appLang": "en"\n' +
    //     '                }\n' +
    //     '            },\n' +
    //     '            configurl: "https://cdn.sitesearch.cloud/searchbar/2018-05-15/config/sitesearch.json",\n' +
    //     '            siteId: "3a5dfd07-a463-45f8-863b-dfc3c9f09152"\n' +
    //     '        });\n' +
    //     '    </script>\n' +
    //     '</div>';
    //
    //
    // defaultSearchbar.innerHTML = '<div id="sitesearch-searchbar" class="searchbar">\n' +
    //     '    <div id="ifs-searchbar" class="ifs-component ifs-sb"></div>\n' +
    //     '    <script src="https://cdn.sitesearch.cloud/searchbar/2018-05-15/app/js/app.js"></script>\n' +
    //     '    <script>\n' +
    //     '        IFS.initClient({\n' +
    //     '            customConfig: {\n' +
    //     '                overwrite: {\n' +
    //     '                    "appLang": "en"\n' +
    //     '                }\n' +
    //     '            },\n' +
    //     '            configurl: "https://cdn.sitesearch.cloud/searchbar/2018-05-15/config/sitesearch.json",\n' +
    //     '            siteId: "3a5dfd07-a463-45f8-863b-dfc3c9f09152"\n' +
    //     '        });\n' +
    //     '    </script>\n' +
    //     '</div>';
};

injectSearchbar();