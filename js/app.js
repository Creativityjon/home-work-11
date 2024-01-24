// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
// 1-lesson

var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};


