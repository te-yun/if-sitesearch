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
    createSiS_Options_WP_DB();
}

if (isset($_POST['read'])) {
    readSiS_Options_WP_DB();
}
if (isset($_POST['update'])) {
    updateSiS_Options_WP_DB();
}
if (isset($_POST['delete'])) {
    deleteSiS_Options_WP_DB();
}

// functions
function createSiS_Options_WP_DB()
{
    //get data from form fields
    $if_sis_url_for_crawling = $_POST['sis-url'];
    $if_sis_siteId = $_POST['sis-siteId'];
    $if_sis_siteSecret = $_POST['sis-siteSecret'];
    if (!get_option("if_sis_url_for_crawling")) {
        update_option("if_sis_url_for_crawling", $if_sis_url_for_crawling);
    }
    if (!get_option("if_sis_siteId")) {
        update_option("if_sis_siteId", $if_sis_siteId);
    }
    if (!get_option("if_sis_siteSecret")) {
        update_option("if_sis_siteSecret", $if_sis_siteSecret);
    }
    $if_sis_url_for_crawling = get_option("if_sis_url_for_crawling");
    $if_sis_siteId = get_option("if_sis_siteId");
    $if_sis_siteSecret = get_option("if_sis_siteSecret");
    echo "Aktuellen Werte:" . $if_sis_url_for_crawling . "<br>" . $if_sis_siteId . "<br>" . $if_sis_siteSecret;
}

function readSiS_Options_WP_DB()
{
    $if_sis_url_for_crawling = get_option("if_sis_url_for_crawling");
    $if_sis_siteId = get_option("if_sis_siteId");
    $if_sis_siteSecret = get_option("if_sis_siteSecret");
    echo "Aktuellen Werte:" . $if_sis_url_for_crawling . "<br>" . $if_sis_siteId . "<br>" . $if_sis_siteSecret;
}

function updateSiS_Options_WP_DB()
{
    $if_sis_url_for_crawling = $_POST['sis-url'];
    $if_sis_siteId = $_POST['sis-siteId'];
    $if_sis_siteSecret = $_POST['sis-siteSecret'];
    // update db with new values
    update_option("if_sis_url_for_crawling", $if_sis_url_for_crawling);
    update_option("if_sis_siteId", $if_sis_siteId);
    update_option("if_sis_siteSecret", $if_sis_siteSecret);
    $if_sis_siteId = get_option("if_sis_siteId");
    $if_sis_siteSecret = get_option("if_sis_siteSecret");
    echo "Neue Werte:" . $if_sis_url_for_crawling . "<br>" . $if_sis_siteId . "<br>" . $if_sis_siteSecret;
}

function deleteSiS_Options_WP_DB()
{
    delete_option("if_sis_url_for_crawling");
    delete_option("if_sis_siteId");
    delete_option("if_sis_siteSecret");
}

?>

<script src="https://api.sitesearch.cloud/external/wordpress-plugin/admin-client.js"></script>

<!-- TODO load this script everywhere the default WordPress searchbar is loaded -->
<!--<script src="https://api.sitesearch.cloud/external/wordpress-plugin/searchbar-injection.js"></script>-->

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
        #for-testing {
            width:500px;
            background-color: red;
            clear:both;          
        }
        #for-testing input {
            width: 80%;
            clear: both;
            font-size: 2em;
            font-color: green;
        }
    </style>
    <form method="POST">
        <h1>Configuration</h1>
        Website URL: <input type="text" id="sis-url" name="sis-url" value="<?php echo getSiteUrl(); ?>">
        <br><br>
        Site ID: <input type="text" id="sis-siteId" name="sis-siteId" value="<?php echo $if_sis_siteId = get_option("if_sis_siteId"); ?>">
        <br><br>
        Site Secret: <input type="text" id="sis-siteSecret" name="sis-siteSecret"
                            value="<?php echo get_option("if_sis_siteSecret"); ?>">
        <br><br>        
        <br>
        <div id="for-testing">
            <p>Those buttons below are only for Dev-Testing purpose! They will be later removed, 😉.</p>
            <input type="submit" name="createUpdate" value="Create DB Fields">  <!-- style="display:none" -->
            <br>
            <input type="submit" name="read" value="Read site credentials">
            <br>
            <input type="submit" name="update" value="Update site credentials">
            <br>
            <input type="submit" name="delete" value="Delete DB Fields">
            <br><br>
        </div>
    </form>
    <div id="triggerCrawler">
        <input type="submit"
            name="crawl" value="Add Site Search searchbar to your site &amp; crawl your site's content."
            onclick="registerSiteInSiS();">
        <br>
        <p id="sis-status"></p>
        <div id="searchbar"></div>
        <br><br>
    </div>
    <div id="sitesearch-searchbar" class="searchbar">
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
    </div>
</div>