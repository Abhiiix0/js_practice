// Write a function that sorts an array of numbers in descending order.

const arr = [2, 3, 5, 1, 9, 0];
function sortArr(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(sortArr(arr));
