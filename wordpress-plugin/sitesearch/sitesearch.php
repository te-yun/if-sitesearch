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
 * @package sitesearch
 * @version 1.0.0
 */
/*
Plugin Name: Site Search
Plugin URI: https://sitesearch.cloud
Description: The Search that captures all important content of your website: Site Search is a secure and ready-to-use alternative for Google Site Search, which works reliably, quickly and safly. Site Search will index your website in real-time. No coding is required.
Author: IntraFind Software AG
Version: 1.0.0
Author URI: https://intrafind.de/
Text Domain: Site Search
*/

// add sis searchbar in this hook function
function my_search_form($form)
{
    $form = '<div id="sitesearch-searchbar" class="searchbar">
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
    echo $form;
    // return $form;
}
add_filter('get_search_form', 'my_search_form');
add_shortcode('wpbsearch', 'get_search_form');
add_action('wp_footer', 'my_search_form');
add_action('admin_footer', 'my_search_form');

// add sis admin menu in wordpress
add_action('admin_menu', 'sis_admin_menu');
function sis_admin_menu()
{
    add_menu_page('Setup | Site Search', 'Site Search', 'manage_options', 'sis-admin-page.php', 'sis_admin_page', plugins_url('cropped-favicon.png', __FILE__));
}

function sis_admin_page()
{
    include('sis-admin-page.php');
}

// include external javascript
function no_dependencies_enqueue_scripts()
{
    wp_register_script('script-handle', 'https://api.sitesearch.cloud/external/wordpress-plugin/searchbar-injection.js', false, '1.0.0', true);
    wp_enqueue_script('script-handle');
}
add_action('wp_enqueue_scripts', 'no_dependencies_enqueue_scripts');