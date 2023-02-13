let body = document.body;
let pageContainer2 = document.createElement('div');
pageContainer2.classList.add('page-container2');
body.appendChild(pageContainer2);

let divCard1 = document.createElement('div');
divCard1.classList.add('card1', 'card');
divCard1.innerHTML = `
<div class="cardflex1">  
  <h2 class="city1"></h2>
  <img class="imagecity1 imagecity">
</div>
<div class="cardflex2">
  <p class="temp1"></p><img id="icon1">
</div>
<div class="cardflex3">
  <input type="text" required="required" class="city-input1"><button class="searchbtn1">Search</button><button class="showMore1" style="visibility: hidden;">+</button>
</div>`;

let divCard2 = document.createElement('div');
divCard2.classList.add('card2', 'card');
divCard2.innerHTML = `
<div class="cardflex1">
  <h2 class="city2"></h2>
  <img class="imagecity2 imagecity">
</div>
<div class="cardflex2">
  <p class="temp2"></p><img id="icon2">
</div>
<div class="cardflex3">
  <input type="text" required="required" class="city-input2"><button class="searchbtn2">Search</button><button class="showMore2" style="visibility: hidden;">+</button>
</div>`;

let divCard3 = document.createElement('div');
divCard3.classList.add('card3', 'card');
divCard3.innerHTML = `<a class="back-to-index" href="./index.html">Back to the Index</a>
<div class="cardflex1">
  <h2 class="city3"></h2>
  <img class="imagecity3 imagecity">
</div>
<div class="cardflex2">
  <p class="temp3"></p><img id="icon3">
</div>
<div class="cardflex3">
  <input type="text" required="required" class="city-input3"><button class="searchbtn3">Search</button><button class="showMore3" style="visibility: hidden;">+</button>
</div>`;

pageContainer2.appendChild(divCard1);
pageContainer2.appendChild(divCard2);
pageContainer2.appendChild(divCard3);

const apiKey = "f690b82a876c4e2795a154459230102";

const searchbtn1 = document.querySelector(".searchbtn1");
searchbtn1.onclick = showCity1;
const card1 = document.querySelector(".card1");
const cityInput1 = document.querySelector(".city-input1");
const city1 = document.querySelector(".city1");
const temp1 = document.querySelector(".temp1");
const icon1 = document.getElementById("icon1");
const imagecity1 = document.querySelector(".imagecity1");
const showMore1 = document.querySelector(".showMore1");
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
        imagecity1.src = image;
    });
}

let divCard4 = document.createElement('div');
divCard4.classList.add('card4');
divCard4.innerHTML = `<h2>Upcoming forecast in: ${cityInput1.value}</h2>
<p>What about the few next days?</p>
<button class="submitDate1">Click to see the forecast</button>
<div><button class="changeToC1">Change to Celsius</button><button class="changeToF1">Change to Farhenheit</button><button class="resetbtn1">&#8635</button></div>
<div class="forecastflex">
 <div class="divborder1"><p class="day"></p><img class="icon"></div>
 <div class="divborder1"><p class="day"></p><img class="icon"></div>
 <div class="divborder1"><p class="day"></p><img class="icon"></div>
 <div class="divborder1"><p class="day"></p><img class="icon"></div>
 <div class="divborder1"><p class="day"></p><img class="icon"></div>
 <div class="divborder1"><p class="day"></p><img class="icon"></div>
 <div class="divborder1"><p class="day"></p><img class="icon"></div>
 <div class="divborder1"><p class="day"></p><img class="icon"></div>
</div>`;

function showfuture1() {
    pageContainer2.replaceChild(divCard4, divCard1);
    let submitDate1 = document.querySelector(".submitDate1");
    submitDate1.onclick = showfutureforecastC1;
    let day = document.getElementsByClassName("day");
    let img = document.getElementsByClassName("icon");
    let buttonToC1 = document.querySelector(".changeToC1");
    let buttonToF1 = document.querySelector(".changeToF1");
    let resetbtn1 = document.querySelector(".resetbtn1");
    resetbtn1.style.visibility = 'hidden';
    buttonToC1.style.visibility = 'hidden';
    buttonToF1.style.visibility = 'hidden';
    buttonToF1.onclick = showfutureforecastF1;
    buttonToC1.onclick = showfutureforecastC1;
    let divborders = document.getElementsByClassName('divborder1');
    for(let i = 0; i < divborders.length; i++ ){
    day[i].innerHTML = '';
    img[i].src = '';
    }

    resetbtn1.addEventListener("click", () => {
        pageContainer2.replaceChild(divCard1, divCard4);
        city1.innerHTML = '';
        temp1.innerHTML = '';
        icon1.src = '';
        showMore1.style.visibility = 'hidden';
        cityInput1.value = '';
        imagecity1.src = '';
    });

    function showfutureforecastC1 () {
        for (let i = 0; i <= 7; i++) {
         fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityInput1.value}&days=8&aqi=no&alerts=no`)
         .then(response => response.json())
         .then(data => {
             console.log(data.forecast.forecastday);
             const api = data.forecast.forecastday;
             const test = api[i].day;
             day[i].innerHTML = `|${i}| MaxT: ${test.maxtemp_c}ºC // MinT: ${test.mintemp_c}ºC`;
             img[i].src = test.condition.icon;
            })
        
        };
        buttonToF1.style.visibility = 'visible';
        buttonToC1.style.visibility = 'hidden';
        resetbtn1.style.visibility = 'visible';
        
    };

    function showfutureforecastF1 () {
        for (let i = 0; i <= 7; i++) {
         fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityInput1.value}&days=8&aqi=no&alerts=no`)
         .then(response => response.json())
         .then(data => {
             console.log(data.forecast.forecastday);
             const api = data.forecast.forecastday;
             const test = api[i].day;
             day[i].innerHTML = `|${i}| MaxT: ${test.maxtemp_f}ºF // MinT: ${test.mintemp_f}ºF`;
             img[i].src = test.condition.icon;
            })
        };
        buttonToF1.style.visibility = 'hidden';
        buttonToC1.style.visibility = 'visible';
        
    };
}


