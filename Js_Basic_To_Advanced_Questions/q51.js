// Write a function createCounter that returns a function. Every time the returned function is called, it should increment and return a count value that starts at 1

function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
// createCounter function return the one function and that function keeps a refrence to its surrounding environment
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
