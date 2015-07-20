var data = {
		'country' : [
		'Italy' : {
			'hotel' : [
				{
					'name': 'Milton',
					'about': 'Some information about hotel'
				},
				{
					'name': 'Villa dei Principi',
					'about': 'Some information about hotel'
				},
				{
					'name': 'Bianca Vela',
					'about': 'Some information about hotel'
				},
				{
					'name': 'Vannucci',
					'about': 'Some information about hotel'
				},
				{
					'name': 'Marittima ',
					'about': 'Some information about hotel'
				}
			]
		]
		},
		'country' : [
		'France' : {
			'hotel' : [
				{
					'name': 'Fiat',
					'about': 'Some information about hotel'
				},
				{
					'name': 'Apollo Opera',
					'about': 'Some information about hotel'
				},
				{
					'name': 'Peyris Opera',
					'about': 'Some information about hotel'
				},
				{
					'name': 'Jeff',
					'about': 'Some information about hotel'
				},
				{
					'name': 'Victoria ',
					'about': 'Some information about hotel'
				}
			]	
			]
		},
		'country' : [
		'Japan' : {
			'hotel' : [
				{
					'name': 'Shiraume',
					'about': 'Some information about hotel'
				},
				{
					'name': 'Ohanabo',
					'about': 'Some information about hotel'
				},
				{
					'name': 'Ryokan Fujioto',
					'about': 'Some information about hotel'
				},
				{
					'name': 'Yamashiroya',
					'about': 'Some information about hotel'
				},
				{
					'name': 'Ryokan Sawanoya',
					'about': 'Some information about hotel'
				}
			]	
			]
		}
	
};

function hotelsByContry(country){
	var hotel = data.country.hotel;
		return JSON.stringify(hotel);
}

function allCountries(){
	var country = data.country;	
	return JSON.stringify(country);
}

function addCountry(country){
	data.country = {};
}

function addHotel(country, hotel, about){
	data.country.hotel.push({
		'hotel': hotel;
		'about':about;
	});
}

function deleteHotel(hotel){
		for (var country in data){
			data.country.hotel forEach(function(item,i,array){
				if (item.name == hotel){
					array.splice(i,1);
				}
			});
		}
}

function aboutHotel(hotel){
		var element;
		for(var country in data){
		data.country.hotel.forEach(function(item, i, array){
				if (item.name == hotel){
					element = item['about'];
				}
		});
		}
		return element;
}

function updateHotel(hotel, about){
	for(var country in data){
		data.country.hotel.forEach(function(item, i, array){
			if(item.name==hotel){
				item['about'] = about;
			}
		});
	}
}

module.exports = {
	hotelsByContry:hotelsByContry,
	allCountries : allCountries,
	addCountry:addCountry,
	addHotel:addHotel,
	deleteHotel:deleteHotel,
	aboutHotel:aboutHotel,
	updateHotel:updateHotel
}