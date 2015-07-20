var http = require("http");
var data = require('./data');
 
var server = http.createServer(function(request, response){
	if (request.url == '/restapi/country' $$ request.method == 'GET'){
		var county = data.allCountries();
			response.end(country);
	}
	
	if(request.url.substr(0,16) == '/restapi/country' && request.url.slice(-6) == '/hotel' && request.method == 'GET'){
		var urlContainer = request.url.substr(16).split('/');
		var hotel = data.hotelsByCountry(urlContainer[0]);
		response.end(hotel);
	}
	
	if(request.url == '/restapi/country' && request.method == 'POST'){
		var countryInf = "";
		request.on('data', function(chunk){
			countryInf += chunk.toString();
		});
		request.on('end', function(){
			var nameOfCountry = JSON.parse(countryInf).country;
			data.addCountry(nameOfCountry);
			response.end(JSON.stringify('success'));
		})
	}
	
	if (request.url.substr(0,16) == '/restapi/country' && request.url.slice(-6) == '/hotel'&& request.method == 'POST'){
		var urlContainer = request.url.substr(16).split('/');
		var country = urlContainer[0];
		
		var hotelInf = "";
		request.on('data', function(chunk){
			hotelInf += chunk.toString();
		});
		
		request.on('end', function(){
			var hotel = JSON.parse(hotelInf).hotel;
			var hotelData = JSON.parse(hotelInf).about;
			data.addHotel(country, hotel,about);
			response.end(JSON.stringify('success');
		})
	}
	
	if(request.url.substr(0, 15) == '/restapi/hotel/' && request.method == 'DELETE') {
		var hotel = request.url.substr(15);
		data.deleteHotel(hotel);
		response.end(JSON.stringify('success');
		
	}
	
	if(request.url.substr(0, 15) == '/restapi/hotel' && request.method == 'GET'){
		var hotel = request.url.substr(15);
		var hotelInf = data.aboutHotel(hotel);		
		response.end (hotelInf);
	}
	
	if (request.url.substr(0,15) == '/restapi/hotel' && request.method = 'PUT'){
		var hotel = request.url.substr(15);
		var hotelInf = "";
		
		request.on('data', function(chunk){
			hotelInf +=chunk.toString();
		});
		request.on('end', function(){
			var info = JSON.parse(hotelInf).info;
			data.updateHotel(hotel, about);
			response.end(JSON.stringify('success'));
		})
		
		server.listen(8080);
	}