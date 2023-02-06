const bgdiv = document.querySelector(".bgdiv");
const apiKey = "f690b82a876c4e2795a154459230102";


const button1 = document.querySelectorAll("button")[0];
let card1 = document.querySelector(".card1");
const cityInput1 = document.querySelector(".city-input1");
button1.onclick = showCity1;
const city1 = document.querySelector(".city1");
const temp1 = document.querySelector(".temp1");
const icon1 = document.getElementById("icon1");
const imagecity1 = document.querySelector(".imagecity1");
const showMore1 = document.querySelectorAll("button")[1];
showMore1.onclick = showfuture1;

 function showCity1 () {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput1.value}`)
    .then((response) => response.json())
    .then(function (data) {
        console.log(data.location);
        console.log(data.current);
        city1.innerHTML = data.location.name;
        temp1.innerHTML = data.current.temp_c + "ºC";
        icon1.src = data.current.condition.icon;
        showMore1.style.visibility = "visible";
    });


    fetch(`https://api.unsplash.com/search/photos?&query=${cityInput1.value}`,
    {headers: {
        Authorization: `Client-ID 5Qmr51RMnX5fI28G-tyrhvGOeXckwDH1kAlGIrzlBB8`
    }
    })
    .then((response) => response.json())
    .then(data =>  {
        const api = data;
        const image = api["results"].map(result => result.urls.full);
        console.log(image);
        imagecity1.src = image;
    });
}

function showfuture1() {
    card1.innerHTML = "";
    card1.innerHTML = `<div class="card4">  
      <h2>Upcoming forecast in: ${cityInput1.value}</h2>
      <p>Please type a date separated with "-" (ex. 1990-02-25):</p>
      <input type="date"  class="inputDate" required="required"><button class="submitDate" onclick="showfutureforecast()">Show</button>
      <table>
      <tr>
        <th>Max Temp</th>
        <th>Min Temp</th>
      </tr>  
      <tr>
        <td class="maxTemp"></td>
        <td class="minTemp"></td>
      </tr>
      <tr>
        <td class="maxTemp"></td>
        <td class="minTemp"></td>
      </tr>
      <tr>
        <td class="maxTemp"></td>
        <td class="minTemp"></td>
      </tr>
      </table>

    </div>
    `;   
    
    function showfutureforecast () {
        let inputDate = document.querySelector(".inputDate");
        let submitDate = document.querySelector(".submitDate");
        let maxTemp1 = document.querySelector(".maxTemp");
        let minTemp1 = document.querySelector(".minTemp");
         fetch(`http://api.weatherapi.com/v1/future.json?key=${apiKey}&q=${cityInput1.value}&dt=${inputDate.value}
         `)
         .then(response => response.json())
         .then(data => {
             console.log(data);
             
             maxTemp1.innerHTML = data.forecast.forecastday[0].day.maxtemp_c;
             minTemp1.innerHTML = data.forecast.forecastday[0].day.mintemp_c;
         });
         console.log(inputDate.value);
     };

    
    
}



function showfutureforecast () {
   let inputDate = document.querySelector(".inputDate");
   let submitDate = document.querySelector(".submitDate");
   let maxTemp1 = document.querySelector(".maxTemp");
   let minTemp1 = document.querySelector(".minTemp");
    fetch(`http://api.weatherapi.com/v1/future.json?key=${apiKey}&q=${cityInput1.value}&dt=${inputDate.value}
    `)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        // maxTemp1.innerHTML = data.forecast.forecastday[0].day.maxtemp_c;
        // minTemp1.innerHTML = data.forecast.forecastday[0].day.mintemp_c;
    });
};


const button2 = document.querySelectorAll("button")[2];
let card2 = document.querySelector(".card1");
const cityInput2 = document.querySelector(".city-input2");
button2.onclick = showCity2;
const city2 = document.querySelector(".city2");
const temp2 = document.querySelector(".temp2");
const icon2 = document.getElementById("icon2");
const imagecity2 = document.querySelector(".imagecity2");
const showMore2 = document.querySelectorAll("button")[3];


function showCity2 () {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput2.value}`)
    .then((response) => response.json())
    .then(function (data) {
        console.log(data.location);
        console.log(data.current);
        city2.innerHTML = data.location.name;
        temp2.innerHTML = data.current.temp_c + "ºC";
        icon2.src = data.current.condition.icon;
        showMore2.style.visibility = "visible";    
    });

    fetch(`https://api.unsplash.com/search/photos?&query=${cityInput2.value}`,
    {headers: {
        Authorization: `Client-ID 5Qmr51RMnX5fI28G-tyrhvGOeXckwDH1kAlGIrzlBB8`
    }
    })
    .then((response) => response.json())
    .then(data =>  {
        const api = data;
        const image = api["results"].map(result => result.urls.full);
        console.log(image);
        imagecity2.src = image;
    });
}


const button3 = document.querySelectorAll("button")[4];
let card3 = document.querySelector(".card2");
const cityInput3 = document.querySelector(".city-input3");
button3.onclick = showCity3;
const city3 = document.querySelector(".city3");
const temp3 = document.querySelector(".temp3");
const icon3 = document.getElementById("icon3");
const imagecity3 = document.querySelector(".imagecity3");
const showMore3 = document.querySelectorAll("button")[5];


function showCity3 () {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput3.value}`)
    .then((response) => response.json())
    .then(function (data) {
        console.log(data.location);
        console.log(data.current);
        city3.innerHTML = data.location.name;
        temp3.innerHTML = data.current.temp_c + "ºC";
        icon3.src = data.current.condition.icon;
        showMore3.style.visibility = "visible";
    });

    fetch(`https://api.unsplash.com/search/photos?&query=${cityInput3.value}`,
    {headers: {
        Authorization: `Client-ID 5Qmr51RMnX5fI28G-tyrhvGOeXckwDH1kAlGIrzlBB8`
    }
    })
    .then((response) => response.json())
    .then(data =>  {
        const api = data;
        const image = api["results"].map(result => result.urls.full);
        console.log(image);
        imagecity3.src = image;        
    });
}