(()=>{"use strict";const e=async function(e){try{const t=`https://api.weatherapi.com/v1/forecast.json?key=ffc640388e254040ba122546231611&q=${encodeURIComponent(e)}&days=5&aqi+no&alerts=no`,o=await fetch(t,{mode:"cors"});if(!o.ok)throw new Error("Network response not ok");const n=await o.json();return console.log(n),n}catch(e){console.error("Fetching weather data failed:",e),alert("Location not found")}},t=document.getElementById("leftSearchForm");t.addEventListener("submit",(o=>{o.preventDefault();const n=document.getElementById("leftSearch").value;console.log(n),e(n),t.reset()})),console.log("fart")})();