const searchbtn2 = document.querySelector(".searchbtn2");
searchbtn2.onclick = showCity2;
let card2 = document.querySelector(".card2");
const cityInput2 = document.querySelector(".city-input2");
const city2 = document.querySelector(".city2");
const temp2 = document.querySelector(".temp2");
const icon2 = document.getElementById("icon2");
const imagecity2 = document.querySelector(".imagecity2");
const showMore2 = document.querySelector(".showMore2");
showMore2.onclick = showfuture2;


function showCity2 () {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput2.value}`)
    .then((response) => response.json())
    .then(function (data) {
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

let divCard5 = document.createElement('div');
divCard5.classList.add('card5');
divCard5.innerHTML = `<h2>Upcoming forecast in: ${cityInput2.value}</h2>
<p>What about the few next days?</p>
<button class="submitDate2">Click to see the forecast</button>
<div><button class="changeToC2">Change to Celsius</button><button class="changeToF2">Change to Farhenheit</button><button class="resetbtn2">&#8635</button><div>
<div class="forecastflex">
 <div class="divborder2"><p class="day2"></p><img class="icon2"></div>
 <div class="divborder2"><p class="day2"></p><img class="icon2"></div>
 <div class="divborder2"><p class="day2"></p><img class="icon2"></div>
 <div class="divborder2"><p class="day2"></p><img class="icon2"></div>
 <div class="divborder2"><p class="day2"></p><img class="icon2"></div>
 <div class="divborder2"><p class="day2"></p><img class="icon2"></div>
 <div class="divborder2"><p class="day2"></p><img class="icon2"></div>
 <div class="divborder2"><p class="day2"></p><img class="icon2"></div>
</div>`;

function showfuture2() {
    pageContainer2.replaceChild(divCard5, divCard2);
    let submitDate2 = document.querySelector(".submitDate2");
    submitDate2.onclick = showfutureforecastC2;
    let day2 = document.getElementsByClassName("day2");
    let img2 = document.getElementsByClassName("icon2");
    let buttonToC2 = document.querySelector(".changeToC2");
    let buttonToF2 = document.querySelector(".changeToF2");
    let resetbtn2 = document.querySelector(".resetbtn2");
    resetbtn2.style.visibility = 'hidden';
    buttonToC2.style.visibility = 'hidden';
    buttonToF2.style.visibility = 'hidden';
    buttonToF2.onclick = showfutureforecastF2;
    buttonToC2.onclick = showfutureforecastC2;
    let divborders2 = document.getElementsByClassName('divborder2');
    for(let i = 0; i < divborders2.length; i++ ){
    day2[i].innerHTML = '';
    img2[i].src = '';
    }
        
    resetbtn2.addEventListener("click", () => {
        pageContainer2.replaceChild(divCard2, divCard5);
        city2.innerHTML = '';
        temp2.innerHTML = '';
        icon2.src = '';
        showMore2.style.visibility = 'hidden';
        cityInput2.value = '';
        imagecity2.src = '';
    })
    

    function showfutureforecastC2 () {
        for (let i = 0; i <= 7; i++) {
         fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityInput2.value}&days=8&aqi=no&alerts=no`)
         .then(response => response.json())
         .then(data => {
             console.log(data.forecast.forecastday);
             const api = data.forecast.forecastday;
             const test = api[i].day;
             day2[i].innerHTML = `Max. T: ${test.maxtemp_c}ºC // Min.T: ${test.mintemp_c}ºC`;
             img2[i].src = test.condition.icon;
            })
        };
        buttonToF2.style.visibility = 'visible';
        buttonToC2.style.visibility = 'hidden';
        resetbtn2.style.visibility = 'visible';
        
    };

    function showfutureforecastF2 () {
        for (let i = 0; i <= 7; i++) {
         fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityInput2.value}&days=8&aqi=no&alerts=no`)
         .then(response => response.json())
         .then(data => {
             console.log(data.forecast.forecastday);
             const api = data.forecast.forecastday;
             const test = api[i].day;
             day2[i].innerHTML = `Max. T: ${test.maxtemp_f}ºF // Min.T: ${test.mintemp_f}ºF`;
             img2[i].src = test.condition.icon;
            })
        };
        buttonToF2.style.visibility = 'hidden';
        buttonToC2.style.visibility = 'visible';
        
    };
}


