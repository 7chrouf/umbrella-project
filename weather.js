let cityName = document.querySelector("#city");
let temperature = document.querySelector("h2");
let desc = document.querySelector(".description");
document.addEventListener("DOMContentLoaded", (event) => {
  axios
    .get(
      "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=75bd522a9f927ad1088de5e73a134220&units=metric"
    )
    .then((res) => {
      console.log(res.data);
      cityName.textContent = res.data.name;
      temperature.textContent = Math.round(res.data.main.temp) + "°c";
      desc.textContent = res.data.weather[0].main;
    })

    .catch((err) => console.log(err));
});
