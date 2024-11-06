// Write a function called applyOperation that takes two numbers and a function as arguments and applies the function to the numbers.
function sumTwoNum(one, two) {
  return one + two;
}

function applyOperation(a, b, fun) {
  return fun(a, b);
}

console.log(applyOperation(4, 9, sumTwoNum));
