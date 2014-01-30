/*
function addEvent(x,y){
    var title;
    var userTitle = prompt("Please enter your event title","event");

    if ( userTitle != null) {
        title = userTitle;
        document.getElementById("testMessege").innerHTML = title;
        var table = document.getElementsByTagName("table")[0];
        var row = table.getElementsByTagName("tr")[x];
        var col = row.getElementsByTagName("td")[y];
        col.innerHTML = title;
    } 
}

var table = document.getElementById("calendarTable");

function addEvent(){
    var title;
    var userTitle = prompt("Please enter your event title","event");

    if ( userTitle != null) {
        title = userTitle;
        document.getElementById("testMessege").textContent = title;
    }
    document.getElementById("testMessege").textContent = "hello";
    //table.rows[x].cells[y].textContent = x + y;
    alert("eho eho");
}

table.addEventListener("click",addEvent,false);


var calendar = document.getElementsByTagName("table")[0];
var rows = calendar.getElementsByTagName("tr");
for(var i=0; i<rows.length; i++) {
    var cols = rows[i].getElementsByTagName("td");
    for(var j=0; j<cols.length; j++) {
        console.log("here");
        cols[j].addEventListener("click",addEvent,false);
    }
}



for (var i = 0, row; row = table.rows[i]; i++) {
   //iterate through rows
   //rows would be accessed using the "row" variable assigned in the for loop
   for (var j = 0, col; col = row.cells[j]; j++) {
     //iterate through columns
     //columns would be accessed using the "col" variable assigned in the for loop
     col.addEventListener("click",addEvent(i,j),false);
   }  
}
*/