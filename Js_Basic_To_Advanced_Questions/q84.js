// bubble short
let arr = [3, 1, 9, 8, 1, 2, 0, 7];

function BubbleSort(arr) {
  let n = arr?.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp1 = arr[j];
        const temp2 = arr[j + 1];
        arr[j + 1] = temp1;
        arr[j] = temp2;
      }
    }
  }
  return arr;
}
console.log(BubbleSort(arr));
