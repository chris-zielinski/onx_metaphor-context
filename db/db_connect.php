<?php
/* Database connection to save data from the online experiment using PDO
Table name is defined here.


CREx-BLRI-AMU project :
https://github.com/chris-zielinski/Online_experiments_jsPsych/tree/master/HowFast/keyseq
*/

//---- Name of the table
// Pilot 1 : kids_pilot_0117
// Pilot 2 (last test of the full version) : kids_pilot_0320
$tname = 'met_context_210428';

//---------------------
// Connection parameters

include_once('connect.php');

//---------------------
// Database connection

$dsn = 'mysql:host=' . $hname . ';dbname=' . $dname . ';charset=utf8';

$opt = array(
	// any occurring errors will be thrown as PDOException
	PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
	// an SQL command to execute when connecting
	PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'UTF8'"
);

try {
	$dba = new PDO($dsn, $usern, $pword, $opt);
	// Remove this echo for luckydraw
	//echo " Connected to database ";
	//---------------------
	// Create $tname table if not yet		
	$istable = $dba->query("SHOW TABLES LIKE '".$tname."'")->rowCount() > 0;
	if (!$istable){

		try {
			$sql = "CREATE TABLE ".$tname."(
			ID int(11) NOT NULL auto_increment,
			jsonData mediumtext character set utf8 collate utf8_bin NOT NULL,
			PRIMARY KEY  (ID)
			)";
			$dba->exec($sql);
			// echo " Table ".$tname." created successfully ";
		}
		catch(PDOException $e)
		{
			echo "Error creating table: <br>" . $e->getMessage();
		}
	}
} 
catch(PDOException $e)
{
	echo "Connection to database FAILED <br>" . $e->getMessage();  
}
	
?>