import { UI } from "../src/ui-scripts"
import { weatherPull } from "../src/weather-scripts";

const searchOne = document.getElementById("leftSearchForm")

searchOne.addEventListener("submit", e => {
    e.preventDefault();
    const leftSearchValue = document.getElementById("leftSearch").value;
    weatherPull.loadWeatherData(leftSearchValue);

    searchOne.reset();
})

console.log(UI.appendSideToID("left", "right"))



