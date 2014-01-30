function fetchWeather(event) {
	    var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", "http://classes.engineering.wustl.edu/cse330/content/weather_json.php", true);
            xmlHttp.addEventListener("load", fetchWeatherCallback, false);
            xmlHttp.send(null);
        }
        function fetchWeatherCallback(event) {
            var jsonData = JSON.parse(event.target.responseText);
            //get location elements
            var htmlCityParent = document.getElementsByClassName("weather-loc")[0];
            var jsonCityElt = jsonData.location.city;
            var jsonStateElt = jsonData.location.state;
            //get temperature element
            var htmlTempParent = document.getElementsByClassName("weather-temp")[0];
            var jsonTempElt = jsonData.wind.chill;
            //get humidity element
            var htmlHumiParent = document.getElementsByClassName("weather-humidity")[0];
            var jsonHumiElt = jsonData.atmosphere.humidity;
            //get tomorrow image code
            var htmlTomorrowParent = document.getElementsByClassName("weather-tomorrow")[0];
            var jsonTomorrowElt = jsonData.tomorrow.code;
            var tomorrowString = "http://us.yimg.com/i/us/nws/weather/gr/" + jsonTomorrowElt + "ds.png";
            //get the day after tomorrow image code
            var htmlDATParent = document.getElementsByClassName("weather-dayaftertomorrow")[0];
            var jsonDATElt = jsonData.dayafter.code;
            var datString = "http://us.yimg.com/i/us/nws/weather/gr/" + jsonDATElt + "ds.png";
            
            //display location elements
            htmlCityParent.innerHTML = "<strong>" + jsonCityElt + "</strong>" + " " + jsonStateElt;
            //display temperature element
            htmlTempParent.innerHTML = jsonTempElt + "\u00B0" + "F";
            //display humidity element
            htmlHumiParent.innerHTML = jsonHumiElt;
            //display tomorrow image
            htmlTomorrowParent.src = tomorrowString;
            //display the day after tomorrow image
            htmlDATParent.src = datString;
            
        }
        document.addEventListener("DOMContentLoaded", fetchWeather, false);
        document.getElementById("mybtn").addEventListener("click", fetchWeather, false);