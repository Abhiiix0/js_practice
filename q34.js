// Write a function that reverses the elements of an array.
function ReversedArr(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr?.unshift(arr[i]);
  }
  return newArr;
}
const arr = [2, 9, 4, 1, 0]; //0, 1, 4, 9, 2

// without creating new arr
function ReversedArr2(arr) {
  for (let i = 0; i < 2; i++) {
    const temp1 = arr[i];
    const temp2 = arr[arr.length - 1 - i];
    arr[i] = temp2;
    arr[arr.length - 1 - i] = temp1;
  }
  return arr;
}
console.log(ReversedArr2(arr));
