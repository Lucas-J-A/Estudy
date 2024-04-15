const apiKey = "011c46cf6a366652f1ffb4a7e820e9a6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=brazil";


async function checkWeather() {
    const response = await fetch(apiUrl + '&appid= ${apikey}');
    var data = await response.json();

    console.log(data);
}

checkWeather();
