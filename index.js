require('dotenv').config();
// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();


var cors = require('cors');
app.use(cors({optionSuccessStatus: 200})); 

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.set('trust proxy', true)

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/whoami", function (req, res) {
  const ipadress = req.ip;  
  const language = req.acceptsLanguages();
  const software = req.headers['user-agent'];
  res.json({ipaddress: ipadress, language: language, software: software});
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
