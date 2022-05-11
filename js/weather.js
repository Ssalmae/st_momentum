const API_KEY = "63684bdf6b58ed573148a3ffbed1e0aa";

function weather(a) {
  const lat = a.coords.latitude;
  const lng = a.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather div:first-child");
      const city = document.querySelector(".weather div:last-child");
      city.innerText = `${data.name}`;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function error() {
  alert("위치를 확인할 수 없습니다.");
}
navigator.geolocation.getCurrentPosition(weather, error);
