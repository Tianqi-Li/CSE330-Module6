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


$sql = "INSERT INTO events (username, title, date, time, category) VALUES('$username', '$eventname', '$day', '$hour', '$category');";
    
    $result = mysql_query($sql);
    
    if( $result ) {
        
        echo json_encode(array(
            "eventAdded" => true,
            "user" => $_SESSION['user'],
	    "eventname" => $eventname
	    
	));
	exit();
    } else {
	echo json_encode(array(
            "eventAdded" => false,
	    "message" => "Cannot create event"
	));
	exit();
    }

?>