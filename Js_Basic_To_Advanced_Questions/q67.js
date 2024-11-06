// Write a function to count the occurrences of a specific target element in an array using linear search.
const arr = [1, 2, 3, 4, 2, 2, 5];
const target = 2;
// Expected output: 3 (2 occurs three times)
function FindOccurrences(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
}
console.log(FindOccurrences(arr, target));
