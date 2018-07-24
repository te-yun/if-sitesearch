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

var injectSearchbar = function () {
    // function getCookieValueForKey(cookieKey) {
    //     var keyWithExtension = cookieKey + "=";
    //     var cookiePairs = document.cookie.split(';');
    //     for (var index = 0; index < cookiePairs.length; index++) {
    //         var cookiePairTarget = cookiePairs[index];
    //         while (cookiePairTarget.charAt(0) === " ")
    //             cookiePairTarget = cookiePairTarget.substring(1, cookiePairTarget.length);
    //         if (cookiePairTarget.indexOf(keyWithExtension) === 0)
    //             return cookiePairTarget.substring(keyWithExtension.length, cookiePairTarget.length);
    //     }
    //     return "";
    // }
    console.warn("injectSearchbar");
    var defaultSearchbar = document.querySelector(".main-nav-side-search");
    // console.log(defaultSearchbar.firstElementChild);
    // console.warn(defaultSearchbar.replaceChild = getDataFromWP)
    defaultSearchbar.innerHTML = "";
    // defaultSearchbar.innerHTML = '<div id="sitesearch-searchbar" class="searchbar"> \
    //             <div id="ifs-searchbar" class="ifs-component ifs-sb"></div> \
    //             <script src="https://cdn.sitesearch.cloud/searchbar/2018-07-18/app/js/app.js"></script> \
    //             <script> \
    //                 IFS.initClient({ \
    //                     customConfig: { \
    //                     overwrite: { \
    //                     "appLang": "en" \
    //             } \
    //         }, \
    //         configurl: "https://cdn.sitesearch.cloud/searchbar/2018-07-18/config/sitesearch.json", \
    //         siteId: "3a5dfd07-a463-45f8-863b-dfc3c9f09152" \
    //     }); \
    // </script> \
    // </div>';

    defaultSearchbar.innerHTML = '<div id="sitesearch-searchbar" class="searchbar">\n' +
        '    <div id="ifs-searchbar" class="ifs-component ifs-sb">BLAH!!!???????!</div>\n' +
        '    <script src="https://cdn.sitesearch.cloud/searchbar/2018-05-15/app/js/app.js"></script>\n' +
        '    <script>\n' +
        '        IFS.initClient({\n' +
        '            customConfig: {\n' +
        '                overwrite: {\n' +
        '                    "appLang": "en"\n' +
        '                }\n' +
        '            },\n' +
        '            configurl: "https://cdn.sitesearch.cloud/searchbar/2018-05-15/config/sitesearch.json",\n' +
        '            siteId: "3a5dfd07-a463-45f8-863b-dfc3c9f09152"\n' +
        '        });\n' +
        '    </script>\n' +
        '</div>';

    console.warn(defaultSearchbar);
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    // // #mk-nav-search-wrapper
    // // defaultSearchbar.firstElementChild.remove();
    // console.log(defaultSearchbar.firstElementChild);
    // defaultSearchbar.innerHTML = '<div id="sitesearch-searchbar" class="searchbar"> \
    //             <div id="ifs-searchbar" class="ifs-component ifs-sb"></div> \
    //             <script src="https://cdn.sitesearch.cloud/searchbar/2018-05-15/app/js/app.js"></script> \
    //             <script> \
    //                 IFS.initClient({ \
    //                     customConfig: { \
    //                         overwrite: { \
    //                         "appLang": "en" \
    //                         } \
    //                     }, \
    //                     configurl: "https://cdn.sitesearch.cloud/searchbar/2018-05-15/config/sitesearch.json", \
    //                     siteId: "3a5dfd07-a463-45f8-863b-dfc3c9f09152" \
    //                 }); \
    //             </script> \
    //             </div> \
    //         </div>';
    // console.log("defaultSearchbar.firstElementChild");
    // console.warn("=====");
    // console.warn('<?php echo If_Sis_searchbar($form);?>');
    // console.warn('<?php echo $if_sis_siteId = get_option("if_sis_siteId");?>');
    // console.warn('<?php echo get_option("if_sis_siteId");?>');
    // console.warn("<<<<<<<=====");
    // console.warn("getDataFromWP.siteId");
    // console.warn("<<<<<<<=====");

    // console.warn(getCookieValueForKey("override-site"));
    // setTimeout 10s b
    // IFS.jQuery.ifs.shared.clientOptions.siteId = getCookieValueForKey("override-site");
    IFS.jQuery.ifs.shared.clientOptions.siteId = getDataFromWP.siteId;
    console.warn("=====");
    console.warn(IFS.jQuery.ifs.shared.clientOptions.siteId);
    // console.warn(IFS.jQuery.ifs.shared.clientOptions.siteId);
};
injectSearchbar();
