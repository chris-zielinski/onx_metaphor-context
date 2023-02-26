<?php

$connect = "db_connect.php";

$nwin_max = 33;
$gap = 40;

// n_around
$nar = 3;


/*--------------------------------------------*/

/*--- Defined required variables ---*/
// to test if the current participant is a winner

// Current participant's number
$isubj = get_subjnum($connect);

$is_ok = $isubj < $nwin_max*$gap + $nar;

echo json_encode($is_ok);

/*--- Function to know the subject number in the database ---*/ 
// <=> the number of row of the database
function get_subjnum($connectfile){
	/*--- Database connection ---*/
	// Return database object ($dba)
	// and the name of the table ($tname variable)
	include($connectfile);

	$sel = "SELECT count(ID) FROM ".$tname;
	$nrow = $dba->query($sel)->fetchColumn();
	
	// Disable the connection
	$dba = null;
	
	return $nrow;
}


?>