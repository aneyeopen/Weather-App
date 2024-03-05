


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
            console.log(data)
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
            feelsLike: `${data.forecast.forecastday[0].hour[currentHour].feelslike_c}°`,
            location: `${data.location.name}, ${data.location.city}`,
            condition: data.forecast.forecastday[0].hour[currentHour].condition.text,
            precip: `${data.forecast.forecastday[0].hour[currentHour].precip_mm} mm`

        }
        return weatherData;
        
    }

    function weatherFactory(city, temp) {
        return {
            city,
            temp
        }
    }









    return {
        weatherFactory,
        pullWeatherData
    }
})();
