// Bubble Sort with string of array
const arr = ["apple", "Cat", "mango", "Ant", "ball"];

function BubleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j].toLowerCase() > arr[j + 1].toLowerCase()) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(BubleSort(arr));
