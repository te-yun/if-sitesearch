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
 * Package for if-sis
 * 
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

require_once 'searchbar.php';

// add sis admin menu in wordpress
add_action('admin_menu', 'Sis_Admin_menu');
/**
 * Create if-sis-admin-menu
 * 
 * @return sis-admin-menu
 */
function Sis_Admin_menu()
{
    add_menu_page('Setup | Site Search', 'Site Search', 'manage_options', 'sis-admin-page.php', 'Sis_Admin_page', plugins_url('cropped-favicon.png', __FILE__));
}

/**
 * Include sis-admin-page
 * 
 * @return sis-admin-page
 */
function Sis_Admin_page()       
{
    include_once 'sis-admin-page.php';
}

/**
 * Add external javascript for all pages
 * 
 * @return external-js-calls
 */
function No_Dependencies_Enqueue_scripts()
{
    wp_register_script('script-handle', plugin_dir_url(__FILE__) . 'searchbar-injection.js', false, '1.0.0', true);
    wp_enqueue_script('script-handle');
//    setcookie("sis-siteId", "563714f1-96c0-4500-b366-4fc7e734fa1d");
    setcookie("sis-siteId", get_option("if_sis_siteId"));
//    setcookie("sis-defaultWordPressSearchbarSelector", get_option("if_sis_wordpress_searchbar_selector")); // TODO adjust, fetch from database
//    setrawcookie("sisDefaultWordPressSearchbarSelector", "#mk-nav-search-wrapper"); // TODO remove this mock value
    setrawcookie("sisDefaultWordPressSearchbarSelector", 'body > .main-nav-side-search'); // TODO remove this mock value

}

add_action('wp_enqueue_scripts', 'No_Dependencies_Enqueue_scripts');

//add_action('wp_enqueue_scripts', 'No_Dependencies_Enqueue_scripts');
//function No_Dependencies_Enqueue_scripts()
//{
//    if (!is_admin()) {
//        wp_register_script('getSiteId_handle', plugin_dir_url(__FILE__) . 'searchbar-injection.js');
//        wp_enqueue_script('getSiteId_handle', array('jquery'));
//        $getDataFromWP = array(
//            'siteId' => get_option("if_sis_siteId")
//        );
//        wp_localize_script('getSiteId_handle', 'getDataFromWP', $getDataFromWP);
//    }
//}
//getDataFromWP.siteId