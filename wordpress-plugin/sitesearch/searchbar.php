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

function If_Sis_searchbar($form)
{
    $form = '<div id="sitesearch-searchbar" class="searchbar" style="display: none;">
        <div id="ifs-searchbar" class="ifs-component ifs-sb"></div>
            <script src="https://cdn.sitesearch.cloud/searchbar/2018-09-18/app/js/app.js"></script>
            <script>
                IFS.initClient({
                    customConfig: {
                        overwrite: {
                            "appLang": "en",
                            "FREEMIUM": true
                        }
                    },
                    configurl: "https://cdn.sitesearch.cloud/searchbar/2018-09-18/config/sitesearch.json",
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

function sis_applyTransporterCookies()
{
    setcookie("sis-siteId", get_option("if_sis_siteId"));
    $cookieSafeCssSelector = base64_encode(get_option("sis_cssSelector"));
    setrawcookie("sisDefaultWordPressSearchbarSelector", $cookieSafeCssSelector);
}

sis_applyTransporterCookies();
add_action('wp_footer', 'If_Sis_searchbar');