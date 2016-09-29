// Alphabetize first names of people in the room

// Get everyone's name
// Make a list of everyone's name
// Loop through names
	// start with first and second names


//Loop through BeyonceSongs
for (var i = 0; i < beyonceSongs.length; i++) {
  console.log(beyonceSongs[i]);
};

//Loop through BeyonceMovies
for (var i = 0; i < beyonceMovies.length; i++) {
  console.log(beyonceMovies[i]);
};

// Log every item in govtDepartments

for (var i = 0; i < govtDepartments.length; i++) {
  console.log(govtDepartments[i]);
};


// Make first letter lowercase
for (var i = 0; i < govtDepartments.length; i++) {
  var newGovtStrings = govtDepartments[i][0].toLowerCase();
  console.log(newGovtStrings);
};

for (var i = 0; i < govtDepartments.length; i++) {
  var newFirstLetters = govtDepartments[i][0].toLowerCase();
  var newWords = newFirstLetters + govtDepartments[i].slice(1);
  console.log(newWords);
};

// Add 2 to every item in nubmerArray and push to new array
var newArray = [];

for (var i = 0; i < numbersArray.length; i++) {
  var numsPlusTwo = numbersArray[i] + 2;
  newArray.push(numsPlusTwo);
};

console.log(newArray);

// For loop for reverse order beyonceSongs
for (var i = beyonceSongs.length; i > 0; i--) {
  console.log(beyonceSongs[i - 1]);
};

console.log(beyonceSongs.reverse());

// For loop through keys in lemonadeAlbum
for (key in lemonadeAlbum) {
  console.log(key);
};

// For loop through values in lemonadeAlbum
for (key in lemonadeAlbum) {
  console.log(lemonadeAlbum[key]);
};

// For loop through keys in phoneBook
for (key in phoneBook) {
  console.log(key);
};

// For loops through values in phoneBook
for (key in phoneBook) {
  console.log(phoneBook[key]);
};


//Function - console.log your name
function consoleName(name) {
	console.log(name);
};

// Function - squares any number
function squareNumber(num) {
	console.log(num * num);
};

// Function - adds value to outside array
var emptyArray = [];

function addValue(value) {
	emptyArray.push(value);
};

// Write a function that will return the name of an animal you pass in.
function returnAnimal(name) {
	return name;
};

// Write a function that will divide the number you pass in by 5.
function divisionBy5(num) {
	return (num / 5);
};

// Write a function that will console.log the values of any object. Use object captainPlanet to check your fxn.
function consoleObject(obj) {
	for (key in obj) {
		console.log(obj[key]);
	}
};

// Write a function that will add 1 to every element of an array that is passed in. Use addMeUp to check your fxn.
function addOne(array) {
	for (var i = 0; i < array.length; i++) {
		console.log(array[i] + 1);
	}
};

// Write a function that will tell me the dataType of every element in an array that is passed in. Use mixedUpTypes to check your fxn.
function dataTypeSeer(array) {
	for (var i = 0; i < array.length; i++) {
		console.log(typeof array[i]);
	};
};

