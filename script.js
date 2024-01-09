function getWeather() {
    const apiKey = '8c85a655eabe66528d5418c53ce68e89'; // Replace with your OpenWeatherMap API key
    const city = document.getElementById('city').value;
  
    if (!city) {
      alert('Please enter a city name');
      return;
    }
  
    document.getElementById('loading').innerText = 'Loading...';
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        document.getElementById('loading').innerText = '';
        document.getElementById('city-name').innerText = `Weather in ${data.name}, ${data.sys.country}`;
        document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
      })
      .catch(error => {
        document.getElementById('loading').innerText = 'Error fetching weather data';
        console.error('Error fetching weather data:', error);
      });
  }
  