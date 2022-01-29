// Init storage
const storage = new Storage();

// Get stored (or default) location data..
const weatherLocation = storage.getLocationData();

// ..Init weather object and pass-in stored (or default) location data 
const weather = new Weather(weatherLocation.city, weatherLocation.country);

// Init UI
const ui = new UI();

// Get weather on DOM load (call Weather class's method getWeather()) *
document.addEventListener('DOMContentLoaded', getWeather); 

// Change location 
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  // Change location
  weather.changeLocation(city, country);

  // Set location in local storage
  storage.setLocationData(city, country);

  // Get and display weather
  getWeather();

  // Close modal
  const myModalEl = document.getElementById("locModal"); 
  const modal = bootstrap.Modal.getInstance(myModalEl);
  modal.hide();
})

// * json returned from api
function getWeather() {
  weather.getWeather()
  .then(results => {
    ui.paint(results) // paint the ui with results (json)
  })
  .catch(err => console.log(err))
}
