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
iconEl = document.getElementById("icon");
icon1El = document.getElementById("icon1");
icon2El = document.getElementById("icon2");
icon3El = document.getElementById("icon3");
icon4El = document.getElementById("icon4");
icon5El = document.getElementById("icon5");
var searchedCities = JSON.parse(localStorage.getItem("cities")) || [];





function weather(cityname){
    var apiKey = "d97492f6728a5e2faeaebeba5d577ddf";
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=" + apiKey;
    fetch(apiUrl).then(function(response){
        if(response.ok){
            response.json().then(function(response) {
                console.log(response);
                // event.preventDefault();
                var weatherIconEl = document.createElement("img");
                weatherIconEl.setAttribute("src", "https://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png");
                iconEl.innerHTML = "";
                iconEl.append(weatherIconEl);
                // nameDivEl.append(weatherIconEl);
                cityNameEl.textContent = response.name ;
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
                            icon1El.innerHTML = "";
                            icon1El.append(weatherIcon1El);
                            // day1El.append(weatherIcon1El);
                            upcomingDay1El.textContent =  (moment().add(1, "days").format("MMM Do YY"));
                            temperature1El.textContent = "Temperature: " + response.list[0].main.temp + "F";
                            humidity1El.textContent = "Humidity: " + response.list[0].main.humidity + "%";
                            wind1El.textContent =  "Wind: " + response.list[0].wind.speed + "MPH";
                            var weatherIcon2El = document.createElement("img");
                            weatherIcon2El.setAttribute("src", "https://openweathermap.org/img/wn/" + response.list[8].weather[0].icon + "@2x.png");
                            icon2El.innerHTML = "";
                            icon2El.append(weatherIcon2El);
                            // day2El.append(weatherIcon2El);
                            upcomingDay2El.textContent =  (moment().add(2, "days").format("MMM Do YY"));
                            temperature2El.textContent = "Temperature: " + response.list[8].main.temp + "F";
                            humidity2El.textContent = "Humidity: " + response.list[8].main.humidity + "%";
                            wind2El.textContent = "Wind: " + response.list[8].wind.speed + "MPH";
                            var weatherIcon3El = document.createElement("img");
                            weatherIcon3El.setAttribute("src", "https://openweathermap.org/img/wn/" + response.list[16].weather[0].icon + "@2x.png");
                            icon3El.innerHTML = "";
                            icon3El.append(weatherIcon3El);
                            // day3El.append(weatherIcon3El);
                            upcomingDay3El.textContent =  (moment().add(3, "days").format("MMM Do YY"));
                            temperature3El.textContent = "Temperature: " +  response.list[16].main.temp + "F" ;
                            humidity3El.textContent = "Humidity: " + response.list[16].main.humidity + "%";
                            wind3El.textContent = "Wind: " + response.list[16].wind.speed + "MPH";
                            var weatherIcon4El = document.createElement("img");
                            weatherIcon4El.setAttribute("src", "https://openweathermap.org/img/wn/" + response.list[24].weather[0].icon + "@2x.png");
                            icon4El.innerHTML = "";
                            icon4El.append(weatherIcon4El);
                            // day4El.append(weatherIcon4El);
                            upcomingDay4El.textContent =  (moment().add(4, "days").format("MMM Do YY"));
                            temperature4El.textContent = "Temperature: " + response.list[24].main.temp + "F";
                            humidity4El.textContent = "Humidity: " + response.list[24].main.humidity + "%";
                            wind4El.textContent = "Wind: " + response.list[24].wind.speed + "MPH";
                            var weatherIcon5El = document.createElement("img");
                            weatherIcon5El.setAttribute("src", "https://openweathermap.org/img/wn/" + response.list[32].weather[0].icon + "@2x.png");
                            icon5El.innerHTML = "";
                            icon5El.append(weatherIcon5El);
                            // day5El.append(weatherIcon5El);
                            upcomingDay5El.textContent =  (moment().add(5, "days").format("MMM Do YY"));
                            temperature5El.textContent = "Temperature: " + response.list[32].main.temp + "F";
                            humidity5El.textContent = "Humidity: " + response.list[32].main.humidity + "%";
                            wind5El.textContent = "Wind: " + response.list[32].wind.speed + "MPH";
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
    if (searchedCities.indexOf(cityname)===-1){
    searchedCities.push(cityname);
    localStorage.setItem("cities", JSON.stringify(searchedCities));
    }
    loadCities();
    return searchedCities.value;
    
    

}

function loadCities(){
    cityHistoryEl.innerHTML = "";
    var loadCities =   JSON.parse(localStorage.getItem("cities")) || [];
    // if(loadCities.length !==0){
    for (let i = 0; i < loadCities.length; i++) {
        
        var city = loadCities[i];
        
    
    var searchedHistoryEl = document.createElement("button");
    // searchedHistoryEl.classList.add("col-12");
    // searchedHistoryEl.setAttribute("type", "text");
    // searchedHistoryEl.setAttribute("readonly", true);
    searchedHistoryEl.setAttribute("value", loadCities[i]);
    searchedHistoryEl.textContent = city;
    searchedHistoryEl.addEventListener("click", function(event){
        cityNameEl.innerHTML = "";
        weather(loadCities[i]);
        event.preventDefault();
        
    })
//    var loadedCities =  JSON.parse(localStorage.getItem("cities"));
    // searchedHistoryEl = JSON.parse(localStorage.getItem("cities"));
   
   cityHistoryEl.append(searchedHistoryEl);
    // }}
    // else{
    //     searchButtonEl.addEventListener("click", function(){
    //         var cityname = searchedCityEl.value;
    //         weather(cityname);
    // })
}
//    return loadedCities;

}
function tempConversion(i){
     i = (i - 273.15) * 9/5 + 32;
     return Math.floor(i);
    //  console.log(i);
     
}
function showHistory(){
    var loadCities =   JSON.parse(localStorage.getItem("cities")) || [];
    for (let i = 0; i < loadCities.length; i++){
        loadCities.innerHTML= "li";
        loadCities.setAttribute("value", loadCities[i])
        cityHistoryEl.append(loadcities[i]);
    }
    
    cityHistoryEl.textContent = loadCities;
}
// showHistory();

loadCities();

searchButtonEl.addEventListener("click", function(){
    var cityname = searchedCityEl.value;
    weather(cityname);
});