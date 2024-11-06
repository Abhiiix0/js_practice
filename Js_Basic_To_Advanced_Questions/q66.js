// linear search algorithm
// Time Complexity:  O(n)
// Usage: Best suited for unsorted arrays and small datasets.

// Write a function using linear search to find a target element in an array. If the element is found, return the index of the element; if not, return -1.
const arr = [50, 20, 30, 10, 40];
const target = 30;

function LinearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(LinearSearch(arr, 20));
