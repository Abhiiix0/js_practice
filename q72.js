// Given an unsorted array, find all indices where a target element appears.
// Example: arr = [4, 5, 6, 5, 7, 5], target = 5
// Expected Output: [1, 3, 5]

const arr = [4, 5, 6, 5, 7, 5];
const target = 5;
function elementAppears(arr, target) {
  let indices = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) indices.push(i);
  }
  return indices;
}
console.log(elementAppears(arr, target));
