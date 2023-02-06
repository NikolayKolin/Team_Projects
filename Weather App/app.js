const pageBody = document.getElementById('body');
const locationInput = document.getElementById('kwInput'); 
const btnSearch = document.getElementById('search');
const weatherDataDisplay = document.querySelector(".weather-data-display");



//Unsplash Access key: JtECctEnv9CeQ3oKHDu9OYPfArTvccyjcfWyryqpEtc
// Parameter: location[name] , location[city] , location[country]


btnSearch.addEventListener('click', function (){
    
    let locationName = locationInput.value + ' landmark';
    fetch(`https://api.unsplash.com/search/photos?&query=${locationName}`, {
        headers: {
            Authorization: `Client-ID JtECctEnv9CeQ3oKHDu9OYPfArTvccyjcfWyryqpEtc`
        }
    })
    .then(response => response.json())
    .then(data => {
        const api = data;
        const image = api["results"].map(result => result.urls.full); 
    // do something with the data returned from the API
        pageBody.style.backgroundImage = `url('${image})`;
        pageBody.style.backgroundSize = '30%'; 

        
    
  })
  .catch(error => {
    // handle any errors that may occur during the request
    console.error(error);
  });

  let weatherLocation = locationInput.value;
  

  fetch(`https://api.weatherapi.com/v1/current.json?key=268adccf869e46f7a02225103230302&q=${weatherLocation}`)
  .then(response => response.json())
  .then(data => {
    const weatherData = data.current;
    const conditionIcon = data.current.condition.icon;
    console.log(data)
    const weatherDataDisplay = document.createElement("div");
    
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.href = `https://${weatherData.condition.icon}`;
    link.rel = "shortcut icon";
    link.type = "image/png";
    document.head.appendChild(link);

    
    weatherDataDisplay.innerHTML = `<div class="weather-data-display">
                                        <i class="fas fa-thermometer-half fa-2x"></i>
                                        <p class="tempC">Temperature: ${weatherData.temp_c}°C</p>
                                     </div>
                                     <div class="weather-data-display">
                                        <i class="fas fa-thermometer-three-quarters fa-2x"></i>
                                        <p class="tempFeels">Feels Like: ${weatherData.feelslike_c}°C</p>
                                     </div>
                                     <div class="weather-data-display">
                                        <img src="https://${weatherData.condition.icon}"/>
                                        <p>Condition: ${weatherData.condition.text}</p>
                                     </div>`;
    weatherDataDisplay.classList.add("weather-data-container");
    locationInput.before(weatherDataDisplay);

    let switchButton = document.createElement("button");
    switchButton.innerHTML = "Switch to Fahrenheit";
    switchButton.classList.add("switch-button");
    weatherDataDisplay.appendChild(switchButton);

    // Add an event listener to the switch button
    switchButton.addEventListener("click", function() {
      let temperature = weatherDataDisplay.querySelector(".tempC");
      let feelsLike = weatherDataDisplay.querySelector(".tempFeels");
      if (switchButton.innerHTML === "Switch to Fahrenheit") {
        temperature.innerHTML = `Temperature: ${(weatherData.temp_f)}°F`;
        feelsLike.innerHTML = `Feels Like: ${(weatherData.feelslike_f)}°F`;
        switchButton.innerHTML = "Switch to Celsius";
      } else {
        temperature.innerHTML = `Temperature: ${weatherData.temp_c}°C`;
        feelsLike.innerHTML = `Feels Like: ${weatherData.feelslike_c}°C`;
        switchButton.innerHTML = "Switch to Fahrenheit";
      }
    });



  })
  .catch(error => {
    console.error(error);
  });

  

  fetch(`https://api.weatherapi.com/v1/forecast.json?key=268adccf869e46f7a02225103230302&q=${weatherLocation}&days=5`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const weatherForecast = data.forecast.forecastday;

    const weatherForecastDisplay = document.createElement("div");
    weatherForecastDisplay.classList.add("weather-forecast-container");

    weatherForecast.forEach(day => {
      weatherForecastDisplay.innerHTML += `
        <div class="weather-forecast-display">
          <p class="day">${day.date}</p>
          <img src="https://${day.day.condition.icon}"/>
          <p class="condition">${day.day.condition.text}</p>
          <p class="tempMaxC">Max Temp: ${day.day.maxtemp_c}°C</p>
          <p class="tempMinC">Min Temp: ${day.day.mintemp_c}°C</p>
        </div>
      `;
    });

    document.body.appendChild(weatherForecastDisplay);

    const weatherDataDisplay = document.querySelector(".weather-data");
    if (weatherDataDisplay) {
      weatherDataDisplay.before(weatherForecastDisplay);
    }
  })
  .catch(error => {
    console.error(error);
  });

  


});


