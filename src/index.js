
import { weatherPull } from "../src/weather-scripts";

const searchOne = document.getElementById("leftSearchForm")

searchOne.addEventListener("submit", e => {
    e.preventDefault();
    const leftSearchValue = document.getElementById("leftSearch").value;
    console.log(leftSearchValue);
    weatherPull.pullWeatherData(leftSearchValue);
    searchOne.reset();
})

console.log("fart")



