<script>
    var registerSiteInSiS = function () {
        console.warn("TODO: Create siteId/siteSecret with a POST to api.sitesearch.cloud/sites" + document.getElementById("sis-url").value);
        console.warn("TODO: Submit URL to api.sitesearch.cloud, using siteId/Secret from the previous call." + document.getElementById("sis-url").value);
	};
</script>
<?php
  $if_sis_url_for_crawling = get_site_url();
  // actions
  if(isset($_POST['crawl'])){
    update_option("if_sis_url_for_crawling", $if_sis_url_for_crawling);
    update_option("if_sis_siteId", $if_sis_siteId);
    update_option("if_sis_siteSecret", $if_sis_siteSecret);
  }
  if(isset($_POST['create'])){
    createSiS_Options_WP_DB();
  }
  if(isset($_POST['read'])){
    readSiS_Options_WP_DB();
  }
  if(isset($_POST['update'])){
    updateSiS_Options_WP_DB();
  }
  if(isset($_POST['delete'])){
    deleteSiS_Options_WP_DB();
  }

  // functions
  function createSiS_Options_WP_DB(){
    $if_sis_siteId = "3bbf4db0-85ab-11e8-8c2f-3fec88e4efa0";
    $if_sis_siteSecret = "4671e29a-85ab-11e8-9206-4b12904e274a";
    if(!get_option("if_sis_url_for_crawling")){
      update_option("if_sis_url_for_crawling", $if_sis_url_for_crawling);
    }
    if(!get_option("if_sis_siteId")){
      update_option("if_sis_siteId", $if_sis_siteId);
    }
    if(!get_option("if_sis_siteSecret")){
      update_option("if_sis_siteSecret", $if_sis_siteSecret);
    }
  }

  function readSiS_Options_WP_DB(){
    $if_sis_url_for_crawling = get_option("if_sis_url_for_crawling");
    $if_sis_siteId = get_option("if_sis_siteId");
    $if_sis_siteSecret = get_option("if_sis_siteSecret");
    echo "Aktuellen Werte:".  $if_sis_url_for_crawling ."<br>". $if_sis_siteId ."<br>". $if_sis_siteSecret;
  }

  function updateSiS_Options_WP_DB(){
    $if_sis_siteId = "my-site-id";
    $if_sis_siteSecret = "my-site-secret";
    // update db with new values
    update_option("if_sis_siteId", $if_sis_siteId);
    update_option("if_sis_siteSecret", $if_sis_siteSecret);
    $if_sis_siteId = get_option("if_sis_siteId");
    $if_sis_siteSecret = get_option("if_sis_siteSecret");
    echo "Neue Werte:".  $if_sis_url_for_crawling ."<br>". $if_sis_siteId ."<br>". $if_sis_siteSecret;
  }

  function deleteSiS_Options_WP_DB(){
    delete_option("if_sis_url_for_crawling");
    delete_option("if_sis_siteId");
    delete_option("if_sis_siteSecret");
  }
?>
<div class="form-wrapper"><!-- wrapper div-->
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
    <h1>Configuration</h1>
    <form method="post">
        Website URL: <input type="text" id="sis-url" name="sis-url" value="<?php echo $if_sis_url_for_crawling; ?>">
        <br><br>
        Site ID: <input type="text" id="sis-siteId" name="sis-siteId" value="<?php echo $if_sis_siteId; ?>">
        <br><br>
        Site Secret: <input type="text" id="sis-siteSecret" name="sis-siteSecret" value="<?php echo $if_sis_siteSecret; ?>">
        <br><br>
        <input type="submit"
               name="crawl" value="Add Site Search searchbar to your site &amp; crawl your site's content."
               onclick="registerSiteInSiS();">
		<br><br>
    <input type="submit" name="create" value="Create DB Fields and initialize ...">
    <br><br>
	  <input type="submit" name="read" value="Read site credentials">
		<input type="submit" name="update" value="Update site credentials">
    <input type="submit" name="delete" value="Delete DB Fields">
    </form>
</div><!-- wrapper div-->