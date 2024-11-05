// Write a function that moves all zeros to the end of the array without changing the order of the other elements.
// Example: For [0, 1, 0, 3, 12], the function should return [1, 3, 12, 0, 0].
let arr = [0, 1, 0, 0, 3, 12];
function moveZerosToEnd(arr) {
  let newArr = [];
  let count = [];
  for (let i = 0; i < arr?.length; i++) {
    if (arr[i] === 0) {
      count.push(0);
    } else {
      newArr.push(arr[i]);
    }
  }
  console.log([...newArr, ...count]);
}
moveZerosToEnd(arr);
