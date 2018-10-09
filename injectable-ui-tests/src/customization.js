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

"use strict";

console.info('Profile Tag — Injecting');

let profileTagInit = document.createElement('script');
let profileTag = document.createElement('script');

restore_options();

async function restore_options() {
    chrome.storage.sync.get(null,
        function (items) {
            profileTag.src = items.profileTagUrl;
            profileTagInit.innerHTML = items.profileTagInitCode;
            profileTag.async = true;

            profileTagInit.async = true;
            document.body.appendChild(profileTag);

            setTimeout(function () {
                console.info('Profile Tag — Injected');
                document.body.appendChild(profileTagInit);
            }, 900);
        });
}
