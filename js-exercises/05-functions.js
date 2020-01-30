// Exercises: Functions
// Create a function that adds two numbers together
// The function will log the result to console
console.log("functions!!!");

function add(num1, num2) {
	console.log(num1 + num2);
}



// EXERCISE: Simple Greeting

// Write a function that when called, simply logs your name to the screen like so "Hello XYZ!"
// Don't forget to execute the function
function simpleGreeting() {
	console.log("Hello Betty");
}

simpleGreeting();
simpleGreeting();
simpleGreeting();


// EXERCISE: Universal Greeting
// Write a function that takes one argument and logs anyone's name like so: "Hello XYZ!". 
function universalGreeting(name) {
	console.log(`Hey there ${name}!`);
}

universalGreeting('Fiona');
universalGreeting('Diana');
universalGreeting('Betty');



// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// The function should calculate the 2 possible ages based on those years.
// It should output the result to the screen like so: "You are NN years old."
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in!

function calculateAge(birthYear, currentYear) {
	var age = currentYear - birthYear;

	console.log(`You are ${age} years old.`);
}


calculateAge(2001, 2020);
calculateAge(1995, 2020);
