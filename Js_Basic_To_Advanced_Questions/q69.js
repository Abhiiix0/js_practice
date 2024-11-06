// Given a sorted array of words, write a function that finds the first occurrence of a target word using binary search. If the word is not found, return -1.
const words = ["apple", "banana", "cherry", "date", "fig"];
const target = "date";
// Expected output: 2 (index of "cherry")
function BinarySearchWord(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let comparison = arr[mid].localeCompare(target);
    if (comparison === 0) {
      // If the word is found, check if it's the first occurrence
      return mid;
    }
    // If the word is less than the middle word, move the right pointer
    if (comparison < 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}

console.log(BinarySearchWord(words, target));
