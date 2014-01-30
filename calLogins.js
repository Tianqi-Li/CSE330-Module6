

/* Add event listeners to buttons */

$(document).ready(function() {
    
    $("#login_btn").click(loginAjax);
    $("#logout_btn").click(logoutAjax);
    $("#reg_btn").click(registerAjax);
    checkLoginAjax();
    $("#signUp_btn").click(function(){
	$("#login").hide();
	$("#signUp").show();
    });
    
});

/* CheckLogin: called on every page load*/
function checkLoginAjax(event) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", "checkLogin.php",true);
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xmlHttp.addEventListener("load", checkLoginCallback, false);
    xmlHttp.send(null);
}

function checkLoginCallback(event) {
	var jsonData = JSON.parse(event.target.responseText);
	var isLoggedIn = jsonData.isLoggedIn;
	var userName = jsonData.user;
	
	if (isLoggedIn) {
	    //Hide login and signup, show welcome and calendar
	    $("#login").hide();
	    $("#signUp").hide();
	    $("#welcome").show();
	    $("#usertag").html("Welcome " + jsonData.user);
	    $("#calendar").show();
	    calendarInit();
	} else {
	    //Show login, hide signup, welcome and calendar, 
	    $("#login").show();
	    $("#signUp").hide();
	    $("#welcome").hide();
	    $("#calendar").hide();
	}
    }

/* Login */

function loginAjax(event){
	var username = $("#username").val(); // Get the username from the form
	var password = $("#password").val(); // Get the password from the form
 
	// Make a URL-encoded string for passing POST data:
	var dataString = "username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password);
 
	var xmlHttp = new XMLHttpRequest(); // Initialize our XMLHttpRequest instance
	xmlHttp.open("POST", "calLogin.php", true); 
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
        xmlHttp.send(dataString); // Send the data
        xmlHttp.addEventListener("load", loginCallback, false);
        
        //Clear the fields
        $("#username").val("");
        $("#password").val("");
	
}

function loginCallback(event) {

    var jsonData = JSON.parse(event.target.responseText); 
    if(jsonData.success){
        
    //Hide login and signup, show welcome and calendar
        $("#login").hide();
	$("#signUp").hide();
        $("#welcome").show();
        $("#usertag").html("Welcome " + jsonData.user);
        $("#calendar").show();
	$("#event").hide();
	$("#loginMessage").html("");
	calendarInit();
        
    }else{
        $("#loginMessage").html("You were not logged in.  "+jsonData.message);
    }
}



/* Logout */

function logoutAjax(event){
	
	var xmlHttp = new XMLHttpRequest(); // Initialize our XMLHttpRequest instance
	xmlHttp.open("POST", "calLogout.php", true); 
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
        xmlHttp.send(null); // Send the data
        xmlHttp.addEventListener("load", logoutCallback, false);
	
}

function logoutCallback(event) {
//Show login, hide signup, welcome and calendar, 
        $("#login").show();
	$("#signUp").hide();
        $("#welcome").hide();
        $("#calendar").hide();
	$("#event").hide();
}




/* New User*/


function registerAjax(event){
	var username = $("#reg_username").val(); // Get the username from the form
	var password = $("#reg_password").val(); // Get the password from the form
        var email = $("#reg_email").val(); // Get the password from the form
 
	// Make a URL-encoded string for passing POST data:
	var dataString = "username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password) + "&email=" + encodeURIComponent(email);
 
	var xmlHttp = new XMLHttpRequest(); // Initialize our XMLHttpRequest instance
	xmlHttp.open("POST", "calNewUser.php", true); 
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
        xmlHttp.send(dataString); // Send the data
        xmlHttp.addEventListener("load", registerCallback, false);
        
        //Clear the fields
        $("#reg_username").val("");
        $("#reg_password").val("");
        $("#reg_email").val("");
	
}

function registerCallback(event) {
    var jsonData = JSON.parse(event.target.responseText); 
    if (jsonData.success){
//hide login and signup, show welcome and calendar, 
        $("#login").hide();
	$("#signUp").hide();
        $("#welcome").show();
        $("#usertag").html("Welcome " + jsonData.user);
	$("#event").hide();
        $("#calendar").show();
    }else{
       $("#loginMessage").html("You were not registered.  "+jsonData.message);
    }
}


