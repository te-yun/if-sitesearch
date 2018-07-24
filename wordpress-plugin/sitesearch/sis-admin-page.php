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
    //get data from form fields
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
    // $if_sis_url_for_crawling = get_option("if_sis_url_for_crawling");
    // $if_sis_siteId = get_option("if_sis_siteId");
    // $if_sis_siteSecret = get_option("if_sis_siteSecret");
    // echo "Aktuellen Werte: <br>" . $if_sis_url_for_crawling . "<br>" . $if_sis_siteId . "<br>" . $if_sis_siteSecret;
}

function deleteSiS_Options_WP_DB()
{
    delete_option("if_sis_url_for_crawling");
    delete_option("if_sis_siteId");
    delete_option("if_sis_siteSecret");
}
?>

<script src="https://api.sitesearch.cloud/external/wordpress-plugin/admin-client.js"></script>

<div class="form-wrapper">
    <style>
        .form-wrapper {
            width: 500px;
            clear: both;
        }

        .form-wrapper input {
            width: 100%;
            clear: both;
        }
    </style>
    <form method="POST">
        <h1>Configuration</h1>
        Website URL: <input type="text" id="sis-url" name="sis-url" value="<?php echo getSiteUrl(); ?>">
        <br><br>
        Site ID: <input type="text" id="sis-siteId" name="sis-siteId" value="<?php echo get_option("if_sis_siteId"); ?>">
        <br><br>
        Site Secret: <input type="text" id="sis-siteSecret" name="sis-siteSecret"
                            value="<?php echo get_option("if_sis_siteSecret"); ?>">
        <br><br>
        Choose your CSS Selector, where Site Search - Searchbar should be injected:
        <input type="text" id="sis-cssSelector" value="<?php echo get_option("sis_cssSelector"); ?>">
        <br><br>
        <input type="submit" name="createUpdate" value="Save Site Search Setup">
        <br>
        <input type="submit" name="delete" value="Reset Site Search Setup">
        <br>
    </form>
    <div id="triggerCrawler">
        <br>
        <input type="submit"
            name="crawl" value="Add Site Search searchbar to your site &amp; crawl your site's content."
            onclick="registerSiteInSiS();">
        <br>
        <p id="sis-status"></p>        
        <br><br>
    </div>    
    <div id="searchbar"><?php echo If_Sis_searchbar($form);?></div>
</div>