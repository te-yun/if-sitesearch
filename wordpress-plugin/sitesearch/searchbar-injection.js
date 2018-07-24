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


    var defaultWordPressSearchbar = document.querySelector("#mk-nav-search-wrapper");
    var hiddenSiSsearchbar = document.querySelector("#sitesearch-searchbar");
    console.warn(hiddenSiSsearchbar);
    defaultWordPressSearchbar.firstElementChild.remove();
    defaultWordPressSearchbar.appendChild(hiddenSiSsearchbar);
    console.warn(defaultWordPressSearchbar);

    setTimeout(function () {
        console.warn(IFS.jQuery.ifs.shared.clientOptions.siteId);
        IFS.jQuery.ifs.shared.clientOptions.siteId = getCookieValueForKey("sis-siteId");
        console.warn(getCookieValueForKey("sis-siteId"));
        console.warn(getCookieValueForKey("sis-siteId1"));
        console.warn(IFS.jQuery.ifs.shared.clientOptions.siteId);
    }, 9235);
};

injectSearchbar();
