let request = require('request');

let apiKey = '96726b25a6d9449f72c548f18ecdd831';
let city = 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

// {"coord":{"lon":-122.67,"lat":45.52},"weather":[{"id":701,"main":"Mist","description":"mist","icon":"50d"}],
// "base":"stations","main":{"temp":278.53,"pressure":1021,"humidity":76,"temp_min":276.45,"temp_max":279.85},
// "visibility":16093,"wind":{"speed":2.1,"deg":180},"clouds":{"all":90},"dt":1546887180,"sys":{"type":1,"id":5321,
// "message":0.007,"
// country":"US","sunrise":1546876204,"sunset":1546908291},"id":5746545,"name":"Portland","cod":200}
let temp_min ;
request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
    var weather =JSON.parse(body);
    temp_min = weather.main.temp_min;
    console.log(weather.main.temp_min);
  }
});

console.log("temp_min  is  "+temp_min);
