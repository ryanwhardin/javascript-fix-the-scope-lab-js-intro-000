var animal = 'dog'

function myAnimal() {
  // You should not need to modify this function
  return animal
}

function yourAnimal() {
  // The tests expect this function to return `animal` just like the previous function
  // However, you cannot simply modify the existing variable declared on line 1 in the global scope
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: Hard-coding 'cat' below will not work
  var animal = 'cat'
  return animal
}

function add2(n) {
  const two = 2
  return n + two
  // Feel free to move things around!
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
<<<<<<< HEAD
var theFunk = funkyFunction()()
=======
<<<<<<< HEAD
var theFunk = "FUNKY!"
=======
var theFunk() = funkyFunction
>>>>>>> 1a3b2900736ddedfb9877c0ec191eb65dfdc0e34
>>>>>>> 500948e23c6f63863109857ed05b5e5684fffd2e
