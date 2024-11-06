// Given an array and a target element, count the number of times the target appears in the array.
// Example: countOccurrences([5, 3, 5, 2, 5, 9], 5) should return 3.

const arr = [5, 3, 5, 2, 5, 9];
const target = 5;
function countOccurrences(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
}
console.log(countOccurrences(arr, 3));
