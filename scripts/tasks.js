console.log("We're in the home stretch!!");

// ============================================
// ✏️ Let's practice the building blocks
// ============================================
// 🧠 Before we get started on making the ToDo Application work,
// we'll need to work on some final fundamental concepts like
// Browser Events. 
//
// MDN Event Documentation => https://developer.mozilla.org/en-US/docs/Web/Events
//
// 🧠 This is where you'll begin to see the concepts in 
// the JS Exercises start coming together
// 
// 🧠 Most importantly, the code we'll be writing in this section
// is for 🏀 Practice ONLY 🏀. That means, we'll be commenting out
// the code after we write it. 
//
// 🚫 TL;DR
// Comment out the previous exercise when starting the next one


// 🏀 1. Get the browser to write to the console when someone clicks anywhere in the document

// document.addEventListener('click', function() {
// 	alert("clicked!!!");
// });



// Called with a named function
// function documentClicked() {
// 	alert("clicked!!!");
// }

// document.addEventListener('click', documentClicked);


// 🏀 2. Change the text of the h1 that displays the page title when someone clicks anywhere in the page
// function hackedClick() {
// 	document.getElementsByTagName('h1')[0].innerText = 'hacked!!!!!';
// }

// document.addEventListener('click', hackedClick);


// 🏀 3. Display an alert printing the name of the task
//       when someone clicks any of the tasks
// Hint: We'll need to use `this` keyword
// Bonus: Come back and look at the `event` object, time permitting

// var tasksEle = document.getElementsByClassName('task');

// for (var i = 0; i < tasksEle.length; i++) {
// 	tasksEle[i].addEventListener('click', function(event) {
// 		console.log(event.target.innerText);
// 	});
// }



// 🏀 4 => (Refactor code above)
// 4a. Write a function that displays an alert
// 4b. Run the function only when any task is clicked





// ============================================
// 🏁 Let's get down to business
// ============================================

// ✅ Now that we've put all the building blocks together ...
// Let's start working on the ToDo Application and get it
// to do what we set out to accomplish:
// 1️⃣ Application marks tasks as complete when clicked
// 2️⃣ Application can mark tasks as incomplete when clicked again
// 3️⃣ Application updates the count of completed tasks


// ✅ Write a function that updates the counter based on 
//    which tasks are completed
// Hint: Start with pseudo-coding

function updateCounter() {
	// 1. Determine the TOTAL number of tasks 
	var totalTasks = document.getElementsByClassName('task').length;

	// 2. Determine the COMPLETED number of tasks
	var completedTasks = document.getElementsByClassName('is-complete').length;

	// 3. Calculate REMAINING by subtracting COMPLETED from TOTAL
	var remainingTasks = totalTasks - completedTasks;

	// 4. Get the counter element (by the id of `counter`)
	var counterEle = document.getElementById('counter');

	// 5. Update the inner text of Counter Element to REMAINING number
	counterEle.innerText = remainingTasks;
}



// ✅ Run the function you just wrote to update the counter
updateCounter();


// ✅ Add an event listener to each of the tasks which will 
//    toggle the 'is-complete' css class when clicked
// Hint: Start with pseudo-coding
// 1. Get all the tasks (they have a class name of `task`)
// 2. Loop over the tasks array, and add a click listener to each task
// 3. When a task is clicked ...
	// IF a task is completed, remove `is-complete` class
	// ELSE add the class `is-complete`


var tasks = document.getElementsByClassName('task');

for (var i = 0; i < tasks.length; i++) {
	tasks[i].addEventListener('click', function(event) {

		if (event.currentTarget.classList.contains('is-complete')) {
			event.currentTarget.classList.remove('is-complete');
		}
		else {
			event.currentTarget.classList.add('is-complete');
		}

		updateCounter();
	});
}






// ============================================
// 🤔 Other thoughts. Keep going!
// ============================================
// 🔘 How can you add more items to the list?
// 🔘 Instead of marking the items as `incomplete`, can
//    we just delete the task altogether?
// 🔘 Instead of counting the remaining tasks, can we count
//    how many tasks we've completed?


// ============================================
// 📝 Final notes
// ============================================
// How do we feel? What have we learned?
// - A lot! Our brains hurt!! 
// - Challenge: Go back and review our code in a few days 
//   from now, you'll be surprised how much more makes sense

// Where else can we write our code?
// - Use any text editors (e.g. Sublime, Atom, VS Code)
// - Create the files on your computer, the file extensions matter:
// - HTML extension => .html        (eg. about.html)
// - CSS extension => .css          (eg. about.css)
// - JavaScript extension => .js    (eg. about.js)




