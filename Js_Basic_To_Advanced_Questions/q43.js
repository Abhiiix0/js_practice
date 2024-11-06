// Write a function that finds all pairs of numbers in an array that add up to a specific target sum.
const arr = [4, 5, 2, 9, 7, 1, 2];
const target = 14;
function findPairs(arr, target) {
  let pair = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        pair.push([arr[i], arr[j]]);
      }
    }
  }
  return pair;
}
console.log(findPairs(arr, target));
