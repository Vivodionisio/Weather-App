class Weather {
  constructor(city, country) {
    this.apiKey = 'cddd861e29a73a39d679dc429593f1f9'
    this.city = city
    this.country = country
  }

  // FETCH weather from api
  async getWeather() {

    // Step 1. Get response object
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`)

    console.log(response) 

    // Step 2. Get json
    const responseData = await response.json();

    console.log(responseData) 

    // Step 3. Return promise's resolved value - json
    return responseData
  }

  // CHANGE weather location
    changeLocation(city, country) {
    this.city = city
    this.country = country
  }


} 