// Write a function that rotates an array to the right by k times. For example, rotating [1, 2, 3, 4, 5] by 2 would result in [4, 5, 1, 2, 3].
const arr = [2, 4, 1, 8, 0, 6, 9];
const k = 2;
function RotateArr(arr, k) {
  for (let i = 0; i < k; i++) {
    let temp = arr.pop();
    arr.unshift(temp);
  }
  return arr;
}
console.log(RotateArr(arr, k));
