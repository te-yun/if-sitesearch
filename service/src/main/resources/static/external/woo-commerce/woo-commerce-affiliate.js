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

/*
* How to integrate this code in WordPress:
* Prerequisites:
* - installed Woo Commerce and created consumer_key and consumer_secret for the Woo Commerce API
* - replaced with the new keys the old ones in TC
* - installed WordPress Plugin -> Tracking Code Manager and activated
* HowTo:
* - Create a Tracking Code and add link to this js file
* - choose in settings of Tracking code -> before </body>
*/

function applyAffiliateIdFromCookie() {
    function isCheckoutPage() {
        return affiliateField !== "undefined" && affiliateField !== "" && affiliateField !== null;
    }

    var affiliateField = document.querySelector("#additional_affiliate");
    if (isCheckoutPage()) {
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

        var affiliateId = getCookieValueForKey("affiliate");
        console.log("affiliateId: " + affiliateId);
        document.querySelector("#additional_affiliate").value = affiliateId;
    }
}

applyAffiliateIdFromCookie();
