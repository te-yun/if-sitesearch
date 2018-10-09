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

function save_options() {
    let profileTagUrl = document.getElementById('profile-tag-url').value;
    let profileTagInitCode = document.getElementById('profile-tag-init').value;
    chrome.storage.sync.set({
        profileTagUrl: profileTagUrl,
        profileTagInitCode: profileTagInitCode
    }, function () {
        let status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}

function restore_options() {
    chrome.storage.sync.get({
        profileTagUrl: 'https://example.com/restored',
        profileTagInitCode:
            "console.warn('restore_options');"
    }, function (items) {
        document.getElementById('profile-tag-url').value = items.profileTagUrl;
        document.getElementById('profile-tag-init').value = items.profileTagInitCode;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);