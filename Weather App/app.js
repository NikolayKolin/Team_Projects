const pageBody = document.getElementById('body');
const locationInput = document.getElementById('kwInput'); 
const btnSearch = document.getElementById('search');

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
        pageBody.style.backgroundSize = '45%'; 

        
    
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
   /*  console.log(weatherData) */
    const weatherDataDisplay = document.createElement("div");
    weatherDataDisplay.innerHTML = `<div class="weather-data-display">
                                        <i class="fas fa-thermometer-half fa-2x"></i>
                                        <p>Temperature: ${weatherData.temp_c}°C</p>
                                     </div>
                                     <div class="weather-data-display">
                                        <i class="fas fa-thermometer-three-quarters fa-2x"></i>
                                        <p>Feels Like: ${weatherData.feelslike_c}°C</p>
                                     </div>
                                     <div class="weather-data-display">
                                        <i class="fas fa-cloud fa-2x"></i>
                                        <p>Condition: ${weatherData.condition.text}</p>
                                     </div>`;
    weatherDataDisplay.classList.add("weather-data-container");
    locationInput.before(weatherDataDisplay);
  })
  .catch(error => {
    console.error(error);
  });
});


  
// next steps