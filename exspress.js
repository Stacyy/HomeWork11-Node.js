var express = require('express');
var data = require('./data');
var router = express.Router();
var myApp = express.createServer();

myApp.use(express.bodyParser());
myApp.use('/restapi', router);

router.use(function (request, response, next)) {
    next();
}

router.route('/country')
    .get(function (request, response)) {
    var allCountries = data.allCountries();
    response.json(allCountries);
}

.post(function (request, response) {
    var nameOfCountry = request.body.country;
    data.addCountry(nameOfCountry);
    response.json({
        status: "success"
    });
});

router.route('/country/:nameOfCountry/hotel')
    .get(function (request, response) {
    var hotel = data.hotelsByCountry(request.params.nameOfCountry);
    response.json(hotel);
})
    .post(function (request, response) {
    var hotel = request.body.hotel;
    var about = request.body.about;
    var country = request.params.nameOfCountry;
    data.addHotel(country, hotel, about);
    response.json({
        status: "success"
    });
});

router.route('/hotel/:nameOfHotel')
    .delete(function (request, response) {
    data.deleteHotel(request.params.nameOfHotel);
    response.json({
        status: "success"
    });
})

    .get(function (request, response) {
    var about = data.aboutHotel(request.params.nameOfHotel);
    response.json(about);
})
    .put(function (request, response) {
    data.updateHotel(request.params.nameOfHotel, request.body.about);
    response.json({
        status: "success"
    });
});

myApp.listen(8080);
