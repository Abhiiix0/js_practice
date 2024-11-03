// Write a function that takes an array and returns a new array without any duplicate values using Set.
function uniqueArr(arr) {
  const newArr = new Set(arr);
  return [...newArr];
}
const arr = [2, 2, 4, 9, 1, 1];
console.log(uniqueArr(arr));
