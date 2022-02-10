var dateElement = document.getElementById("date");
var locationElement = document.getElementById("location");
var tempElement = document.getElementById("temp");
var weatherElement = document.getElementById("weather");
var searchBar = document.getElementById("search-bar");

const variables = {
  api_key: "53378ee977b0303b6607dd81e9c50a3b",
  url_base: "https://api.openweathermap.org/data/2.5/",
};

function onClickSearch(keyEvent) {
  if (keyEvent.key == "Enter") {
    fetchWeather();
  }
}

function fetchWeather() {
  fetch(
    `${variables.url_base}weather?q=${searchBar.value}&units=metric&APPID=${variables.api_key}`
  )
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      dateElement.innerHTML = new Date().toDateString();
      locationElement.innerText = data.name;
      tempElement.innerText = `${data.main.temp} C`;
      weatherElement.innerText = data.weather[0].main;
      if (data.main.temp > 23) {
        document.getElementById("app").classList.add("warm");
      } else {
        document.getElementById("app").classList.remove("warm");
      }
    });
}

document.addEventListener("keyup", onClickSearch);

fetchWeather();
