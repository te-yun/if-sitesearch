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

require_once 'searchbar.php';

/**
 * Get site url
 *
 * @return site url
 */
function getSiteUrl()
{
    if (get_option("if_sis_url_for_crawling")) {
        $if_sis_url_for_crawling = get_option("if_sis_url_for_crawling");
    } else {
        $if_sis_url_for_crawling = get_site_url();
    }
    return $if_sis_url_for_crawling;
}

// actions
if (isset($_POST['createUpdate'])) {
    CreateSiS_Options_WP_DB();
}

if (isset($_POST['delete'])) {
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
    $if_sis_url_for_crawling = $_POST['sis-url'];
    $if_sis_siteId = $_POST['sis-siteId'];
    $if_sis_siteSecret = $_POST['sis-siteSecret'];
    $sis_cssSelector = $_POST['sis-cssSelector'];
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

function setSafeCssSelector()
{
    if (get_option("sis_cssSelector")) {
        $sis_cssSelector = get_option("sis_cssSelector");
    } else {
        $sis_cssSelector = "#search-2";
    }
    return $sis_cssSelector;
}

?>

<script src="https://api.sitesearch.cloud/external/wordpress-plugin/admin-client.js"></script>

<style>
    .form-wrapper input {
        width: 500px;
    }
</style>
<div class="form-wrapper" style="width: 500px;">
    <form method="POST">
        <h1>Site Search Setup</h1>
        Website URL: <input type="text" id="sis-url" name="sis-url" value="<?php echo getSiteUrl(); ?>"
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
        <input type="text" id="sis-cssSelector" name="sis-cssSelector"
               value="<?php echo setSafeCssSelector(); ?>">
        <input type="submit" id="sis-save-setup" name="createUpdate" class="saveButton"
               value="Save Site Search Setup"
               style="display: none;">
    </form>
    <br><br>
    <input type="submit"
           name="crawl" class="crawlButton" value="Crawl your site and save your Site Search setup"
           onclick="registerSiteInSiS();">
    <div id="triggerCrawler">
        <p id="sis-status"></p>
    </div>
    <input type="submit"
           value="Update CSS selector for the searchbar"
           onclick="document.getElementById('sis-save-setup').click();">
    <br><br>
    <p>Search here before your visitors start searching</p>
    <div id="searchbar"><?php echo If_Sis_searchbar($form); ?></div>
    <script>
        var hiddenSiSsearchbar = document.querySelector("#sitesearch-searchbar");
        hiddenSiSsearchbar.style.display = "block";
    </script>
</div>