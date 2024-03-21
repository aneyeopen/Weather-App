import { weatherPull } from "../src/weather-scripts";
import { UI } from "../src/ui-scripts";

const searchOne = document.getElementById("leftSearchForm")

searchOne.addEventListener("submit", e => {
    e.preventDefault();
    UI.checkSide("left");
    const leftSearchValue = document.getElementById("leftSearch").value;
    weatherPull.loadWeatherData(leftSearchValue);

    searchOne.reset();
})


const searchTwo = document.getElementById("rightSearchForm")

searchTwo.addEventListener("submit", e => {
    e.preventDefault();
    UI.checkSide("right");
    const rightSearchValue = document.getElementById("rightSearch").value;
    weatherPull.loadWeatherData(rightSearchValue);

    searchTwo.reset();
});


