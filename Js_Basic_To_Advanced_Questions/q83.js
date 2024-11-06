// Given an array and a target number, find the element in the array that is closest in value to the target.
// Example: nearestElement([1, 5, 8, 10, 12], 7) should return 8.
const arr = [1, 5, 8, 10, 12];
function nearestElement(arr, target) {
  let minDiff = 0;
  let nearest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (minDiff < target - arr[i]) {
      minDiff = arr[i] - target;
      nearest = arr[i];
    }
  }
  return nearest;
}
console.log(nearestElement(arr, 3));
