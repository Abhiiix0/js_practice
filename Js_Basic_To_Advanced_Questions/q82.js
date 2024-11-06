// Given an array and a target element, return an array of all indices where the target occurs.
// Example: allOccurrences([2, 4, 2, 5, 2], 2) should return [0, 2, 4]

const arr = [2, 4, 2, 5, 2];
(function allOccurrences(arr, target) {
  let newarr = [];
  for (let i = 0; i < arr?.length; i++) {
    if (arr[i] === target) {
      newarr.push(i);
    }
  }
  console.log(newarr);
})(arr, 4);
