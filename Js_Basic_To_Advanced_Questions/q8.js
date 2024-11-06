// Write a function that filters out all numbers less than 10 from an array.

const arr = [11, 5, 8, 52, 0, 8, 22, 9];
function lessthn10(arr) {
  var newarr = [];
  for (let i = 0; i < arr?.length; i++) {
    if (arr[i] < 10) {
      newarr.push(arr[i]);
    }
  }
  return newarr;
}
console.log(lessthn10(arr));
