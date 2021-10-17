searchButtonEl = document.getElementById("searchbutton");
cityHistoryEl = document.getElementById("cityhistory");
cityNameEl = document.getElementById("cityname");
temperatureEl = document.getElementById("temperature");
humidityEl = document.getElementById("humidity");
windEl = document.getElementById("wind");
uvindexEl = document.getElementById("uvindex");
forecastBodyEl = document.getElementById("5forecast");
searchedCityEl = document.getElementById("currentcity");
upcomingDay1El = document.getElementById("upcomingday1");
temperature1El = document.getElementById("temperature1");
humidity1El = document.getElementById("humidity1");
wind1El = document.getElementById("wind1");
upcomingDay2El = document.getElementById("upcomingday2");
temperature2El = document.getElementById("temperature2");
humidity2El = document.getElementById("humidity2");
wind2El = document.getElementById("wind2");
upcomingDay3El = document.getElementById("upcomingday3");
temperature3El = document.getElementById("temperature3");
humidity3El = document.getElementById("humidity3");
wind3El = document.getElementById("wind3");
upcomingDay4El = document.getElementById("upcomingday4");
temperature4El = document.getElementById("temperature4");
humidity4El = document.getElementById("humidity4");
wind4El = document.getElementById("wind4");
upcomingDay5El = document.getElementById("upcomingday5");
temperature5El = document.getElementById("temperature5");
humidity5El = document.getElementById("humidity5");
wind5El = document.getElementById("wind5");
todayEl = document.getElementById("today");
day1El = document.getElementById("day1");
day2El = document.getElementById("day2");
day3El = document.getElementById("day3");
day4El = document.getElementById("day4");
day5El = document.getElementById("day5");
nameDivEl = document.getElementById("namediv");
var searchedCities = [];





function weather(cityname){
    var apiKey = "d97492f6728a5e2faeaebeba5d577ddf";
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=" + apiKey;
    fetch(apiUrl).then(function(response){
        if(response.ok){
            response.json().then(function(response) {
                console.log(response);
                var weatherIconEl = document.createElement("img");
                weatherIconEl.setAttribute("src", "https://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png");
                nameDivEl.append(weatherIconEl);
                cityNameEl.textContent = searchedCityEl.value ;
                todayEl.textContent = moment().format("MMM Do YY");
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
                        if (response.current.uvi < 5){
                            uvindexEl.classList.add("bg-success")
                        }
                        else if(response.current.uvi >= 5 && response.current.uvi < 10){
                            uvindexEl.classList.add("bg-warning")
                        }
                        else{
                            uvindexEl.classList.add("bg-danger")
                        }
                    })
                })
                var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityname + "&units=imperial" + "&appid=" + apiKey;
                fetch(forecastUrl).then(function(response){
                        response.json().then(function(response){
                            // console.log(response);
                            var weatherIcon1El = document.createElement("img");
                            weatherIcon1El.setAttribute("src", "https://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + "@2x.png");
                            day1El.append(weatherIcon1El);
                            upcomingDay1El.textContent =  (moment().add(1, "days").format("MMM Do YY"));
                            temperature1El.textContent =  response.list[0].main.temp;
                            humidity1El.textContent = response.list[0].main.humidity;
                            wind1El.textContent =  response.list[0].wind.speed;
                            var weatherIcon2El = document.createElement("img");
                            weatherIcon2El.setAttribute("src", "https://openweathermap.org/img/wn/" + response.list[8].weather[0].icon + "@2x.png");
                            day2El.append(weatherIcon2El);
                            upcomingDay2El.textContent =  (moment().add(2, "days").format("MMM Do YY"));
                            temperature2El.textContent =  response.list[8].main.temp;
                            humidity2El.textContent = response.list[8].main.humidity;
                            wind2El.textContent =  response.list[8].wind.speed;
                            var weatherIcon3El = document.createElement("img");
                            weatherIcon3El.setAttribute("src", "https://openweathermap.org/img/wn/" + response.list[16].weather[0].icon + "@2x.png");
                            day3El.append(weatherIcon3El);
                            upcomingDay3El.textContent =  (moment().add(3, "days").format("MMM Do YY"));
                            temperature3El.textContent =  response.list[16].main.temp;
                            humidity3El.textContent = response.list[16].main.humidity;
                            wind3El.textContent =  response.list[16].wind.speed;
                            var weatherIcon4El = document.createElement("img");
                            weatherIcon4El.setAttribute("src", "https://openweathermap.org/img/wn/" + response.list[24].weather[0].icon + "@2x.png");
                            day4El.append(weatherIcon4El);
                            upcomingDay4El.textContent =  (moment().add(4, "days").format("MMM Do YY"));
                            temperature4El.textContent =  response.list[24].main.temp;
                            humidity4El.textContent = response.list[24].main.humidity;
                            wind4El.textContent =  response.list[24].wind.speed;
                            var weatherIcon5El = document.createElement("img");
                            weatherIcon5El.setAttribute("src", "https://openweathermap.org/img/wn/" + response.list[32].weather[0].icon + "@2x.png");
                            day5El.append(weatherIcon5El);
                            upcomingDay5El.textContent =  (moment().add(5, "days").format("MMM Do YY"));
                            temperature5El.textContent =  response.list[32].main.temp;
                            humidity5El.textContent = response.list[32].main.humidity;
                            wind5El.textContent =  response.list[32].wind.speed;
                        })
                    
                })
              })
            } else {
              alert("enter valid city");
            }
        }
    )
        saveCities();
};

function saveCities(){
    var cityname = searchedCityEl.value;
    searchedCities.push(cityname);
    localStorage.setItem("cities", JSON.stringify(searchedCities));
}

function loadCities(){
   var loadedCities =  JSON.parse(localStorage.getItem("cities"));
   cityHistoryEl.textContent = loadedCities;
   return loadedCities;
}

function tempConversion(i){
     i = (i - 273.15) * 9/5 + 32;
     return Math.floor(i);
    //  console.log(i);
     
}


loadCities();

searchButtonEl.addEventListener("click", function(){
    var cityname = searchedCityEl.value;
    weather(cityname);
});