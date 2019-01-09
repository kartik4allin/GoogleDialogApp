const express = require('express')
const app = express()
//const port = 8080
const bodyParser = require("body-parser");

let request = require('request');

let apiKey = '96726b25a6d9449f72c548f18ecdd831';
let city = 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

let port = process.env.PORT || 5000;
var server = require('http').Server(app);
var io = require('socket.io')(server);



app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World.Changes with webhook!'));



app.post("/webhook", function(req, res) {
    console.log('request body  channel'+req.body.queryResult.parameters['channel']);
    let channel =req.body.queryResult.parameters['channel'];
    request(url, function (err, response, body) {
      if(err){
        console.log('error:', error);
      } else {
        console.log('body:', body);
        var weather =JSON.parse(body);
        temp_min = weather.main.temp_min;

        return res.json({
            "fulfillmentText": "",
            "fulfillmentMessages": [
                {
                  "text": {
                    "text": [
                        "Text is coming from webhook Heroku.Adding channel "+channel+"and the price is "+temp_min
                      ]
                    }
                }
              ],
            source: "googledilagoueapp"
          });

      }
    });
});


app.post("/webhookSocket", function(req, res) {
    console.log('request body  channel'+req.body.queryResult.parameters['channel']);
    let channel =req.body.queryResult.parameters['channel'];
    request(url, function (err, response, body) {
      if(err){
        console.log('error:', error);
      } else {
        console.log('body:', body);
        var weather =JSON.parse(body);
        temp_min = weather.main.temp_min;
        io.on('connection', function (socket) {
          console.log('Socket on connection with client!!!!!!!!!!@@@@@@@@@@@@@@@@@@@@@@@@@@@');
          socket.emit('fromServer', { 'channel': channel });
        });


        return res.json({
            "fulfillmentText": "",
            "fulfillmentMessages": [
                {
                  "text": {
                    "text": [
                        "Text is coming from webhook Socket!! Heroku.Adding channel "+channel+" and the price is "+temp_min
                      ]
                    }
                }
              ],
            source: "googledilagoueapp"
          });

      }
    });
});

app.listen(port, () => console.log(`Googledialogflow Example app@@ listening on port ${port}`));
