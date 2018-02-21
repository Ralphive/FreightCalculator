/** Shippo Service SDK Loaded with API KEY**/
var shippo = require('shippo')(process.env.SHIPPO_KEY);

module.exports = {
    Rates: function (body, callback) {
        return (Rates(body, callback));
    }
}


function Rates(body, callback) {
    var addressFrom = {
        "name": "Shawn Ippotle",
        "street1": "215 Clayton St.",
        "city": "San Francisco",
        "state": "CA",
        "zip": "94117",
        "country": "US",
        "phone": "+1 555 341 9393",
        "email": "shippotle@goshippo.com"
    };

    var addressTo = {
        "name": "Mr Hippo",
        "street1": "Broadway 1",
        "city": "New York",
        "state": "NY",
        "zip": "10007",
        "country": "US",
        "phone": "+1 555 341 9393",
        "email": "mrhippo@goshippo.com"
    };

    var parcel = {
        "length": "5",
        "width": "5",
        "height": "5",
        "distance_unit": "in",
        "weight": "2",
        "mass_unit": "lb"
    };

    shippo.shipment.create({
        "address_from": addressFrom,
        "address_to": addressTo,
        "parcels": [parcel],
        "async": false
    }, function (err, shipment) {
        if (err) {
            console.error("error " + err);
            callback(err, null)
        }
        else {
            console.log("Shipment calculated ");
            callback(null, shipment)
        }
    });
}
