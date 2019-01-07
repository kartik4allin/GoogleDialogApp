var request = require('then-request');

let apiKey = '96726b25a6d9449f72c548f18ecdd831';
let city = 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

let temp_min ;
request('GET', url).done(function (res) {
  console.log(res.getBody());
  console.log('body:', res.getBody());
  var weather =JSON.parse(res.getBody());
  temp_min = weather.main.temp_min;
  console.log(weather.main.temp_min);
});

console.log("temp_min  is  "+temp_min);
