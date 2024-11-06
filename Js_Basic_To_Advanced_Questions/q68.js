// Write a function using binary search to find the index of a target number in a sorted array of numbers. If the target is not found, return -1.
const arr = [1, 3, 5, 7, 9, 80, 54, 88, 12, 6, 9, 54];
const target = 5;
function BinarySearch(arr, target) {
  let left = 0;
  let right = arr?.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log("mid", mid);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
console.log(BinarySearch(arr, target));
