// leetcode 2703
// Write a function argumentsLength that returns the count of arguments passed to it.

const arr = [{}, null, "3"];
var argumentsLength = function (...args) {
  console.log(args);
  return args?.length;
};
console.log(argumentsLength(...arr));
