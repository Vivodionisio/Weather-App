class UI {
  constructor() {
    this.location = document.getElementById('w-location')
    this.desc = document.getElementById('w-desc')
    this.string = document.getElementById('w-string')
    this.details = document.getElementById('w-details')
    this.icon = document.getElementById('w-icon')
    this.humidity = document.getElementById('w-humidity')
    this.feelsLike = document.getElementById('w-feels-like')
    this.dewPoint = document.getElementById('w-dewpoint ')
    this.wind = document.getElementById('w-wind')
    this.windDirection = document.getElementById('w-wind-direction')
  }

  paint(weather) {
    this.location.textContent = weather.name; 
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = `${weather.main.temp} °C`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}` ;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed}`;
    this.windDirection.textContent = `Wind Direction: ${weather.wind.deg} degrees`;
  }
}