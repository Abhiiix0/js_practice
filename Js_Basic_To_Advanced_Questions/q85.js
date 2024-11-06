// Modify the Bubble Sort function to stop early if the array becomes sorted before all passes are completed. This improves efficiency for nearly sorted arrays.

const arr = [8, 1, 4, 2, 7, 2, 9];
function BubbleSortWithOptimization(arr) {
  const n = arr?.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp1 = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp1;
        swapped = true;
      }
    }
    if (swapped === false) {
      break;
    }
  }
  return arr;
}
console.log(BubbleSortWithOptimization(arr));
