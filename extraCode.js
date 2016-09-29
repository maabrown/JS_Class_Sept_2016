//RETURN FUNCTIONS

function addNum(num1,num2) {
   console.log(num1 + num2);
};

function sqNum(value) {
  console.log(value * value);
}

sqNum(addNum(5,3));

vs

function addNum(num1,num2) {
   return (num1 + num2);
};

function sqNum(value) {
  console.log(value * value);
}

sqNum(addNum(5,3))

function addNum(num1, num2) {
  return num1 + num2;
}


//RETURN STATEMENT
function noReturnAddsNum(num1, num2) {
  num1 + num2
}

console.log("This is with return " + addNum(2,3));
console.log("This is without return " + noReturnAddsNum(2,3));



var answer1 = addNum(2,3);
var answer2 = noReturnAddsNum(2,3)

console.log("This is with return " + answer1);
console.log("This is without return " + answer2);




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
