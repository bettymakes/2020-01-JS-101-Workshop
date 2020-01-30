// Exercises: simple loops
console.log("looping!");

// Introducing the FOR loop! 
// for(initial state; condition; iterator/incrementer)
// Print out numbers 0 to 9

console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log("...")
console.log(9);


// The ways to increment by 1
var num = 0;
num = num + 1;
num += 1;
num++;

for (var i = 0; i < 10; i++) {
	// the code that will execute
	console.log(i);
}




// EXERCISE: Multiplication Tables

// Write a "for" loop that will iterate from 0 to 10. For each iteration of the 
// for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18).
console.log("0 * 9 = 0");
console.log("1 * 9 = 9");
console.log("2 * 9 = 18");

for (var i = 0; i <= 10; i++) {

	var result = i * 9;

	console.log(`${i} x 9 = ${result}`);
}


// EXERCISE: Multiplication Tables Continued

// Write a "for" loop that will iterate from 5 to 23. For each iteration of the 
// for loop, it will subtract the number by 7 and log the result (e.g. "10 - 7 = 3).

for (var i = 5; i <= 23; i++) {
	var result = i - 7;

	console.log(`${i} - 7 = ${result}`);
}



// EXERCISE: The even/odd reporter

// Write a "for" loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is even or odd, and report that to the screen 

// This formula checks for even numbers => <number> % 2 === 0 
// This formula checks for odd numbers => <number> % 2 === 1
// Let's understand why!

for (var i = 0; i < 21; i++) {
	if (i % 2 === 0) {
		console.log(`${i} is even`);
	}
	else {
		console.log(`${i} is odd`);
	}
}






