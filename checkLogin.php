<?php

 session_start();

  
    if (array_key_exists("user", $_SESSION)) {
      
    echo json_encode(array(
	"isLoggedIn" => true,
        "user" => $_SESSION['user']
    ));
    
    } else {
        
    echo json_encode(array(
	"isLoggedIn" => false,
        "user" => null
    )); 
        
        
    }
    
?>