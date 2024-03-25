
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'YOUR_API_KEY';


async function getWeather(city) {
    const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    return data;
}


async function updateWeather() {
    const city = document.getElementById('cityInput').value;
    const weatherData = await getWeather(city);
    
  
    document.getElementById('cityName').textContent = weatherData.name;
    document.getElementById('temperature').textContent = weatherData.main.temp + '°C';
    document.getElementById('description').textContent = weatherData.weather[0].description;
}


document.getElementById('updateButton').addEventListener('click', updateWeather);