import { format, addDays } from "date-fns";
import { weatherPull } from "./weather-scripts";

export const UI = (() => {
    
    const currSideString = "left";
    const date = new Date();
    const datePlusOne = addDays(date, 1);
    const datePlusTwo = addDays(date, 2);

    
    function appendSideToID(sideString, idString) {
        return sideString + idString
    }

    const displayLogic = {
        // main form //
        description: document.getElementById(appendSideToID(currSideString, "Desc")),
        city: document.getElementById(appendSideToID(currSideString, "City")),
        date: document.getElementById(appendSideToID(currSideString, "Date")),
        time: document.getElementById(appendSideToID(currSideString, "Time")),
        temperature: document.getElementById(appendSideToID(currSideString, "Temp")),
        icon: document.getElementById(appendSideToID(currSideString, "Icon")),

        // stats //

        statsFeelsLike: document.getElementById(appendSideToID(currSideString, "FeelsLike")),
        statsHumidity: document.getElementById(appendSideToID(currSideString, "Humidity")),
        statsChanceOfRain: document.getElementById(appendSideToID(currSideString, "ChanceOfRain")),
        statsWindSpeed: document.getElementById(appendSideToID(currSideString, "WindSpeed")),

        // forecast //

        forecastDayPlusOneDay: document.getElementById(appendSideToID(currSideString, "DayPlusOneDay")),
        forecastDayPlusOneTempHigh: document.getElementById(appendSideToID(currSideString, "DayPlusOneTempHigh")),
        forecastDayPlusOneTempLow: document.getElementById(appendSideToID(currSideString, "DayPlusOneTempLow")),
        forecastDayPlusOneIcon: document.getElementById(appendSideToID(currSideString, "DayPlusOneIcon")),

        forecastDayPlusTwoDay: document.getElementById(appendSideToID(currSideString, "DayPlusTwoDay")),
        forecastDayPlusTwoTempHigh: document.getElementById(appendSideToID(currSideString, "DayPlusTwoTempHigh")),
        forecastDayPlusTwoTempLow: document.getElementById(appendSideToID(currSideString, "DayPlusTwoTempLow")),
        forecastDayPlusTwoIcon: document.getElementById(appendSideToID(currSideString, "DayPlusTwoIcon"))


    }

    function updateWeatherDisplay (data) {

        console.log(data.condition)

        displayLogic.description.textContent = data.condition;
        displayLogic.city.textContent = weatherPull.splitLocation(data.location);
        displayLogic.date.textContent = format(date, "EEEE d MMMM yyyy" );
        displayLogic.time.textContent = format(date, "h:mm a");
        displayLogic.temperature.textContent = data.temp;

        displayLogic.statsFeelsLike.textContent = data.feelsLike;
        displayLogic.statsHumidity.textContent = data.humidity;
        displayLogic.statsChanceOfRain.textContent = data.chanceOfRain;
        displayLogic.statsWindSpeed.textContent = data.windSpeed;

        displayLogic.forecastDayPlusOneDay.textContent = format(datePlusOne, "EEEE");
        displayLogic.forecastDayPlusOneTempHigh.textContent = data.dayOneTempHigh;
        displayLogic.forecastDayPlusOneTempLow.textContent = data.dayOneTempLow;

        displayLogic.forecastDayPlusTwoDay.textContent = format(datePlusTwo, "EEEE");
        displayLogic.forecastDayPlusTwoTempHigh.textContent = data.dayTwoTempHigh;
        displayLogic.forecastDayPlusTwoTempLow.textContent = data.dayTwoTempLow;
    }

    return {
        appendSideToID,
        displayLogic,
        updateWeatherDisplay
    }
})()