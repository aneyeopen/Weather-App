import { format } from "date-fns";

export const UI = (() => {
    
    const currSideString = "left";
    
    function appendSideToID(sideString, idString) {
        return sideString + idString
    }

    const displayLogic = {
        // main form //
        description: document.getElementByID(appendSideToID(currSideString, "Desc")),
        city: document.getElementByID(appendSideToID(currSideString, "City")),
        date: document.getElementByID(appendSideToID(currSideString, "Date")),
        time: document.getElementByID(appendSideToID(currSideString, "Time")),
        temperature: document.getElementByID(appendSideToID(currSideString, "Temp")),
        icon: document.getElementByID(appendSideToID(currSideString, "Icon")),

        // stats //

        statsFeelsLike: document.getElementByID(appendSideToID(currSideString, "FeelsLike")),
        statsHumidity: document.getElementByID(appendSideToID(currSideString, "Humidity")),
        statsChanceOfRain: document.getElementByID(appendSideToID(currSideString, "ChanceOfRain")),
        statsWindSpeed: document.getElementByID(appendSideToID(currSideString, "WindSpeed")),

        // forecast //

        forecastDayPlusOneDay: document.getElementByID(appendSideToID(currSideString, "DayPlusOneDay")),
        forecastDayPlusOneTempHigh: document.getElementByID(appendSideToID(currSideString, "DayPlusOneTempHigh")),
        forecastDayPlusOneTempLow: document.getElementByID(appendSideToID(currSideString, "DayPlusOneTempLow")),
        forecastDayPlusOneIcon: document.getElementByID(appendSideToID(currSideString, "DayPlusOneIcon")),

        forecastDayPlusTwoDay: document.getElementByID(appendSideToID(currSideString, "DayPlusTwoDay")),
        forecastDayPlusTwoTempHigh: document.getElementByID(appendSideToID(currSideString, "DayPlusTwoTempHigh")),
        forecastDayPlusTwoTempLow: document.getElementByID(appendSideToID(currSideString, "DayPlusTwoTempLow")),
        forecastDayPlusTwoIcon: document.getElementByID(appendSideToID(currSideString, "DayPlusTwoIcon"))


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