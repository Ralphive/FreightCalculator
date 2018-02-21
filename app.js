console.log("Initializing Freight Calculator app")

// Load Node Modules
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//To Support body on post requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Endpoint to POST items to Service Layer
app.post('/Rates', function (req, res) {
    console.log ("Received POST Request")
    console.log (JSON.stringify(req.body))
    res.send({message: "all good"})
});

//Gets port from environment of use default
var port = process.env.PORT || 30000
app.listen(port, function () {
  console.log('Freight App running on port ' + port);
});