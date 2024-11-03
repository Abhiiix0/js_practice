// Create an array of numbers and write a function to find the maximum number in that array.
function MaxNumINArr(arr) {
  var max = 0;
  for (let i = 0; i < arr?.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}
const arr = [5, 2, 9, 0, 6, 3];
console.log(MaxNumINArr(arr));
