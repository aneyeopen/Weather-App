import { UI } from "./ui-scripts";



export const weatherPull = (function () {


    async function pullWeatherData(city) {
        try {
            const apiKey = 'ffc640388e254040ba122546231611';
            const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${encodeURIComponent(city)}&days=5&aqi+no&alerts=no`;
            
            const response = await fetch(url, { mode: "cors"});
            if (!response.ok) {
                throw new Error("Network response not ok")
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Fetching weather data failed:", error);
            alert("Location not found");
        }
    }

    function formatWeatherData(data) {
        const currentHour = 12;

        const weatherData = {
            temp: `${Math.round(data.forecast.forecastday[0].hour[currentHour].temp_c)}°`,
            tempHigh: `${Math.round(data.forecast.forecastday[0].day.maxtemp_c)}°`,
            tempLow: `${Math.round(data.forecast.forecastday[0].day.mintemp_c)}°`,
            feelsLike: `${Math.round(data.forecast.forecastday[0].hour[currentHour].feelslike_c)}°`,
            location: `${data.location.name}, ${data.location.city}`,
            condition: data.forecast.forecastday[0].hour[currentHour].condition.text,
            humidity: `${data.forecast.forecastday[0].day.avghumidity} %`,
            windSpeed: `${data.forecast.forecastday[0].hour[currentHour].wind_kph} km/h`,
            chanceOfRain: `${data.forecast.forecastday[0].hour[currentHour].chance_of_rain} %`,
            dayOneTempHigh: `${Math.round(data.forecast.forecastday[1].day.maxtemp_c)}°`,
            dayOneTempLow: `${Math.round(data.forecast.forecastday[1].day.mintemp_c)}°`,
            dayOneCondition: data.forecast.forecastday[1].day.condition.text,
            dayTwoTempHigh: `${Math.round(data.forecast.forecastday[2].day.maxtemp_c)}°`,
            dayTwoTempLow: `${Math.round(data.forecast.forecastday[2].day.mintemp_c)}°`,
            dayTwoCondition: data.forecast.forecastday[2].day.condition.text,
            localTime: data.location.localtime
            }

        
        return weatherData;
        
    }

    function splitLocation(locationString) {
        if(locationString.includes(", undefined")) {
            let newStr = locationString.replace(", undefined", "");
            return newStr;
        } else {
            return locationString;
        }
    }

    function loadWeatherData(city) {
        pullWeatherData(city)
            .then((data) => {
                if (data) {
                    const weatherData = formatWeatherData(data);
                    console.log(data);
                    console.log(weatherData);
                    if(weatherData){
                        UI.updateWeatherDisplay(weatherData);
                    }
                    
                }
            })
            .catch((error) => {
                console.error("Error processing data:", error);
            });
    }
    










    return {
        
        pullWeatherData,
        formatWeatherData,
        loadWeatherData,
        splitLocation
    }
})();
