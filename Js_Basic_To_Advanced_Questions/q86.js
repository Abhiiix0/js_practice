// Counting the Number of Swaps in Bubble Sort
const arr = [3, 2, 9, 7, 4, 7];
function Bubblesort(arr) {
  const n = arr?.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
        count++;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return count;
}
console.log(Bubblesort(arr));
