searchButtonEl = document.getElementById("searchbutton");
cityHistoryEl = document.getElementById("cityhistory");
cityNameEl = document.getElementById("cityname");
temperatureEl = document.getElementById("temperature");
humidityEl = document.getElementById("humidity");
windEl = document.getElementById("wind");
uvindexEl = document.getElementById("uvindex");
forecastBody = document.getElementById("5forecast");
searchedCityEl = document.getElementById("currentcity");



function weather(cityname){
    var apiKey = "d97492f6728a5e2faeaebeba5d577ddf";
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=" + apiKey;
    fetch(apiUrl).then(function(response){
        if(response.ok){
            response.json().then(function(response) {
                console.log(response);
              })
            } else {
              alert("enter valid city");
            }
        }
    )

};





searchButtonEl.addEventListener("click", function(){
    var cityname = searchedCityEl.value;
    weather(cityname);
});