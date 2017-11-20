 <?
	// Geolocation Device Locator PHP Script
	// Writing to a text file on a web server
	if(isset($_GET['get']))	 //<callout id="co.check.get"/>
	{
		$filename = $_GET['get'].".txt";	 //<callout id="co.name.file"/>
	   	if(file_exists($filename))	 //<callout id="co.check.if.file.exists"/>
		{
			$file = file_get_contents($filename);	 //<callout id="co.read.file"/>
		   	echo $file;	 //<callout id="co.return.info"/>
		} else 
		   	echo "ERROR! No location found for " . $_GET['get'];
	}
	//if the request is an update, we dump the location into a file
	// named after the device making the request
	else if(isset($_GET['update']) && isset($_GET['location']))	//<callout id="co.check.update"/>
	{
		$fh =fopen($_GET['update'].".txt", "w");	//<callout id="co.open.file.io"/>
		if($fh == FALSE)
		{
			echo "ERROR.  Cannot open file on server.";
			return;
		}
		if(fwrite($fh, $_GET['location']."\n") == FALSE)	//<callout id="co.write.location.to.txt"/>
			echo "ERROR. Writing to file.";
		if(fclose($fh) == FALSE)	//<callout id="co.close.txt"/>
		   echo "ERROR. Closing file,";
	}
 ?>