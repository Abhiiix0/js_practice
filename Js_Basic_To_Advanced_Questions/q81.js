// Write a function that finds the last occurrence of a target element in an array.
// Example: lastOccurrence([3, 4, 5, 3, 7, 3], 3) should return 5.
const arr = [3, 4, 7, 5, 3, 8, 3];
function lastOccurrence(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[arr.length - 1 - i] === target) {
      return arr.length - 1 - i;
    }
  }
  return -1;
}
console.log(lastOccurrence(arr, 7));
