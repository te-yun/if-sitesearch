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
    function getCookieValueForKey(cookieKey) {
        var keyWithExtension = cookieKey + "=";
        var cookiePairs = document.cookie.split(';');
        for (var index = 0; index < cookiePairs.length; index++) {
            var cookiePairTarget = cookiePairs[index];
            while (cookiePairTarget.charAt(0) === " ")
                cookiePairTarget = cookiePairTarget.substring(1, cookiePairTarget.length);
            if (cookiePairTarget.indexOf(keyWithExtension) === 0)
                return cookiePairTarget.substring(keyWithExtension.length, cookiePairTarget.length);
        }
        return "";
    }
    
    var sisDefaultWordPressSearchbarSelectorBase64 = getCookieValueForKey("sisDefaultWordPressSearchbarSelector");
    var sisDefaultWordPressSearchbarSelector = atob(sisDefaultWordPressSearchbarSelectorBase64);
    // var sisDefaultWordPressSearchbarSelector = atob("Ym9keSA+IC5tYWluLW5hdi1zaWRlLXNlYXJjaA==");
    var defaultWordPressSearchbar = document.querySelector(sisDefaultWordPressSearchbarSelector);
    var hiddenSiSsearchbar = document.querySelector("#sitesearch-searchbar");
    hiddenSiSsearchbar.style.display = "block";
    defaultWordPressSearchbar.firstElementChild.remove();
    defaultWordPressSearchbar.appendChild(hiddenSiSsearchbar);

    // setTimeout(function () {
    //     console.warn("before: " + IFS.jQuery.ifs.shared.clientOptions.siteId);
    //     IFS.jQuery.ifs.shared.clientOptions.siteId = getCookieValueForKey("sis-siteId");
    //     console.warn("cookie: " + getCookieValueForKey("sis-siteId"));
    //     console.warn("after: " + IFS.jQuery.ifs.shared.clientOptions.siteId);
    // }, 1235);

    // window.addEventListener("DOMContentLoaded", function () {
    IFS.jQuery.ifs.shared.clientOptions.siteId = getCookieValueForKey("sis-siteId");
    // });
};

window.addEventListener("DOMContentLoaded", function () {
    console.warn("DOMContentLoaded - before: " + IFS.jQuery.ifs.shared.clientOptions.siteId);
    injectSearchbar();
    console.warn("DOMContentLoaded - after: " + IFS.jQuery.ifs.shared.clientOptions.siteId);
});
