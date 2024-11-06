// Given an array and a target number, return the index of the first element greater than the target.
// Example: firstGreaterThan([3, 5, 8, 4, 7], 4) should return 2 (element 8).
const arr = [3, 5, 8, 4, 7];
function firstGreaterThan(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > target) {
      return i;
    }
  }
  return -1;
}
console.log(firstGreaterThan(arr, 2));
