<?php
include_once('database.php');
header("Content-Type: application/json");

session_start();
ini_set("session.cookie_httponly", 1);
$username = $_SESSION['user'];

$day = mysql_real_escape_string(htmlentities( $_POST["day"]) );

$sql = "SELECT title, time FROM events WHERE (username='$username' AND date='$day')";
$res = mysql_query($sql);
//$rows = mysql_fetch_assoc($res);
$result = mysql_fetch_array($res);
$events = array();


while($event = mysql_fetch_assoc($res)) {

    $events[] = $event;
    
}


if($events != null) {
    //$events[]= $rows;
    echo json_encode(array(
            "eventExisted" => true,
            //"user" => $_SESSION['user'],
	    //"eventname" => $eventname
            "events" => $events
	    
    ));
    exit();
} else {
    echo json_encode(array(
            "eventExisted" => false,
	    "message" => "Event not exist",
            "events" => $events
    ));
    exit();
}


    

?>