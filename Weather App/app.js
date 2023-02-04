const bgdiv = document.querySelector(".bgdiv");
const apiKey = "f690b82a876c4e2795a154459230102";


const button1 = document.querySelectorAll("button")[0];
const card1 = document.querySelector(".card1");
const cityInput1 = document.querySelector(".city-input1");
button1.onclick = showCity1;
const city1 = document.querySelector(".city1");
const temp1 = document.querySelector(".temp1");
const icon1 = document.getElementById("icon1");
const imagecity1 = document.querySelector(".imagecity1");

 function showCity1 () {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput1.value}`)
    .then((response) => response.json())
    .then(function (data) {
        console.log(data.location);
        console.log(data.current);
        city1.innerHTML = data.location.name;
        temp1.innerHTML = data.current.temp_c + "ºC";
        icon1.src = data.current.condition.icon;
    
    });

    fetch(`https://api.unsplash.com/search/photos?&query=${cityInput1.value}`)
    .then((response) => response.json())
    .then(function (data) {
        const api = data;
        const image = api["results"].map(result => result.urls.full);
        console.log(image)

       
        
        // imagecity1.src = array.links.html;
        
    });
}


const button2 = document.querySelectorAll("button")[1];
const card2 = document.querySelector(".card1");
const cityInput2 = document.querySelector(".city-input2");
button2.onclick = showCity2;
const city2 = document.querySelector(".city2");
const temp2 = document.querySelector(".temp2");
const icon2 = document.getElementById("icon2");


function showCity2 () {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput2.value}`)
    .then((response) => response.json())
    .then(function (data) {
        console.log(data.location);
        console.log(data.current);
        city2.innerHTML = data.location.name;
        temp2.innerHTML = data.current.temp_c + "ºC";
        icon2.src = data.current.condition.icon;

    
    });
}


const button3 = document.querySelectorAll("button")[2];
const card3 = document.querySelector(".card2");
const cityInput3 = document.querySelector(".city-input3");
button3.onclick = showCity3;
const city3 = document.querySelector(".city3");
const temp3 = document.querySelector(".temp3");
const icon3 = document.getElementById("icon3");


function showCity3 () {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput3.value}`)
    .then((response) => response.json())
    .then(function (data) {
        console.log(data.location);
        console.log(data.current);
        city3.innerHTML = data.location.name;
        temp3.innerHTML = data.current.temp_c + "ºC";
        icon3.src = data.current.condition.icon;
    
    });
}








    // fetch()
    // .then((response) => response.json())
    // .then(function(data1) {
    //     console.log(data1);
    // })


// card1.addEventListener("onclick", showCity);

// card1.addEventListener("submit", (event) => {
//     event.preventDefault();
//     fetch(
//         `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput.value}`
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           console.log(data);
//         //   city.innerText = data.location.name;
//         //   icon.src = data.current.condition.icon;
//         //   condition.innerText = data.current.condition.text;
//         //   temp.innerText = data.current.temp_c + "°C";
//         })
//         .catch((err) => console.error(err));
//     });