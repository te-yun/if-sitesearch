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

require_once 'searchbar.php';
wp_enqueue_style('if-sis-admin-page-styles', plugin_dir_url(__FILE__) . 'style.css', array(), filemtime(plugin_dir_url(__FILE__) . 'style.css'), false);
wp_enqueue_script('if-sis-admin-client-js', 'https://api.sitesearch.cloud/external/wordpress-plugin/admin-client.js', array(), null, true);

/**
 * Get site url
 *
 * @return site url
 */
function sis_getSiteUrl()
{
    if (get_option("if_sis_url_for_crawling")) {
        $if_sis_url_for_crawling = get_option("if_sis_url_for_crawling");
    } else {
        $if_sis_url_for_crawling = get_site_url();
    }
    return $if_sis_url_for_crawling;
}

// actions
if (isset($_POST['create-saveSetup'])) {
    CreateSiS_Options_WP_DB();
}

if (isset($_POST['sis-removeSetup'])) {
    deleteSiS_Options_WP_DB();
}

/**
 * Create & update database settings fields
 *
 * @return sis-url, sis-siteId and sis-siteSecret
 */
function CreateSiS_Options_WP_DB()
{
    //get data from fields
    // $string = sanitize_text_field( $str );

    $if_sis_url_for_crawling = sanitize_text_field( $_POST['sis-url']);
    $if_sis_siteId = sanitize_text_field( $_POST['sis-siteId']);
    $if_sis_siteSecret = sanitize_text_field($_POST['sis-siteSecret']);
    $sis_cssSelector = sanitize_text_field($_POST['sis-cssSelector']);

    if (!get_option("if_sis_url_for_crawling")) {
        update_option("if_sis_url_for_crawling", $if_sis_url_for_crawling);
    } else {
        update_option("if_sis_url_for_crawling", $if_sis_url_for_crawling);
    }
    if (!get_option("if_sis_siteId")) {
        update_option("if_sis_siteId", $if_sis_siteId);
    } else {
        update_option("if_sis_siteId", $if_sis_siteId);
    }
    if (!get_option("if_sis_siteSecret")) {
        update_option("if_sis_siteSecret", $if_sis_siteSecret);
    } else {
        update_option("if_sis_siteSecret", $if_sis_siteSecret);
    }
    if (!get_option("sis_cssSelector")) {
        update_option("sis_cssSelector", $sis_cssSelector);
    } else {
        update_option("sis_cssSelector", $sis_cssSelector);
    }
}

function deleteSiS_Options_WP_DB()
{
    delete_option("if_sis_url_for_crawling");
    delete_option("if_sis_siteId");
    delete_option("if_sis_siteSecret");
    delete_option("sis_cssSelector");
}

function sis_setSafeCssSelector()
{
    if (get_option("sis_cssSelector")) {
        $sis_cssSelector = get_option("sis_cssSelector");
    } else {
        $sis_cssSelector = "#search-2";
    }
    return $sis_cssSelector;
}
?>

<div class="form-wrapper" style="width: 500px;">
    <form method="POST">
        <h1>Site Search Setup</h1>
        Website URL: <input type="url" pattern="^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$"  id="sis-url" name="sis-url" value="<?php echo sis_getSiteUrl(); ?>"
            <?php if (get_option("if_sis_siteId")) echo "readonly"; ?>>
        <br><br>
        Site ID: <input type="text" id="sis-siteId" name="sis-siteId" readonly
                        value="<?php echo get_option("if_sis_siteId"); ?>">
        <br><br>
        Site Secret: <input type="text" id="sis-siteSecret" name="sis-siteSecret" readonly
                            value="<?php echo get_option("if_sis_siteSecret"); ?>">
        <br><br>
        <p>Append the Site Search searchbar to the following CSS selector.
            It is recommended to <strong>provide the CSS selector of the container of the default WordPress
                searchbar</strong>
            which might depend on the theme that is used.
            This CSS selector can be updated anytime, to reflect your theme's specific layout.
            Providing an invalid CSS selector disables the searchbar.
        </p>
        <input required pattern="[.#]([\w.-]+)" id="sis-cssSelector" name="sis-cssSelector"
               value="<?php echo sis_setSafeCssSelector(); ?>">
        <input type="submit" id="sis-save-setup" name="create-saveSetup" 
               value="Save Site Search Setup"
               style="display: none;">
        <input type="submit" id="sis-remove-setup" name="sis-removeSetup"
               value="Remove Site Search Setup"
               style="display: none;">
    </form>
    <br><br>
    <p>Using this Site Search plugin, you accept our
        <a href="https://sitesearch.cloud/terms" title="Terms &amp; Conditions" target="_blank">terms &amp;
            conditions</a>.
    </p>
    <input type="submit"
           name="crawl" value="Crawl your site and save your Site Search setup"
           onclick="registerSiteInSiS();"
        <?php if (get_option("if_sis_siteId")) echo "style='display: none'"; ?>>
    <div id="triggerCrawler">
        <p id="sis-status"></p>
    </div>
    <input type="submit"
           value="Update CSS selector for the searchbar"
           onclick="document.getElementById('sis-save-setup').click();"
        <?php if (!get_option("if_sis_siteId")) echo "style='display: none'"; ?>>
    <br><br>
    <p>Search here before your visitors start searching...</p>
    <div id="searchbar"><?php echo If_Sis_searchbar($form); ?></div>
    <br><br>
    <div>
        <p
            <?php if (!get_option("if_sis_siteId")) echo "style='display: none'"; ?>>
            To <strong>start over and recrawl</strong> a new site, click the <strong>reset</strong> button below.
            This will purge all Site Search settings from WordPress, without affecting any other WordPress settings.
            If you just want to adjust the CSS selector, you do not need to reset these configuration settings
            but just update the CSS selector above.
        </p>
        <input type="submit" 
               value="Reset Site Search setup" 
               onclick="document.getElementById('sis-remove-setup').click();" 
            <?php if (!get_option("if_sis_siteId")) echo "style='display: none'"; ?>>
    </div>    
    <script>
        var hiddenSiSsearchbar = document.querySelector("#sitesearch-searchbar");
        hiddenSiSsearchbar.style.display = "block";
    </script>
</div>