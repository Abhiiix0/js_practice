// Given a sorted array and a target, return the index where the target should be inserted to maintain order. If the target already exists, return its index.
// Example: arr = [1, 3, 5, 6], target = 4
// Expected Output: 2 (4 should be inserted at index 2)

const arr = [1, 3, 4, 6, 9, 11, 15, 20, 21, 23, 24];
function insertNum(arr, target) {
  let left = 0;
  let right = arr?.length - 1;
  let val = 0;
  if (arr[arr.length - 1] < target) {
    return arr.length - 1;
  } else if (arr[0] > target) {
    return 0;
  }
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    // console.log(mid);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}
console.log(insertNum(arr, 10));
