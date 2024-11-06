// Given a sorted array of words, write a function using binary search to check if a specific word exists in the array. If it exists, return true; otherwise, return false.
const words = ["cat", "dog", "elephant", "giraffe", "lion"];
const target = "giraffe";
// Expected output: true
function binarySearch(words, target) {
  let left = 0;
  let right = words.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let comparison = words[mid].localeCompare(target);

    if (comparison === 0) {
      return true;
    } else if (comparison < 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}

console.log(binarySearch(words, target));
