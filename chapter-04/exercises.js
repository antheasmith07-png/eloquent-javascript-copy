////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: create a range function that takes in a range of numbers with parameters start and end
//O: return all the range of numbers
//C: n/a
//: n/a
function range(start, end, step = 1) {
  if (start === end) {
    return [];
  }
  if (step < 0) {
    return [];
  }
    //create an array to store the output
    const output = [];
  //iterate over the range with the beginning being start and the last item in the array being end
  for (i = start; i <= end; i += step) {
    //push to array that sorts values in order
    output.push(i);
  }
    // return all values in the range
    return output;
}



////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: Create a function that takes in array of numbers
//O: returns a sum of those numbers
function sum(array) {
  //create an output for the sum to be collected
  let output = 0;
  //loop over every number in the array and then add to output
  for (i = 0; i < array.length; i++) {
    output += array[i];
  }
    return output;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: take an array as its argument and 
//O: produce a new array that has the same elements in the inverse order.
function reverseArray(array) {
  //create a variable to hold our new array
  let reverse = [];
  //create a for loop that iterates backwards
for (let i = array.length - 1; i >= 0; i--){ 
  //push values from array into the reverse variable
  reverse.push(array[i]);
}
return reverse;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: take in the reverse array as its argument and 
//O: produce a new array that has the same elements in the inverse order.

function reverseArrayInPlace(array) {
  //create variables to represent each end of the array
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    // Swap elements using a temporary variable
    let inPlace = array[left];
    array[left] = array[right];
    array[right] = inPlace;

    // Move towards the middle
    left++;
    right--;
  }
  return array;
}


////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: Take in array
//O: output a nested list like the example in Eloquent Javascript text
function arrayToList(array) {
  //create a variable for list
  let list = null;
  //iterate through the array backwards so you can 
  //nest each deeper object inside the previous one.
  for (let i = array.length - 1; i >= 0; i--) {
    //create a nesting structure and assign it to list
    list = { value: array[i], rest: list };
  }
  
  return list;
}
      

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: create a function that takes in a list as a paramater
//O: return that list as an Array
//C:
//E: Add the helper functions prepend, which
//takes an element and a list and creates a new list that adds the element to the
//front of the input list, and nth, which takes a list and a number and returns
//the element at the given position in the list (with zero referring to the first
//element) or undefined when there is no such element.If you haven’t already, also write a recursive version of nth.
function listToArray(list) {
  //create an output for our list to be converted to an array
  let array = [];
  //use a for loop to iterate over the list, if the node is not null then it will move
  //to the next nested object referred to as node.rest
  for (let node = list; node !== null; node = node.rest) {
    //push the value of the node into the array
    array.push(node.value);
  }
  
  return array;
}


////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I:create a helper function that takes an element and a list 
//O: Then creates a new list that adds the element to the front of the input list
function prepend(element, list) {
  //adds a new element to the front of a list by creating a 
  //new head node and pointing its rest property to the existing list
  return {value: element, rest: list}
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: function nth, takes a list and a number 
//O:returns the element at the given position in the list 
//C: 
//E:(with zero referring to the first element) or undefined when there is no such element

function nth(list, n) {
  let position = 0;
  //loop over the nested elements in the list
  for (node = list; node !== null; node = node.rest) {
    //see if the value of position equals number
    if (position === n) 
      return node.value;
        //move to the next value
        position++;
    
    }
    //if the element does not exist return undefined
      return undefined;
  }

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: a function that takes in 2 values and compares if they are deeply equal
//O: returns true if the values or properties of an object is true, do a recursive call on deepEqual
//C:
//E: use typeof to determine if the values are an not an object or null and shouldn't be deeply compared
function deepEqual(val1, val2) {
//Check if the values deeply compare, if so return true
if (val1 === val2)
    return true;
  //test for non objects and null, if so return false
  if (val1 == null || typeof val1 !== 'object' || val2 === null || typeof val2 !== 'object') {
   return false;
  }
  //get the keys for each object
  let keys1 = Object.keys(val1);
  let keys2 = Object.keys(val2);
  //test to see if they are not deeply equal by using length property
  if (keys1.length !== keys2.length)
    return false;
  //recursion
  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(val1[key], val2[key])) {
      return false;
    }
  }
      //if it does deeply equal
      return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};