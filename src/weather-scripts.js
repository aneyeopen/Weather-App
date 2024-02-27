import { da } from "date-fns/locale";




export const weatherPull = (function () {


    async function pullWeatherData(city) {
        try {
            const apiKey = 'ffc640388e254040ba122546231611';
            const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${encodeURIComponent(city)}&days=4&aqi+no&alerts=no`;
            
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

    function weatherFactory(city, temp) {
        return {
            city,
            temp
        }
    }









    return {
        weatherFactory
    }
})
