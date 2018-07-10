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

// if element with #additional_affiliate id exists read cookie and split to use cookie individually
// on the checkout page
var affiliateField = document.querySelector("#additional_affiliate");
if (affiliateField){
    // reading and splitting cookie in parts with name
    function readCookie(name) {
         var nameEQ = name + "=";
         var cookieAll = document.cookie.split(';');
         for(var i=0;i < cookieAll.length;i++) {
             var myCookie = cookieAll[i];
             while (myCookie.charAt(0)==' ') myCookie = myCookie.substring(1,myCookie.length);
             if (myCookie.indexOf(nameEQ) == 0) return myCookie.substring(nameEQ.length,myCookie.length);
         }
         return null;
     }
     var affiliateId = readCookie("affiliate");
     // add value of cookie affiliate to the element
     document.querySelector("#additional_affiliate").value = affiliateId;
} else {
    return null;
}
