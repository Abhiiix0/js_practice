// Given a sorted array of numbers with possible duplicates, find the starting and ending index of a target number using binary search. If the target is not found, return [-1, -1].

const arr = [1, 2, 3, 3, 3, 4, 5, 8];
const target = 5;
// Expected output: [2, 4] (range of the target 3)

function FindStart(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let start = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      start = mid;
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return start;
}
function FindEnd(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let end = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      end = mid;
      left = mid + 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return end;
}
function binarySearch(arr, target) {
  let start = FindStart(arr, target);
  let end = FindEnd(arr, target);
  return [start, end];
}
console.log(binarySearch(arr, target));
