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
        description: document.getElementByID(appendSideToID(currSideString, "Desc")),
        time: document.getElementByID(appendSideToID(currSideString, "Time")),
        temperature: document.getElementByID(appendSideToID(currSideString, "Temp")),
        icon: document.getElementByID(appendSideToID(currSideString, "Icon")),

        // stats //

        statsFeelsLikeIcon: document.getElementByID(appendSideToID(currSideString, "FeelsLikeIcon")),
        statsFeelsLike: document.getElementByID(appendSideToID(currSideString, "FeelsLike")),
        statsHumidityIcon: document.getElementByID(appendSideToID(currSideString, "HumidityIcon")),
        statsHumidity: document.getElementByID(appendSideToID(currSideString, "Humidity")),
        statsChanceOfRainIcon: document.getElementByID(appendSideToID(currSideString, "ChanceOfRainIcon")),
        statsChanceOfRain: document.getElementByID(appendSideToID(currSideString, "ChanceOfRain")),
        statsWindSpeedIcon: document.getElementByID(appendSideToID(currSideString, "WindSpeedIcon")),
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

    return {
        appendSideToID,
        displayLogic
    }
})()