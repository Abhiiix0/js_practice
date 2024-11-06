// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const arr = [1, 2, 3, 8, 9];

function DuplicateVal(arr) {
  const seen = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) {
      return true;
    }
    seen.add(arr[i]);
  }
  return false;
}

console.log(DuplicateVal(arr));
