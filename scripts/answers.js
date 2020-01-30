// First let's practice using events. 
// TIP - Comment out the previous exercise when starting the next one
// console.log("test");



// 1. Get the browser to write to the console when someone clicks anywhere in the document

// document.addEventListener('click', function() {
//   console.log("You clicked the document!");
// });


// 2. Change the text of the h1 that displays the page title when someone clicks anywhere in the page

// document.addEventListener('click', function() { 
//   document.getElementsByTagName('h1')[0].innerText = "Clicked!";
// });



// 3. Display an alert when someone clicks any of the tasks

// var taskItems = document.getElementsByClassName('task');

// for (var i = 0; i < taskItems.length; i++) {
//   taskItems[i].addEventListener('click', function() {
//     console.log(this.innerText);
//   });
// }


// 4 => (Refactor code above)
// 4a. Write a function that displays an alert
// 4b. Run the function only when any task is clicked

// function logText() {
//   console.log(this.innerText);
// }

// var taskItems = document.getElementsByClassName('task');

// for (var i = 0; i < taskItems.length; i++) {
//   taskItems[i].addEventListener('click', logText);
// }



// Now let's get the application to do what it needs to do
// Write a function that updates the counter based on which tasks are completed

// TODO:
// Pseudo code the steps below 👇
/*
  - get all the `tasks` from our page to figure out the number of tasks on the list
  - determine how many tasks are completed (figure out which elements have the class of `is-complete`)
  - calculate the difference between all-tasks and completed-tasks to get the `# of items left` amount
  - update the `<strong>` element with id of `counter` with the new number
*/

function updateCounter() {
  var allTaskItems = document.getElementsByClassName('task').length;
  console.log(allTaskItems);
  var completedTaskItems = document.getElementsByClassName('is-complete').length;
  var itemsLeftOver = allTaskItems - completedTaskItems;

  document.getElementById('counter').innerText = itemsLeftOver;
}

// Run the function you just wrote to update the counter
updateCounter();



// Add an event listener to each of the tasks which will toggle the 'is-complete' css class when clicked

// TODO:
// Pseudo code the steps below 👇
/*
  - Grab all the elements with the class of `task`
  - Loop through all `task` items and `addEventListener` of `click`
  - Inside the click, the function should check IF the task is completed, we will REMOVE the class of "is-complete" ...
  - ELSE if the task is NOT complete, we will ADD the class of "is-complete"
  - Lastly, update the counter to reflect the new count
*/

var allTasks = document.getElementsByClassName('task');

for (var i = 0; i < allTasks.length; i++) {
  allTasks[i].addEventListener('click', function() {
    if ( this.classList.contains('is-complete') ) {
      this.classList.remove('is-complete');
    } 
    else {
      this.classList.add('is-complete');
    }

    updateCounter();
  });
}


// ANOTHER SET OF ANSWERS:
// Now let's get the application to do what it needs to do
// Write a function that updates the counter based on which tasks are completed
function updateCounter() {
  var allTasks = document.getElementsByClassName('task');
  var completedTasks = document.getElementsByClassName('is-complete');
  var counter = document.getElementById('counter');
  counter.innerHTML = allTasks.length - completedTasks.length;
}


// Run the function you just wrote to update the counter

updateCounter();


// 
document.getElementById('add-task').addEventListener('click', function() {
  var newTaskItemText = document.getElementById('new-task').value;
  var newTaskItemLi = document.createElement('li');
  newTaskItemLi.classList.add('task');
  newTaskItemLi.innerHTML = "<a>" + newTaskItemText + "</a>";
  
  document.getElementById('tasks-list').appendChild(newTaskItemLi);
  
  document.getElementById('new-task').value = "";
});

document.getElementById('tasks-list').addEventListener('click', function(event) {
  if (event.target.classList.contains('task')) {
    event.target.classList.toggle('is-complete');
  }
});










/* BONUS! If there's extra time and we run out of things to do ...
- Let's add the functionality to add new items to the list. Warning! The code below definitely needs to be refactored.
- On click of the button ...  
  - Get the text from input
  - Create a new <li> element
  - 
*/

document.getElementById('submit').addEventListener('click', function() {
  var inputText = document.getElementById('item-field').value;

  if(inputText === "") {
    return false;
  } 
  else {
    var itemNode = document.getElementsByClassName('task')[0];
    var newTaskItem = itemNode.cloneNode(true);

    newTaskItem.innerHTML = "<a>" + inputText + "</a>";

    newTaskItem.addEventListener('click', function() {
      if ( this.classList.contains('is-complete') ) {
        this.classList.remove('is-complete');
      } 
      else {
        this.classList.add('is-complete');
      }

      updateCounter();
    });

    document.getElementById('tasks-list').appendChild(newTaskItem);
    
    document.getElementById('item-field').value = "";
    updateCounter();
  }
  
});