const searchbtn3 = document.querySelector(".searchbtn3");
searchbtn3.onclick = showCity3;
let card3 = document.querySelector(".card3");
const cityInput3 = document.querySelector(".city-input3");
const city3 = document.querySelector(".city3");
const temp3 = document.querySelector(".temp3");
const icon3 = document.getElementById("icon3");
const imagecity3 = document.querySelector(".imagecity3");
const showMore3 = document.querySelector(".showMore3");
showMore3.onclick = showfuture3;

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

let divCard6 = document.createElement('div');
divCard6.classList.add('card6');
divCard6.innerHTML = `<h2>Upcoming forecast in: ${cityInput3.value}</h2>
<p>What about the few next days?</p>
<button class="submitDate3">Click to see the forecast</button>
<div><button class="changeToC3">Change to Celsius</button><button class="changeToF3">Change to Farhenheit</button><button class="resetbtn3">&#8635</button><div>
<div class="forecastflex">
<div class="divborder3"><p class="day3"></p><img class="icon3"></div>
<div class="divborder3"><p class="day3"></p><img class="icon3"></div>
<div class="divborder3"><p class="day3"></p><img class="icon3"></div>
<div class="divborder3"><p class="day3"></p><img class="icon3"></div>
<div class="divborder3"><p class="day3"></p><img class="icon3"></div>
<div class="divborder3"><p class="day3"></p><img class="icon3"></div>
<div class="divborder3"><p class="day3"></p><img class="icon3"></div>
<div class="divborder3"><p class="day3"></p><img class="icon3"></div>
</div>`

function showfuture3() {
    pageContainer2.replaceChild(divCard6, divCard3);
    let submitDate3 = document.querySelector(".submitDate3");
    submitDate3.onclick = showfutureforecastC3;
    let day3 = document.getElementsByClassName("day3");
    let img3= document.getElementsByClassName("icon3");
    let buttonToC3 = document.querySelector(".changeToC3");
    let buttonToF3 = document.querySelector(".changeToF3");
    let resetbtn3 = document.querySelector(".resetbtn3");
    resetbtn3.style.visibility = 'hidden';
    buttonToC3.style.visibility = 'hidden';
    buttonToF3.style.visibility = 'hidden';
    buttonToF3.onclick = showfutureforecastF3;
    buttonToC3.onclick = showfutureforecastC3;
    let divborders3 = document.getElementsByClassName('divborder3')
    for(let i = 0; i < divborders3.length; i++ ) {
        day3[i].innerHTML = '';
        img3[i].src = '';
    }

    resetbtn3.addEventListener("click", () => {
        pageContainer2.replaceChild(divCard3, divCard6);
        city3.innerHTML = '';
        temp3.innerHTML = '';
        icon3.src = '';
        showMore3.style.visibility = 'hidden';
        cityInput3.value = '';
        imagecity3.src = '';
    })
    
    function showfutureforecastC3 () {
        for (let i = 0; i <= 7; i++) {
         fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityInput3.value}&days=8&aqi=no&alerts=no`)
         .then(response => response.json())
         .then(data => {
             console.log(data.forecast.forecastday);
             const api = data.forecast.forecastday;
             const test = api[i].day;
             day3[i].innerHTML = `Max. T: ${test.maxtemp_c}ºC // Min.T: ${test.mintemp_c}ºC`;
             img3[i].src = test.condition.icon;
            })
        };
        buttonToF3.style.visibility = 'visible';
        buttonToC3.style.visibility = 'hidden';
        resetbtn3.style.visibility = 'visible';
        
    };

    function showfutureforecastF3 () {
        for (let i = 0; i <= 7; i++) {
         fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityInput3.value}&days=8&aqi=no&alerts=no`)
         .then(response => response.json())
         .then(data => {
             console.log(data.forecast.forecastday);
             const api = data.forecast.forecastday;
             const test = api[i].day;
             day3[i].innerHTML = `Max. T: ${test.maxtemp_f}ºF // Min.T: ${test.mintemp_f}ºF`;
             img3[i].src = test.condition.icon;
            })
        };
        buttonToF3.style.visibility = 'hidden';
        buttonToC3.style.visibility = 'visible';
        
    };
}