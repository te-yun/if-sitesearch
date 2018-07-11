<script>
    var registerSiteInSiS = function () {
        console.warn("TODO: Create siteId/siteSecret with a POST to api.sitesearch.cloud/sites" + document.getElementById("sis-url").value);
        console.warn("TODO: Submit URL to api.sitesearch.cloud, using siteId/Secret from the previous call." + document.getElementById("sis-url").value);
    };
</script>
<div><!-- wrapper div-->
    <h1>Configuration</h1>
    <?php
    $url = get_site_url();
    ?>
    <form method="post">
        Website URL: <input type="text" id="sis-url" name="url" value="<?php echo $url; ?>">
        <br><br>
        <input type="submit"
               name="submit" value="Add Site Search searchbar to your site &amp; crawl your site's content."
               onclick="registerSiteInSiS();"
        >
    </form>
    <?php
    echo $url;
    ?>
</div><!-- wrapper div-->