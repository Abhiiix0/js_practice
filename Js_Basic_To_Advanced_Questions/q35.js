// Write a function that returns the largest number in a given array.
const arr = [3, 1, 0, 15, 9, 7];
function LargestNum(arr) {
  var LargestN = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > LargestN) {
      LargestN = arr[i];
    }
  }
  return LargestN;
}
console.log(LargestNum(arr));
