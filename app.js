// Authors: Franklin and Peter

// State Object
// items, empty array
// What will each item look like?
// each item will be an Object
// name of item, isChecked (true or false)... etc.
var state = {
  items: [ {name:"fruits", isChecked:false } ];
};

// Functions that will modify the state object (CRUD)
// add function to add items
// use array method push to add items to 'items array'
// remove function to delete items from array
// use array method splice
// function to change the ischecked value for any clicked item

// Render Functions
// take the li element as the base html string to manipuate
// use array method map to iterate thru state object items array
// assign to new array the strings containing our html for each list element
// render the html strings in the dom using the jQuery html method

// Event listeners
