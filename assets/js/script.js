searchButtonEl = document.getElementById("searchbutton");
cityHistoryEl = document.getElementById("cityhistory");
cityNameEl = document.getElementById("cityname");
temperatureEl = document.getElementById("temperature");
humidityEl = document.getElementById("humidity");
windEl = document.getElementById("wind");
uvindexEl = document.getElementById("uvindex");
forecastBody = document.getElementById("5forecast");
searchedCityEl = document.getElementById("currentcity");
var searchedCities = [];





function weather(cityname){
    var apiKey = "d97492f6728a5e2faeaebeba5d577ddf";
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=" + apiKey;
    fetch(apiUrl).then(function(response){
        if(response.ok){
            response.json().then(function(response) {
                // console.log(response);
                cityNameEl.textContent = searchedCityEl.value;
                temperatureEl.textContent = "Temperature: " + tempConversion(response.main.temp) + "F";
                humidityEl.textContent = "Humidity: " +  response.main.humidity + "%";
                windEl.textContent = "Wind: " + response.wind.speed + "MPH";

                var lat = response.coord.lat;
                var lon = response.coord.lon;
                var uvUrl = "https://api.openweathermap.org/data/2.5/onecall?&lat=" + lat +"&lon=" + lon + "&appid=" + apiKey;
                fetch(uvUrl).then(function(response){
                    response.json().then(function(response){
                        // console.log(response);
                        uvindexEl.textContent = "UV index: " + response.current.uvi;
                    })
                })
              })
            } else {
              alert("enter valid city");
            }
        }
    )

};

function tempConversion(i){
     i = (i - 273.15) * 9/5 + 32;
     return Math.floor(i);
    //  console.log(i);
     
}




searchButtonEl.addEventListener("click", function(){
    var cityname = searchedCityEl.value;
    weather(cityname);
});