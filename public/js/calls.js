$(document).ready(function () {
    $('#submit').on('click', function () {
        $('#submit').prop('disabled', true)

        var body = {
            "to": {
                "zip": $("#zip").val(),
                "country": $("#country").val()
            }
        };

        var settings = {
            "url": "/Rates",
            "method": "POST",
            "headers": {
                "content-type": "application/json"
            },
            "data": JSON.stringify(body)
        }

        $.ajax(settings)
            .done(function (json) {
                displayRates(json)
            })
            .fail(function (json) {
                alert(JSON.stringify(json));
            })
            .always(function () {
                $('#submit').prop('disabled', false);
            })
    });

    $("form").submit(function (e) {
        e.preventDefault();
    })
});

function displayRates(json) {
    $("#resultTable tbody").empty();
    
    //Lines	
	for (var i = 0; i < json.length; i++) {
		$("#resultTable tbody").append(
			"<tr>" +
			"<td>" + (i + 1) + "</td>" +
			"<td><img src='"+ json[i].provider_image_75+"'></td>" +
			"<td>" + json[i].service+ "</td>" +
			"<td>" + json[i].estimated_days + "</td>" +
			"<td>" + json[i].currency +" "+
				json[i].amount + "</td>" +
            "</tr>");
	}
}