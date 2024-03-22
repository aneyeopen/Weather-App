import { format, addDays, isWithinInterval } from "date-fns";
import { weatherPull } from "./weather-scripts";


export const UI = (() => {
    
    let currSideString = ""

    function checkSide (side) {
        currSideString = side;
    }
    
    function appendSideToID(sideString, idString) {
        return sideString + idString
    }

    let displayLogic;

    function initializeDisplayLogic() {
        if (currSideString) {
            displayLogic = {

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
                forecastDayPlusTwoIcon: document.getElementById(appendSideToID(currSideString, "DayPlusTwoIcon")),

                //div to change bg//

                form: document.querySelector(appendSideToID(".", appendSideToID(currSideString, "WeatherForm")))


                }
            }
        }
        

    function updateWeatherDisplay (data) {
        console.log(currSideString)
        initializeDisplayLogic();

        const date = new Date(data.localTime)
        const datePlusOne = addDays(date, 1);
        const datePlusTwo = addDays(date, 2);

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


        changeIcons(data.condition, data.dayOneCondition, data.dayTwoCondition, date);
    }

    function changeIcons(mainCondition, dayPlusOneCondition, dayPlusTwoCondition, localDate) {
        // change main //
        let mainCondVar = checkCondition(mainCondition, condArray, localDate)
        displayLogic.icon.src = `../src/Resources/Icons/WeatherIcons/${mainCondVar}.svg`;
        if (isDay(localDate)) {
            if(mainCondVar == "cloudy" || mainCondVar == "sunny" || mainCondVar == "snow"){
                displayLogic.form.style.color = "#272327";
            }else {displayLogic.form.style.color =  "#f1f0f1"};
            if(mainCondVar == "cloudy"){
                displayLogic.form.style.background = `url(../src/Resources/Backgrounds/sunny.gif`;

            }else if (mainCondVar == "storm" || mainCondVar == "hail"){
                displayLogic.form.style.background = `url(../src/Resources/Backgrounds/rain.gif`;
            } else{
                displayLogic.form.style.background = `url(../src/Resources/Backgrounds/${mainCondVar}.gif`;
                displayLogic.form.style.background-size == "cover";
                displayLogic.form.style.background-position == "center";
            }
        } else {
            displayLogic.form.style.background = `url(../src/Resources/Backgrounds/night.gif`;
            if (mainCondVar == "sunny"){
                displayLogic.icon.src = `../src/Resources/Icons/WeatherIcons/night.svg`;
                displayLogic.form.style.color =  "#f1f0f1";
            }
        }

        // change dayOne //
        let dayOneCondVar = checkCondition(dayPlusOneCondition, condArray, localDate)
        

        if (dayOneCondVar == "night"){
            displayLogic.forecastDayPlusOneIcon.src = `../src/Resources/Icons/WeatherIcons/sunny.svg`;
        } else {
            displayLogic.forecastDayPlusOneIcon.src = `../src/Resources/Icons/WeatherIcons/${dayOneCondVar}.svg`;
        }
        

         // change dayTwo //
        let dayTwoCondVar = checkCondition(dayPlusTwoCondition, condArray, localDate);
        
        if (dayTwoCondVar == "night"){
            displayLogic.forecastDayPlusTwoIcon.src = `../src/Resources/Icons/WeatherIcons/sunny.svg`;
        } else {
            displayLogic.forecastDayPlusTwoIcon.src = `../src/Resources/Icons/WeatherIcons/${dayTwoCondVar}.svg`;
        }


    }

    function isDay(localDate) {
        const hours = localDate.getHours();
        if(hours > 6 && hours < 20) {
            return true;
        }else return false;
    }

    const condArray = [
        ["rain", "shower", "sleet", "drizzle"],
        ["snow", "icy"],
        ["cloudy", "overcast"],
        ["storm", "thunder"],
        ["hail"],
    ];




    
    function checkCondition(conditionString, condObj, date) {
        let condStr = conditionString.toLowerCase();
        let matchFound = false;
        let varCond = "";
        for (let j = 0; j < condObj.length; j++){
            for (let i = 0; i < condObj[j].length; i++) {
                if (condStr.includes(condObj[j][i])){
                    varCond = condObj[j][0];
                    matchFound = true;
                }
            }
        }
        if (matchFound) {
            return varCond;
        } else if (isDay(date)){
            varCond = "sunny";
            return varCond;
        } else {
            varCond = "night";
            return  varCond;
        }
    }
    return {
        appendSideToID,
        displayLogic,
        updateWeatherDisplay,
        currSideString,
        checkSide
    }
})()