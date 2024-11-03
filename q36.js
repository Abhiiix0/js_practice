// Write a function that returns the smallest number in an array.
const arr = [3, 6, 8, 8, 10, 1, 2];
// function smallestNumber(arr) {
//   return Math.min(...arr);
// }
function smallestNumber2(arr) {
  var LowestNum = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < LowestNum) {
      LowestNum = arr[i];
    }
  }
  return LowestNum;
}
console.log(smallestNumber2(arr));
