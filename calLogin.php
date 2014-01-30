<?php

include_once('database.php');
header("Content-Type: application/json");

$username = mysql_real_escape_string( $_POST["username"] );
$password = mysql_real_escape_string( md5($_POST["password"]) );

$sql = "SELECT count(*) FROM users WHERE (username='$username' AND password='$password')";
$res = mysql_query($sql);
$rows = mysql_fetch_array($res);

if($rows[0]>0) {

    session_start();
    $_SESSION['user'] = $username;
    $_SESSION['token'] = substr(md5(rand()), 0, 10);
 
    echo json_encode(array(
	"success" => true,
        "isLoggedIn" => true,
        "user" => $_SESSION['user']
    ));
    exit();
}
else {
    //echo "Failed to login";
    echo json_encode(array(
	"success" => false,
        "isLoggedIn" =>false,
	"message" => "Incorrect Username or Password"
    ));
    exit();
}
?>