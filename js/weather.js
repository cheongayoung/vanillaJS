
const API_KEY='508b556f148ab945ee3534dc8cf08986';

function OnGeoOk (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    fetch(url)
    .then(response => response.json()
    .then(date => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
       city.innerText = date.name; 
       weather.innerText = date.weather[0].main;
    })); //섭씨 온도 변경 -- > url&units=metric
}

function OnGeoError () {
  alert("Can't find you. No weather for you.");
}



navigator.geolocation.getCurrentPosition(OnGeoOk, OnGeoError);