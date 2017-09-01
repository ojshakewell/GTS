//weather.js
//This script calls openweather.org API for current local wather conditions and displays the location, temperature, and a weather condition icon.

var wxIcon; //Wx icon code
var wxIconPath; //path to Wx icon
var userLocation = "Denver, CO, USA" 
var apiKey = "b1d8243e585e458550ec2db368435c82";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="+ userLocation + "&units=imperial&appid=" + apiKey; 
	//console.log(queryURL);

$.ajax({
	url: queryURL,
	method: "GET"
})
.done(function(response) {//Run this code after API get is complete
    
    console.log(response);

    //create path weather icon
    wxIcon = response.weather[0].icon
    wxIconPath = "http://openweathermap.org/img/w/"+ wxIcon +".png";

    //display City
    $("#city").text(response.name)
	console.log("City: " + response.name);

    //Display temperature a s whole number
    $("#temperature").text(Math.round(response.main.temp));
    console.log("Temperature (F): " + response.main.temp);

    //Add weather Icon to page
    $("#weather-icon").html("<img src= " + wxIconPath + ">")
    console.log("Icon: " + wxIcon);

    //textual description of weather
    $("#weather-description").text(response.weather[0].main);
    console.log(response.weather[0].main)

    //other data
   	console.log("Wind Speed: " + response.wind.speed);
    console.log("Wind Direction: " + response.wind.deg);

}); //end ajax.done
