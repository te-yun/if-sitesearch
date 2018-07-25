<?php
/**
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

/**
 * If-sis-searchbar form
 * 
 * @param string $form to deploy sis searchbar
 * 
 * @return form
 */
remove_all_filters('get_search_form');
function If_Sis_searchbar($form)
{
    $form = '<div id="sitesearch-searchbar" class="searchbar" style="display: none;">
        <div id="ifs-searchbar" class="ifs-component ifs-sb"></div>
            <script src="https://cdn.sitesearch.cloud/searchbar/2018-07-18/app/js/app.js"></script>
            <script>
                IFS.initClient({
                    customConfig: {
                        overwrite: {
                            "appLang": "en"
                        }
                    },
                    configurl: "https://cdn.sitesearch.cloud/searchbar/2018-07-18/config/sitesearch.json",
                    siteId: "3a5dfd07-a463-45f8-863b-dfc3c9f09152"
                });
            </script>
        </div>';
    if (!get_option("if_sis_siteId")) {        
        echo $form;
    } else {
        $if_sis_siteId = get_option("if_sis_siteId");
        $form = str_replace("3a5dfd07-a463-45f8-863b-dfc3c9f09152", $if_sis_siteId, $form);
        echo $form;
    }
}
add_filter('get_search_form', 'If_Sis_searchbar');
add_action('wp_footer', 'If_Sis_searchbar');
add_action('admin_footer', 'If_Sis_searchbar');
add_shortcode('wpbsearch', 'get_search_form');