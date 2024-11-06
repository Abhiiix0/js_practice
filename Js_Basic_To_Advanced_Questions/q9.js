// Write a function that takes an array of numbers and returns a new array with each number squared.
const arr = [4, 2, 8, 9, 2];
// square formula 5 x 5 = 25

function squareNumbers(arr) {
  let squaredArr = [];
  for (let i = 0; i < arr.length; i++) {
    squaredArr.push(arr[i] * arr[i]);
  }
  return squaredArr;
}
console.log(squareNumbers(arr));
