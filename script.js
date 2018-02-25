(function test() {

    var url = "http://api.openweathermap.org/data/2.5/weather?q=";
    var apiKey = "fa5eef97bb9e490945ff17431cd3c209";

    var btn = document.querySelector(".show-weather");

    btn.addEventListener("click", function (event) {
        event.preventDefault();
        sendRequest();
    }, false);

    document.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
            sendRequest();
        }
    }, false);

    function sendRequest() {

        var location = document.querySelector("#location").value;

        document.querySelector("#location").value = "";
        
        document.querySelector("#location").focus();
        document.querySelector("#location").addEventListener("blur", clearError);

        if (!location) {
            document.querySelector(".weather-error").textContent = "Please enter location";
            document.querySelector(".weather-result").textContent = "";
            return;
        }

        clearError();
        
        fetch(url + location + "&appid=" + apiKey).then(function (response) {
            return (response.json());
        }).then(function (response) {
            updateUISuccess(response);
        }).catch(function () {
            handleError();
        });

        document.querySelector(".weather-result").textContent = "";   
    }


    function updateUISuccess(response) {

        var cityName = response.name;
        var degC = response.main.temp - 272.15;
        var degCInt = Math.floor(degC);
        var condition = response.weather[0].main;
        var icon = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
        var windSpeed = response.wind.speed;

        var weatherResult = document.querySelector(".weather-result");
        
        var container = document.createElement("div");
        var cityInfo = document.createElement("p");
        var temperature = document.createElement("p");
        var windInfo = document.createElement("p");
        var iconImg = document.createElement("img");

        temperature.textContent = degCInt + "\u00B0 C";
        cityInfo.textContent = cityName;
        windInfo.textContent = "wind speed: " + windSpeed + " m/s";
        iconImg.setAttribute("src", icon);
        iconImg.setAttribute("alt", condition);
        cityInfo.appendChild(iconImg);
        container.appendChild(cityInfo);
        container.appendChild(temperature);
        container.appendChild(windInfo);

        weatherResult.appendChild(container);

    }

    function handleError(location) {

        document.querySelector(".weather-error").textContent = "Weather information unavailable!";
    }

    function clearError() {

        document.querySelector(".weather-error").textContent = "";
    }

})();
