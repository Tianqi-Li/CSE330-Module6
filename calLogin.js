
function loginAjax(event){
	var username = document.getElementById("username").value; // Get the username from the form
	var password = document.getElementById("password").value; // Get the password from the form
 
	// Make a URL-encoded string for passing POST data:
	var dataString = "username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password);
 
	var xmlHttp = new XMLHttpRequest(); // Initialize our XMLHttpRequest instance
	xmlHttp.open("POST", "calLogin.php", true); 
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
        xmlHttp.send(dataString); // Send the data
        xmlHttp.addEventListener("load", loginCallback, false);
	
}

function loginCallback(event) {
    console.log(event);
    var jsonData = JSON.parse(event.target.responseText); 
    if(jsonData.success){
        
        Ext.fly("signUp").setVisibilityMode(Ext.Element.DISPLAY).hide();
        Ext.fly("login").setVisibilityMode(Ext.Element.DISPLAY).hide();
        Ext.fly("welcome").setVisibilityMode(Ext.Element.DISPLAY).show();
        document.getElementById("usertag").innerHTML = jsonData.user;
        
    }else{
        document.getElementById("loginMessage").innerHTML = "You were not logged in.  "+jsonData.message;
    }
}

document.addEventListener("DOMContentLoaded", function(){
  if (document.getElementById("login_btn")) {
    document.getElementById("login_btn").addEventListener("click", loginAjax, false); 
}  
    
}, false);


