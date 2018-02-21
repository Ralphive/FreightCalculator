console.log("Initializing Freight Calculator app")
console.log(process.env.SHIPPO_KEY)
// Load Node Modules
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


// Load Local Modules
var freight = require('./modules/freight');

var app = express();

//To Support body on income POST requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Provides access to asset folder
app.use(express.static('public'));

//Endpoint to Retrieve Rates Prices
app.post('/Rates', function (req, res) {
    console.log("Received POST Request")
    console.log(req.body)
    freight.Rates(req.body, function (err, resp) {
        if (err) {
            res.status(500).send(err)
        } else {
            console.dir(resp);
            res.status(200).send(resp)
        }
    })
});

// Root path to retrieve Index.html (test page)
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

//Gets port from environment of use default
var port = process.env.PORT || 30000
app.listen(port, function () {
    console.log('Freight App running on port ' + port);
});