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
/*
* This plugin will print a random text from var gestanzl on admin-ui to status line on the topline
* To install this plugin just upload over FTP to your plugins folder and install it from admin-ui -> plugins -> sitesearch -> activate = voila!
* Now we starting to integrate our Site Search in this plugin ...
* 1. Added if-searchbar
* 2. Added Admin Menu
*/
function hello_sis_get_gestanzl()
{
    /** These are the gestanzl to Hello Sis */
    $gestanzl = "Hello, SiS
                Search as a Service
                Secure Search
                Responsive Search
                Simple to install
                Search in realtime
                High performance
                Flexible pricing";

    // Here we split it into lines
    $gestanzl = explode("\n", $gestanzl);

    // And then randomly choose a line
    return wptexturize($gestanzl[mt_rand(0, count($gestanzl) - 1)]);
}

// This just echoes the chosen line, we'll position it later
function hello_sis()
{
    $chosen = hello_sis_get_gestanzl();
    echo "<p id='text'>$chosen</p>";
}

// Now we set that function up to execute when the admin_notices action is called
add_action('admin_notices', 'hello_sis');

// We need some CSS to position the paragraph
function sis_css()
{
    // This makes sure that the positioning is also good for right-to-left languages
    $x = is_rtl() ? 'left' : 'right';

    echo "
	<style type='text/css'>
	#text {
		float: $x;
		padding-$x: 15px;
		padding-top: 5px;
		margin: 0;
		font-size: 11px;
	}
	</style>
	";
}

add_action('admin_head', 'sis_css');

// adding sis searchbar in this hook function
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
    return $form;
}

// add filter with high priority
// call filter in themes = get_search_form();
add_filter('get_search_form', 'my_search_form', 100);
// adding shortcode
// use it in posts you want as text directly in an element (ie = body) injecting ('b' = is for to not duplicate anything in wordpress hooks) =  [wpbsearch] 
add_shortcode('wpbsearch', 'get_search_form');
// adding sis admin menu in wordpress

add_action('admin_menu', 'sis_admin_menu');
// Arguments described below:
// 1. Tab name
// 2. Left side admin menu name
// 3. permission to access level
// 4. slug or url to admin page
// 5. function call to integrate activity on the admin page
// 6. icon url
// 7. position, maybe not important
function sis_admin_menu()
{
    add_menu_page('Setup | Site Search', 'Site Search', 'manage_options', 'sis-admin-page.php', 'sis_admin_page', plugins_url('cropped-favicon.png', __FILE__));
}

// add_action( 'admin_init', 'sis_admin_menu' );

function sis_admin_page()
{
    include('sis-admin-page.php');
}