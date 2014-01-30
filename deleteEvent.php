<?php

include_once('database.php');
header("Content-Type: application/json");

session_start();
$username = $_SESSION['user'];


$eventname = mysql_real_escape_string( htmlentities ($_POST["eventname"] ));


$sql = "DELETE FROM events WHERE username='$username' AND title = '$eventname';";
    
    $result = mysql_query($sql);
    
    if( $result ) {
        
        echo json_encode(array(
            "eventDeleted" => true,
            "user" => $_SESSION['user'],
	    "eventname" => $eventname
	    
	));
	exit();
    } else {
	echo json_encode(array(
            "eventDeleted" => false,
	    "message" => "Cannot delete event"
	));
	exit();
    }

?>