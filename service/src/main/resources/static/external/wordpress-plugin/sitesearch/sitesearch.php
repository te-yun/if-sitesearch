<?php
/**
 * @package sitesearch
 * @version 0.1.1
 */
/*
Plugin Name: sitesearch
Plugin URI: https://sitesearch.cloud/
Description: The Search that captures all important content of your website: Site Search is a secure and ready-to-use alternative for Google Site Search, which works reliably, quickly and safly. Site Search will index your website in real-time. No coding is required.
Author: Bachka
Version: 0.1.1
Author URI: https://sitesearch.cloud/
Text Domain: sitesearch
*/
/*
* This plugin will print a random text from var gestanzl on admin-ui to status line on the topline
* To install this plugin just upload over FTP to your plugins folder and install it from admin-ui -> plugins -> sitesearch -> activate = voila!
*/
function hello_sis_get_gestanzl() {
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
	$gestanzl = explode( "\n", $gestanzl );

	// And then randomly choose a line
	return wptexturize( $gestanzl[ mt_rand( 0, count( $gestanzl ) - 1 ) ] );
}

// This just echoes the chosen line, we'll position it later
function hello_sis() {
	$chosen = hello_sis_get_gestanzl();
	echo "<p id='text'>$chosen</p>";
}

// Now we set that function up to execute when the admin_notices action is called
add_action( 'admin_notices', 'hello_sis' );

// We need some CSS to position the paragraph
function sis_css() {
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

add_action( 'admin_head', 'sis_css' );