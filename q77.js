// Given an array and a target sum, find all unique pairs of numbers that add up to the target.
// Example: For [1, 3, 2, 2, 3, 5, 0] and target = 5, the output should be pairs such as [3, 2].
const arr = [1, 3, 2, 2, 3, 5, 0];
const target = 5;
const findPairs = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
};
console.log(findPairs(arr, 4));
