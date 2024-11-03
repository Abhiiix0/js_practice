// Write a function that takes two numbers and returns their sum. Set the second parameter to 10 by default.
function sum2Num(one, two = 5) {
  return one + two;
}
console.log(sum2Num(4));
