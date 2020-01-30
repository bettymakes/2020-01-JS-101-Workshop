// Exercises: Variables
// Log something to the console!
console.log("Hello!!!"); 

var powerRangersAreAwesome = 5; // In JS, it's common to use camel-casing

// The = symbol is an ASSIGNMENT OPERATOR
// We don't need to use `var` keyword to redeclare a variable once it's made
powerRangersAreAwesome = 10;


// In 2015, new variable declartion methods were introduced:
// const & let (see below)
const family = 4; // The value is constant, and can never be reassigned
let phoneVersion = 11; // Very similar to `var`, there is a key difference though



// 1a) Create a bank account variable
var bankAccount = 50000000;


// 1b) Create a statement that says "My bank account value is $x"
//     - Explore single & double quoted strings
//     - Bonus: Template literals

var intro = "My name is Betty";
console.log(intro);

var intro2 = 'My new name is Bettina';
console.log(intro2);

var singleQuotes = 'It\'s snowing outside'; // The backslash (\) is the escape character
console.log(singleQuotes);

var doubleQuotes = "And Trudeau said, \"Hello!\"";
console.log(doubleQuotes);

// String concatenation
var bankStatement = "My bank account value is " + bankAccount + " dollars.";
console.log(bankStatement);

// String Template Literal
// Create the string template literals using BACK TICKS ` <<<< (next to the 1 key) 
var bankStatement2 = `My bank account value is ${ bankAccount - 10 } dollars.`;
console.log(bankStatement2);



// 2) Math'ing! We follow the rules of BEDMAS
var sum = 5 + 3;

var difference = 4 - 2;

var quotient = 15 / 5;

var product = 6 * 20;

var equation = 10 * (5 - 3); // 20

var equation2 = difference * quotient - product; // -114


// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their age based on the stored values.
// Output them to the screen like so: "They are NN years old.", substituting the values.
var currentYear = 2020;
var birthYear = 1964;
var age = currentYear - birthYear;

var ageStatement = `They are ${age} years old.`;
console.log(ageStatement);


// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var currentAge = 18;
var maxAge = 120;
var amountPerDay = 5;
var lifetimeAmount = (maxAge - currentAge) * 365 * amountPerDay;

console.log(`You will need lifetimeAmount to last you until the ripe old age of ${lifetimeAmount}`);



// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."


// (0°C × 9/5) + 32
var celsius = 10;
var cToF = (celsius * 9 / 5) + 32
console.log(`${celsius}°C is ${cToF}°F`);

// (32°F − 32) × 5/9 
var fahrenheit = 82;
var fToC = (fahrenheit - 32) * 5 / 9;
console.log(`${fahrenheit}°F is ${fToC}°C`);



