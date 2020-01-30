// Exercises: Arrays
console.log("arrays!!!");
// Arrays are an ORDERED list of items

// Create an array, store it in a variable
var fruits = ['apple', 'banana', 'orange', 'pear', 'melon'];
		//      0          1        2         3       4   << index position

// Getting or accessing values from our array
// Say the name of our array with its position number
fruits[2] // "orange"
fruits[4] // "melon"


// Setting a new value
// To change/overwrite an existing value:
fruits[1] = 100;


// To add NEW values I have two options:
// Option 1: through its position #
fruits[fruits.length] = "berries";
fruits[fruits.length] = "betty";
fruits[fruits.length] = "diana x 2";
fruits[fruits.length] = "fiona";




// Option 2: use the Push function
fruits.push("last item");


// Tell us how many items are in an array
fruits.length



// EXERCISE: Your top movies

// Create an array that contains the titles of a few of your favourite movies.
var movies = ['Mean Girls', 'Old Boy', 'Highschool Musical 3', 'Jaws', 'Bridesmaid', 'hsm2'];

// Print the amount of movies in the array
console.log(movies.length);

// Select the movie that you saw most recently from the array and store that into a variable.
var mostRecent = movies[2];

// Log the sentence to the console: "The most recent movie I saw was <movie>"
console.log(`Most recent movie I saw was ${mostRecent}`);


// EXERCISE: Applying loops to Arrays
// Log the sentence to the console for EVERY movie in your list:
// "One of my top favourite movies is: <movie>"
// Hint: You'll end up with 4-5 console.log statements

// console.log(`One of my top fav movies is: ${movies[0]}`);
// console.log(`One of my top fav movies is: ${movies[1]}`);
// console.log(`One of my top fav movies is: ${movies[2]}`);
// console.log(`One of my top fav movies is: ${movies[3]}`);
// console.log(`One of my top fav movies is: ${movies[4]}`);

// Using a for loop, perform the same operation as above
for (var i = 0; i < movies.length; i++) {
	console.log(`One of my top fav movies is: ${movies[i]}`);
}
















