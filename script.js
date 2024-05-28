document.getElementById("location-input").addEventListener("change", async () => {
    const location = document.getElementById("location-input").ariaValueMax;
    const weatherData = await getWeatherData(location);
    displayWeatherData(weatherData);
})

const getWeatherData = async (location) => {
    if(!location){
        return {};
    }

    const apiKey = "API_KEY";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
    const data = await response.json();

    return data;
}

function getBackgroundColor(temperature) {
    if(temperature < 0) {
        return "lightblue";
    }else if(temperature < 10) {
        return "lightgreen";
    }else if(temperature < 20) {
        return "lightyellow";
    }else if(temperature < 30) {
        return "lightsalmon";
    }else {
        return "lightcoral";
    }
}