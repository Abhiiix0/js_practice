// Write a function greet that takes a greeting as a parameter (like "Hello") and returns a function that takes a name as a parameter and returns the greeting with the name.
// javascript

function greet(str) {
  return function (name) {
    return str + " " + name;
  };
} // this function return a another function that take name as an argument and greet user
const sayHello = greet("Hello");
console.log(sayHello("Abhishek")); // "Hello, Alice"
