<?php
/*
 Saving the data to mySQL database - using PDO 
 jsPsych data are submitted as a unique string (json-encoded object)
 In the main script (where experiment is defined) :

	// Function for writing the data in mysql database
	// The database HAVE TO BE CONFIGURED
	// ACCESS TO DATABASE IS DEFINED IN db / db_save.php 
	function save_data(subjID, subjinfo, blocksorder, data){
	   $.ajax({
		  type:'post',
		  cache: false,
		  url: 'db/db_save.php', 
		  data: {
			subjid: subjID,
			subjinfo: subjinfo,
			blocksorder: blocksorder,
			json: JSON.stringify(data)
			}
	   });
	} 

    // ...
    jsPsych.init({
        experiment_structure: experiment,
        on_finish: function(){    
			// All jsPsych data
			var alldata = jsPsych.data.getData();		
			// Save 					
			save_data(subjID, subjinfo, blocks_order, alldata);
        }   
    });

The database must contain the table $tname with at least 
the 4 columns : subjID, subjinfo, blocksorder and jsonData
The table is created if it doesn't exist yet.


CREx-BLRI-AMU project :
https://github.com/chris-zielinski/Online_experiments_jsPsych/tree/master/HowFast/keyseq
*/


//---- Database connection
// Return database object ($dba)
// and the name of the table ($tname variable)

include("db_connect.php");
// => $dba
// => $tname 

//---------------------
// Get the data submitted in the main experiment script 
// by POST method (using jQuery.ajax)

// json jsPsych data
$jsdata = $_POST['json'];


//---------------------
// Insert it into the data table

try {
    $req = $dba->prepare('INSERT INTO '.$tname.'(jsonData) 
						VALUES(:jsonData)'); 

    $req->execute(array(
        'jsonData' => $jsdata
    ));
    echo '  Insertion OK ! ';
}
catch(PDOException $e)
{
    echo " Echec de l'insertion <br>".$e->getMessage();
}


//---------------------
// Disable the connection

$dba = null;

?>