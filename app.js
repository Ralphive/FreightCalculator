console.log("Initializing Freight Calculator app")
console.log(process.env.SHIPPO_KEY)
// Load Node Modules
var express = require('express');
var bodyParser = require('body-parser');

// Load Local Modules
var freight = require('./modules/freight');



var app = express();

//To Support body on post requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Endpoint to Retrieve Rates Prices
app.post('/Rates', function (req, res) {
    console.log ("Received POST Request")
    console.log (JSON.stringify(req.body))
    freight.Rates(req.body, function(err, resp){
        res.send(resp);
    })
    
});

//Gets port from environment of use default
var port = process.env.PORT || 30000
app.listen(port, function () {
  console.log('Freight App running on port ' + port);
});