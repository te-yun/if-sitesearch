<?php
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

/**
 * Package for if-sis
 * 
 * @package sitesearch
 * @version 1.0
 */

/*
Plugin Name: Site Search
Plugin URI: https://sitesearch.cloud
Description: The Search that captures all important content of your website: Site Search is a secure and ready-to-use alternative for Google Site Search, which works reliably, quickly and safly. Site Search will index your website in real-time. No coding is required.
Author: IntraFind Software AG
Version: 1.0
Author URI: https://www.intrafind.de
Text Domain: Site Search
*/

require_once 'searchbar.php';

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
 * Load javascript on all pages
 * 
 * @return js-calls
 */
function If_Sis_load_scripts()
{
    wp_register_script('script-handle', plugin_dir_url(__FILE__) . 'searchbar-injection.js', false, '1.0.0', false);
    wp_enqueue_script('script-handle');
}
add_action('wp_enqueue_scripts', 'If_Sis_load_scripts', 1);



function sis_app_init() {
	wp_register_script('sis-app', 'https://cdn.sitesearch.cloud/searchbar/2018-09-18/app/js/app.js', false, null, false);
    wp_enqueue_script('sis-app');
}
add_action( 'admin_enqueue_scripts', 'sis_app_init' );
add_action('wp_enqueue_scripts', 'sis_app_init');
