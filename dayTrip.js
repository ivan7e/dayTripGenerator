function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

function generateName(){

    var cityName = ["NYC","BALTIMORE","PHILLY","WASHINGTON D.C.","SAN DIEGO","AUSTIN","L.A.","MIAMI","SEATLE"];
    console.log(random.cityName)

    var resturantName = ["APPLE BEES","OLIVE GARDEN","5 GUYS","RED LOBSTER","BUFFALO WILD WINGS","SUBWAY","OUTBACK STEAK HOUSE"];
    console.log(random.resturantName)

    var transportationMethod = ["CAR","BUS","TRAIN","UBER","BICYCLE"];
    (console.log(random.transportationMethod)

    var entertainmentForm = ["STRIP CLUB","CASINO","BREWERY","PRO SPORTING EVENT","SHOPPING","NIGHT CLUB","CITY TOUR","HIKING"];
    console.log(random.entertainmentForm)

    var cityName = capFirst(cityName[getRandomInt(0, cityName.length + 1)]) + ' ' + capFirst(resturantName[getRandomInt(0, resturantName.length + 1)]) + 
    transportationMethod = capFirst(transportationMethod[getRandomInt(0, name1.length + 1)]) 
    + entertainmentForm = capFirst(entertainmentForm[getRandomInt(0, name1.length + 1)])
    console.log(random.first())
}