// Write a function that sorts an array of numbers in ascending order.
const arr = [5, 8, 7, 2, 3, 1];
function sortArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        // Swap values
        const temp1 = arr[j];
        const temp2 = arr[j + 1];
        arr[j] = temp2;
        arr[j + 1] = temp1;
      }
    }
  }
  return arr;
}
console.log(sortArr(arr));
