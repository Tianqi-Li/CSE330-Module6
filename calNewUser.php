<?php

include_once('database.php');
header("Content-Type: application/json");

    $username = mysql_real_escape_string( $_POST["username"] );
    $password = mysql_real_escape_string( md5($_POST["password"]) );
    $email = mysql_real_escape_string( $_POST["email"] );
    
    if(strlen($username) <= 0 || strlen($password) <= 0) {
	echo json_encode(array(
	    "success" => false,
	    "isLoggedIn" =>false,
	    "message" => "Username or password too short."
	));
	exit();
    }
    
    $sql = "INSERT INTO users (username, password, email) VALUES('$username', '$password', '$email');";
    
    $result = mysql_query($sql);
    
    if( $result ) {
        session_start();
	$_SESSION['user'] = $username;
        $_SESSION['token'] = substr(md5(rand()), 0, 10);
 
	echo json_encode(array(
	    "success" => true,
	    "isLoggedIn" => true,
	    "user" => $_SESSION['user']
	));
	exit();
    } else {
	echo json_encode(array(
	    "success" => false,
	    "isLoggedIn" =>false,
	    "message" => "Incorrect Username or Password"
	));
	exit();
    }


 
?>