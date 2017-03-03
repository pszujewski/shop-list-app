// Authors: Franklin and Peter

/* 

To complete this challenge requires:

Using DOM manipulation and traversal to dynamically add and remove HTML elements and apply styles.
Linking to an externally hosted library (jQuery) and an locally hosted JavaScript file (app.js).
Using this and event delegation

Requirements:
In terms of user experience, your shopping list app must allow users to:

enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
check and uncheck items on the list by clicking the "Check" button
permanently remove items from the list

Additionally:

You must use a CDN-hosted version of jQuery
Put your application code in a file called app.js and link to it in index.html
Be sure to put both script elements at the bottom of the <body> element.
Do not alter index.html or main.css other than adding the links to the external JavaScript. Write JavaScript code that works with the existing HTML and CSS to implement the required features.
Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), toggleClass(), and closest(). */


// State Object:

// items, empty array
// What will each item look like?
// each item will be an Object
// name of item, isChecked (true or false)... etc.

var state = {
  items: []
};


// Functions that will modify the state object (CRUD):

// add function to add items
// use array method push to add items to 'items array'

function addToList(state, item) {
  state.items.push( { name: item , isChecked: false } );
}

// remove function to delete items from array
// use array method splice

function deleteItem(state, index) {
  state.items.splice( index, 1 );
}

// function to modify the ischecked value for any clicked item

function modify(state, index) {
  // Toggle the check logic
  if ( state.items[index].isChecked ) {
    state.items[index].isChecked = false;
  } else {
    state.items[index].isChecked = true;
  }
}


// Render Functions:

// take the li element as the base html string to manipuate

// First Render function build out our HTML string for the list item
// need to input state and html string were going to build out

function makeHtml(item, index) {
  // Ensure function determines within our state object if the items isChecked property is true
  // if it is true, add class 
  let checked = '<li id='+index+'> <span class="shopping-item shopping-item__checked">';
  let unChecked = '<li id='+index+'> <span class="shopping-item">';
  let endStr = item["name"] + '</span> <div class="shopping-item-controls"> <button class="shopping-item-toggle"> <span class="button-label"> check </span> </button> <button class="shopping-item-delete"> <span class="button-label"> delete </span> </button> </div> </li>';
  //Ternary condition
  return item['isChecked'] ? checked + endStr : unChecked + endStr;
}
  // Standard if else condition:
  // if (item['isChecked']) {
  //   return checked + endStr;
  // } else {
  //   return unChecked + endStr;
  // }


// create second Render Function:
// each element in the item array will be passed in, return html string for that item,
// ^ this function will appear in the body of the callback function in the map method below.

function render(state, $element) {
  // assign to new array the strings containing our html for each list element
  // use array method map to iterate thru state object items array
  var listHtml = state.items.map( function(item, index) {
    return makeHtml(item, index);
  });
  // render the html strings in the dom using the jQuery html method
  $element.html(listHtml);
}





// Event listeners:


// Listen for click event on the button
function handleAddItem($btn, $input, $element) {
  $btn.on('click', function(e){
    // and obtain value of user's input
    let usersInput = $input.val();
    // Use add function to add input into the items array
    addToList(state, usersInput);
    // invoke render function
    render(state, $element);
    //empty out input field
    $input.val('');
    e.preventDefault();
  });
}



// Listen for click event on the check button
// use this keyword to identify which item was clicked
// call state modifcation function to change is checked value for that item
// invoke render function

function checkButton(state, $element) {
  $element.on('click', '.shopping-item-toggle', function(e){
    var id = $(e.currentTarget).parents('li').attr('id');
    modify(state, id);
    render(state, $element);
    // console.log(id);
  });
}



// Listen for click event on the delete button
// use this keyword to identify which item was clicked
// call state modifcation function to delete the item
// invoke render function

function deleteButton(state, $element) {
  $element.on('click', '.shopping-item-delete', function(e){
    var id = $(e.currentTarget).parents('li').attr('id');
    deleteItem(state, id);
    render(state, $element);
    // console.log(id);
  });
}


//Invocation of all functions:

$(function() {
  handleAddItem($('.btn'), $("#shopping-list-entry"), $(".shopping-list"));
  checkButton(state, $(".shopping-list"));
  deleteButton(state, $(".shopping-list"));
});

