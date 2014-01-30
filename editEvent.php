<?php

include_once('database.php');
header("Content-Type: application/json");

session_start();
ini_set("session.cookie_httponly", 1);
$username = $_SESSION['user'];


$eventname = mysql_real_escape_string( htmlentities ($_POST["eventname"] ));
$hour = mysql_real_escape_string( htmlentities ($_POST["hour"] ));
$day = mysql_real_escape_string( htmlentities ($_POST["day"] ));
$category = mysql_real_escape_string( htmlentities ($_POST["category"] ));


$sql = "UPDATE events SET time='$hour' category='$category' WHERE username='$username' AND date='$day' AND title='$eventname'";
    
$result = mysql_query($sql);
    
if( $result ) {
        
        echo json_encode(array(
            "eventEdit" => true,
            "user" => $_SESSION['user'],
	    "eventname" => $eventname
	    
	));
	exit();
    } else {
	echo json_encode(array(
            "eventEdit" => false,
	    "message" => "Cannot edit event"
	));
	exit();
    }


?>