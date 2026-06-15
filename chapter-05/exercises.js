// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//I: create a function that takes in arrays as the paramaters
//O: Using the reduce and concat method return all arrays into one array
//C: reduce and concat
//E:
function flatten(arrays) {
  
  // use the reduce method over the array
  return arrays.reduce(function(acc, array2) {
    //accumulate the second array into the 1st array
    return acc.concat(array2);

  }, []);

}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//I: It should take a value, a test function, an update function, and a body function
//O: create a loop function that acts as a for loop
//C:
function loop(value, test, update, body) {
//run test function over current loop value
if (!test(value)){
//stop loop if false
return;
}
//call the body function and add the current loop value
body(value);

//last, call the update function to create a new value
let newVal = update(value);
//start loop over again/recursion
 loop(newVal, test, update, body);
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//I: create an every function that takes in parameters array and predicate
//O: create 2 versions, one using a loop and the other using the sum method
function every(array, predicate) {
  //loop method
for (var i = 0; i < array.length; i++) { 
  //if the predicate returns false the check fails
  if (!predicate(array[i])) {
    return false;
  }
}  
return true;
};

function every(array, predicate) {
  //some method
  //check if some elements does not match with the some element and invert using the bang operator
  return !array.some(element => !predicate(element));
}


// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//I: Create a function that determines the dominant direction of a string
//O: return "ltr", "rtl"
function dominantDirection(string) {
//create a variable ltr and initialize as empty array
var ltr = [];
//create a variable rtl and initialize as empty array
var rtl = [];
//iterate over a string using for loop
for (let i = 0; i < string.length; i++){
  //use helper function characterScript
  let script = characterScript(string.charCodeAt(i));
  //option if script wasn't returned
  if (script !== null) {
    if(script.direction === 'ltr') {
      ltr.push(script);
    } else {
      rtl.push(script);
    }
  }
}
if (ltr.length > rtl.length) {
  return 'ltr';
} else {
  return 'rtl';
}
};

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};