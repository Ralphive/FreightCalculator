/** Shippo Service SDK Loaded with API KEY**/
var shippo = require('shippo')(process.env.SHIPPO_KEY);

module.exports = {
    Rates: function (body, callback) {
        return (Rates(body, callback));
    }
}

var defaultFrom = { zip: "94117", country: "US" }
var defaultParcel = {
    length: "5",
    width: "5",
    height: "5",
    distance_unit: "in",
    weight: "2",
    mass_unit: "kg"
};

function Rates(body, callback) {
    //Returns A JSON with calculated shipment rates

    var parcel = body.parcel || defaultParcel
    var addressFrom = body.from || defaultFrom
    var addressTo = body.to

    shippo.shipment.create({
        address_from: addressFrom,
        address_to: addressTo,
        parcels: [parcel],
        async: false}, function (err, shipment) {
        if (err) {
            console.error("error " + err);
            callback(err, null)
        }
        else {
            console.log("Shipment calculated ");
            
            var rates = []
            
            for (var i = 0; i < shipment.rates.length; i++){
                var rate = {
                    provider: shipment.rates[i].provider,
                    service: shipment.rates[i].servicelevel.name,
                    provider_image_75: shipment.rates[i].provider_image_75,
                    provider_image_200: shipment.rates[i].provider_image_75,
                    estimated_days: shipment.rates[i].estimated_days,
                    amount: shipment.rates[i].amount,
                    currency: shipment.rates[i].currency
                }
                rates.push(rate);
            }
            callback(null, rates)
        }
    });
}
