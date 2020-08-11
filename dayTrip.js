function capFirst(string) {
return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

function cityName(){

    var cityName = ["NYC","BALTIMORE","PHILLY","WASHINGTON D.C.","SAN DIEGO","AUSTIN","L.A.","MIAMI","SEATLE"];
    let index = getRandomInt(0, 8);
    console.log(cityName[index]);

function resturantName(){

    var resturantName = ["APPLE BEES","OLIVE GARDEN","5 GUYS","RED LOBSTER","BUFFALO WILD WINGS","SUBWAY","OUTBACK STEAK HOUSE"];
    let index = getRandomInt(0, 6);
    console.log(resturantName[index]);

function transportationMethod(){

    var transportationMethod = ["CAR","BUS","TRAIN","UBER","BICYCLE"];
    let index = getRandomInt(0, 5);
    console.log(transportationMethod[index]);

function entertainmentForm(){
   
    var entertainmentForm = ["STRIP CLUB","CASINO","BREWERY","PRO SPORTING EVENT","SHOPPING","NIGHT CLUB","CITY TOUR","HIKING"];
    let index = getRandomInt (0,7)
    console.log(entertainmentForm)[index]);


    
    
}
//change to one function 
//update console.log 
//use getRandomInt
//test code repeat