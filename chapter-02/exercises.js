
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called `triangles` that takes in a parameter of a
number. This number determines the "size" of the triangle you need to log. 
HINT: each "level" of the triangle needs to be logged individually.

example: triangles(3);
LOGS =>

#
##
###

example: triangles(5);
LOGS =>

#
##
###
####
#####

*/
//I:Create a function called triangles that takes in a paramater og a number
//O:Returns a triangle based on the number argument.
//C:Must console log each level individually
//E:n/a

//make number a paramater in the function
function triangles(number) {
  //loop over the number to see how many rows we need to create
  for (var i = 0; i < number; i++) {
  // We create an empty string for the current level's # characters
  var level = '';
    
  // Inner loop to create'#' for the current row's level
  for (var j = 0; j <= i; j++) {
    level += '#';
  }
  
  // Log the completed level individually
  console.log(level);
}
}
console.log(triangles(5));

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called fizzBuzz that takes in two parameters - 
`start`, `end`. `start` and `end` both represent numbers. This function should
access each number from `start` to `end` and log different statements depending
on the number:

  - if the number is divisible by 3, log "fizz"
  - if the number is divisible by 5, log "buzz"
  - if the number is divisible by both 3 & 5, log "fizzbuzz"
  - if the number is not divisible by 3 or 5, log the number
*/
//I: create function that takes in a start and end number
//O: access each number and return fizz buzz statements based on the number
//C: n/a
//E: n/a

function fizzBuzz(start, end) {
  //loop over the numbers
  for (var i = start; i <= end; i++) {
    //test if the number is divisible by 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      //if so, log "fizzbuzz"
      console.log("fizzbuzz");
      //test if the number is divisible by 3
    } else if (i % 3 === 0) {  
    //if so, log "fizz"
      console.log("fizz");
    }
    //test if the number is divisible by 5
   else if (i % 5 === 0) {
    //if so, log 'buzz'
      console.log("buzz");
    //if number is not divisible by 3 0r 5
  } else {
    //log the number itself
    console.log(i);
  }
}
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called drawChessboard that takes in a parameter of
`x` that represents the "size" of the chessboard you are going to log. The chessboard
will be a collection of spaces and #'s creating the appearance of a chessboard.

Note: in order to do this correctly, you need to ultimately create a string containing
linebreak characters (\n). For example, if you invoke drawChessboard(3) it should log a
string that looks like this " # \n# #\n # \n# #"

example: drawChessboard(4);
LOGS =>

 # #
# #
 # #
# #

exampmle drawChessboard(3);
LOGS =>

 # 
# #
 #

*/
//I: create a chessboard function with the paramater x that represents the size of the chessboard
//O: a collection of spaces and #'s that resembles a chessboard
//C: create a string containing linebreak characters (\n)
//E: n/a

function drawChessboard(x) {
  //create a variable to hold the entire board
  var board = "";
  //loop over the number to see create rows and columns
  for (var i = 0; i < x; i++) {
    for (var j = 0; j < x; j++) {
      //If the sum of row and column is even, add a space. If odd, add a '#'
      if ((i + j) % 2 === 0) {
        board += " "; // Even coordinates get a space
      } else {
        board += "#"; // Odd coordinates get a hash
      }
    }
    //create a linebreak
    board += "\n";
  }
  
  console.log(board);
  return board; 
}
  
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}