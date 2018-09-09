// *** Functional Programming: Refactor Global Variables Out of Functions ***

// 1) Don't alter a variable or object - create new variables and objects and return 
//    them if need be from a function.
// 2) Declare function arguments - any computation inside a function depends only on 
//    the arguments, and not on any global object or variable.

// ******************************************************************************* //


// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add (bookList, bookName) {
  var bookListCopy = bookList.slice();
  bookListCopy.push(bookName);
  return bookListCopy;
  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove (bookList, bookName) {
  var bookListCopy = bookList.slice();
  var idx = bookListCopy.indexOf(bookName);
  if (idx >= 0) {
    bookListCopy.splice(idx, 1);
    return bookListCopy;
    // Add your code above this line
  }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);