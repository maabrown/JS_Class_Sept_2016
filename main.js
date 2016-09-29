console.log('hi');

for (var i = 0; i < array.length; i++) {
	//DO SOMETHING WITH ARRAY
}

for (key in obj) {
    // The key is key
    // The value is obj[key]
}

//USE THIS ONE FOR COPY AND PASTE
var beyonceSongs = ["Resentment", "Formation", "Irreplaceable", "Listen", "Countdown"];

// THIS ARRAY IS FOR READABILITY
var beyonceSongs = [
	'Resentment',
	'Formation',
	'Irreplaceable',
	'Listen',
	'Countdown'
];

//USE THIS ONE TO COPY AND PASTE
var beyonceMovies = ["Dreamgirls", "Carmen", "Cadillac Records", "Goldmember", "The Fighting Temptations", "Obsessed"];

// THIS ARRAY IS FOR READABILITY
var beyonceMovies = [
	"Dreamgirls", 
	"Carmen", 
	"Cadillac Records", 
	"Goldmember", 
	"The Fighting Temptations", 
	"Obsessed"
];

// USE THIS ONE TO COPY AND PASTE
var govtDepartments = [ "Interior", "Commerce", "Treasury", "State", "Homeland Security", "Education", "Justice", "Energy", "Labor"];

// THIS ARRAY IS FOR READABILITY
var govtDepartments = [
	"Interior",
	"Commerce",
	"Treasury",
	"State",
	"Homeland Security",
	"Education",
	"Justice",
	"Energy",
	"Labor"
];

//USE TO COPY AND PASTE
var numbersArray = [ 3, 6, 15, 16 ];

//USE TO COPY AND PASTE
var lemonadeAlbum = {
	"release-date" : "April 23, 2016",
	"genre" : "R&B",
	"albumLength" : 46,
	"label" : "Columbia",
	"amazingSingle" : "Formation",
	"certification" : "platinum"
};

var phoneBook = {
	"name" : "John Bob",
	"county" : "Lincoln",
	"state" : "Idaho",
	"phoneNumber" : 7823659005,
	"streetName" : "Plymouth Drive"
};


var captainPlanet = {
	"wind" : "Linka",
	"earth" : "Kwame",
	"water" : "Gi",
	"fire" : "Wheeler",
	"heart" : "Ma-Ti"
};


var addMeUp = [14, 35, 23, 48];

var mixedUpTypes = [
	"Lady in Satin",
	1958,
	{ "songs" : ["You've Changed", "Violets for My Furs"]},
]



function newFunction() {
	// DO SOMETHING HERE
};


var newFunction = function() {
	// DO SOMETHING HERE
};


function theNewNewFunction(param1, param2) {
	// DO SOMETHING HERE
}


newFunction();
theNewNewFunction();


function learningJS(param1, param2) {
	console.log(param1 + " " + param2);
};



function giveMeMyName(firstName, lastName) {
	console.log(firstName + " " + lastName);
};

giveMeMyName("Mark", "Brown II"); // => "Mark Brown II"


function addNumbers(number1, number2) {
	console.log(number1 + number2);
};

addNumbers(2,4); // => 6


var oneNumber = 3;
var secondNumber = 7;

function addNumbers(number1, number2) {
	console.log(number1 + number2);
};



addNumbers(oneNumber, secondNumber);
// What do you think is going to happen?



var oneNumber = 3;
var secondNumber = 7;

function addNumbers() {
	console.log(oneNumber + secondNumber);
};

var oneNumber = 3;
var secondNumber = 7;

function addNumbers() {
	return oneNumber + secondNumber;
};


var oneNumber = 3;
var secondNumber = 7;

function addNumbers() {
	return oneNumber + secondNumber;
	console.log(oneNumber + 1) // THIS WILL NOT HAPPEN
}


var oneNumber = 3;
var secondNumber = 7;

function addNumbers() {
	var newAddition = oneNumber + secondNumber;
	return newAddition;
};


function subtractOne(value) {
	return value - 1;
}

subtractOne(addNumbers());


function oneBigFunction() {
	return ( (oneNumber + secondNumber) - 1 );
}


var exampleArray = [3, 2, 1];

for (var i = 0; i < array.charAt(); i++) {
	var newElement = array[i] + 1;
	console.log(newElement);
}


var exampleArray = ["LaToya", "Farrah", "LaTavia"]

for (var i = exampleArray.length; i > 0; i++) {
	var newElement = exampleArray[i] + " isn't in Destiny's Child";
	console.log(newElement);
}
