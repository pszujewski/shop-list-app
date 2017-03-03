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


// State Object

// items, empty array
// What will each item look like?
// each item will be an Object
// name of item, isChecked (true or false)... etc.
var state = {
  items: [ {name:"fruits", isChecked:false } ];
};


// Functions that will modify the state object (CRUD):

// add function to add items
// use array method push to add items to 'items array'

// remove function to delete items from array
// use array method splice

// function to change the ischecked value for any clicked item


// Render Functions
// take the li element as the base html string to manipuate

// create function : each element in the item array will be passed in, return html string for that item,
// ^ this function will appear in the body of the callback function in the map method below.

// use array method map to iterate thru state object items array

// assign to new array the strings containing our html for each list element
// render the html strings in the dom using the jQuery html method


// Event listeners

// Listen for click event on the button
// and obtain value of user's input
// Use add function to add input into the items array, invoke render function

// Listen for click event on the check button
// use this keyword to identify which item was clicked
// call state modifcation function to change is checked value for that item
// invoke render function

// Listen for click event on the delete button
// use this keyword to identify which item was clicked
// call state modifcation function to delete the item
// invoke render function

