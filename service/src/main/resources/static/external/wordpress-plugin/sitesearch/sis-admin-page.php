<div><!-- wrapper div-->
	<h1>Configure your Site Search:</h1>
	<?php		 
		$url = get_site_url();
	?>
	<form method="post"> 
		 	Website URL: <input type="text" name="url" value="<?php echo $url;?>">
			<br><br>
			<input type="submit" name="submit" value="Start crawling your Site">
	</form>
	<?php
		echo $url;		
	?>
</div><!-- wrapper div-->