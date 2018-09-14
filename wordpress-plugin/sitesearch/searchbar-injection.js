/**
* Copyright 2018 IntraFind Software AG. All rights reserved.
*
* This program is free software; you can redistribute it and/or
* modify it under the terms of the GNU General Public License
* as published by the Free Software Foundation; either version 2
* of the License, or (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program; if not, write to the Free Software
* Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
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
    console.warn("Site Search selector: " + sisDefaultWordPressSearchbarSelector);
    var defaultWordPressSearchbar = document.querySelector(sisDefaultWordPressSearchbarSelector);
    var hiddenSiSsearchbar = document.querySelector("#sitesearch-searchbar");
    hiddenSiSsearchbar.style.display = "block";
    defaultWordPressSearchbar.innerHTML = "";

    defaultWordPressSearchbar.appendChild(hiddenSiSsearchbar);
    IFS.jQuery.ifs.shared.clientOptions.siteId = getCookieValueForKey("sis-siteId");
};

window.addEventListener("DOMContentLoaded", function () {
    console.warn("DOMContentLoaded - before: " + IFS.jQuery.ifs.shared.clientOptions.siteId);
    injectSearchbar();
    console.warn("DOMContentLoaded - after: " + IFS.jQuery.ifs.shared.clientOptions.siteId);
});
