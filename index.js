const express = require('express')
const app = express()
//const port = 8080
const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World.Changes with webhook!'))


app.post("/echo", function(req, res) {
  var speech =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.echoText
      ? req.body.result.parameters.echoText
      : "Seems like some problem. Speak again.";
  return res.json({
    speech: speech,
    displayText: speech,
    source: "webhook-echo-sample"
  });
});

app.post("/webhook", function(req, res) {

console.log('request body  channel'+req.body.queryResult.parameters['channel']);

let channel =req.body.queryResult.parameters['channel'];

  return res.json({
    "fulfillmentText": "",

    "fulfillmentMessages": [
        {
          "text": {
            "text": [
                "Text is coming from webhook Heroku.Adding channel "+channel
              ]
            }
        }
      ],
    source: "googledilagoueapp"
  });
});

app.listen(process.env.PORT || 5000, () => console.log(`My dialogflow Example app listening on port 5000`))
