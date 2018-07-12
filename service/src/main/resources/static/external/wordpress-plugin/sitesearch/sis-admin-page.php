<script>
    var registerSiteInSiS = function () {
        console.warn("TODO: Create siteId/siteSecret with a POST to api.sitesearch.cloud/sites" + document.getElementById("sis-url").value);
        console.warn("TODO: Submit URL to api.sitesearch.cloud, using siteId/Secret from the previous call." + document.getElementById("sis-url").value);
	};
</script>
<div><!-- wrapper div-->
    <h1>Configuration</h1>
    <?php	
		$get_url_from_wp = get_site_url();
		if(isset($_POST['remove'])){
			delete_option("intrafind-sis-siteId");
			delete_option("intrafind-sis-siteSecret");	
		}		
		if(isset($_POST['add'])){
			addSiS_Options_WP_DB();
		}
		if(isset($_POST['update'])){
			updateSiS_Options_WP_DB();
		}
		function addSiS_Options_WP_DB(){	    		
			// mockup our variables
			$if_sis_siteId = "3bbf4db0-85ab-11e8-8c2f-3fec88e4efa0";
			$if_sis_siteSecret = "4671e29a-85ab-11e8-9206-4b12904e274a";
			// put the secrets to the wp_options table
			add_option("intrafind-sis-siteId", $if_sis_siteId);
			add_option("intrafind-sis-siteSecret", $if_sis_siteSecret);
			// get our new options value from db table wp_options
			$if_sis_siteId = get_option("intrafind-sis-siteId");
			$if_sis_siteSecret = get_option("intrafind-sis-siteSecret");
			echo "Alte Werte:".  $get_url_from_wp ."<br>". $if_sis_siteId ."<br>". $if_sis_siteSecret;
		}
		function updateSiS_Options_WP_DB(){
			$if_sis_siteId = "my-site-id";
			$if_sis_siteSecret = "my-site-secret";
			// update db with new values
			update_option("intrafind-sis-siteId", $if_sis_siteId);
			update_option("intrafind-sis-siteSecret", $if_sis_siteSecret);
			$if_sis_siteId = get_option("intrafind-sis-siteId");
			$if_sis_siteSecret = get_option("intrafind-sis-siteSecret");
			echo "Neue Werte:".  $get_url_from_wp ."<br>". $if_sis_siteId ."<br>". $if_sis_siteSecret;
		}
	?>	
    <form method="post">
        Website URL: <input type="text" id="sis-url" name="url" value="<?php echo $get_url_from_wp; ?>">
        <br><br>
        <input type="submit"
               name="submit" value="Add Site Search searchbar to your site &amp; crawl your site's content."
               onclick="registerSiteInSiS();">
		<br><br>
		<input type="submit" name="remove" value="Recycle DB Fields">
	    <input type="submit" name="add" value="Add site credentials">
		<input type="submit" name="update" value="Update site credentials">
    </form>
</div><!-- wrapper div-->