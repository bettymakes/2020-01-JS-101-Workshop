// Exercises: conditional logic
console.log("Part 2! Conditionals");

// There are 2 boolean values:
var truthyValue = true;
var falseyValue = false;

3 > 5 // greater than
3 < 5 // less than
3 >= 5 // greater than or equal
3 <= 5 // less than or equal to

// Checking equality
"3" == 3 // loose equality (using type coersion, does not match for data type equality)
"100" === 100 // strict equality (will verify data type and value matches). This is what we want to use.


// Weather Forecaster
// If the temp is greater than 30 deg, "It's too hawt 🔥!"
// If the temp is greater than 0 deg, "It's just right!"
// If the temp is 0 or less, "Brr! It's cold!"

var temp = 40;

// If the temperature is greater than 30 AND less than 100 ... 
if (temp > 30 && temp < 100) {
  // etc.
}

// If the temperature is greater than 30 OR less than 100 ... 
if (temp > 30 || temp < 100) {
  // etc.
}


if (temp > 30) {
	console.log("It's too hawt!!!");
}
else if (temp > 0) {
  console.log("It's just right");
}
else {
  console.log("It's too cold!");
}




// EXERCISE: What number's bigger?

// Store your age in a variable
// Store your best friend's age in a variable
// Write an if/else statement that logs a message stating who is older
var myAge = 72;
var bestieAge = 72;

if (myAge > bestieAge) {
  console.log("I'm older than my bestie!");
}
else if (myAge === bestieAge) {
  console.log("We're the same age");
}
else {
  console.log("My bestie is older than me!");
}



// EXERCISE: Who's allowed on the ride?

// Store a rider's age in a variable
// Store the rider's height (in cm) in a variable
// Write a "compound" if/else statement that checks if the rider meets the minimum requirements and logs a message to the console
// Rider's need to be 150cm tall, and at least 13 years of age

var requiredHeight = 150;
var requiredAge = 13;

var riderAge = 18;
var riderHeight = 220;

// COMPOUND IF/ELSE
if (riderAge >= requiredAge) {
  if (riderHeight >= requiredHeight) {
    console.log("You're allowed to ride!");
  } 
  else {
    console.log("Sorry. You're too short");
  }
}
else {
  console.log("Sorry. You're too young");
}


// AND logical operator
if (riderAge >= requiredAge && riderHeight >= requiredHeight) {
  console.log("You're allowed to ride!");
}
else {
  console.log("You're not allowed to ride");
}








