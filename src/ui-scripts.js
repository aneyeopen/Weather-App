import { format } from "date-fns";

export const UI = (() => {
    
    const currSideString = "left";
    
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

    function updateWeatherDisplay (
        desc,
        city,
        date,
        time,
        temp,

        feelsLike,
        humidity,
        chanceOfRain,
        windSpeed,

        forecastDayPlusOneDay,
        forecastDayPlusOneTempHigh,
        forecastDayPlusOneTempLow,

        forecastDayPlusTwoDay,
        forecastDayPlusTwoTempHigh,
        forecastDayPlusTwoTempLow

    ) {

    }

    return {
        appendSideToID,
        displayLogic
    }
})()