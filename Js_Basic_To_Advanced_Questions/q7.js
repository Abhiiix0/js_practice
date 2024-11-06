// Convert the following function into an arrow function
// function greet(name) {
//     return "Hello, " + name;
// }

const greet = (name) => {
  if (name === undefined || name === "") {
    return "Hello, Stranger";
  }
  return "Hello, " + name;
};
console.log(greet());
