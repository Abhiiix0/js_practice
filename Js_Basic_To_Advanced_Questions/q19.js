// Create a function that combines two arrays into a new array using the spread operator.
function mergeTwoArr(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log(mergeTwoArr([1, 5, 8, 3], [0, 9, 7, 1]));
// const arr1 = [1, 5, 8, 3];
// const arr2 = [0, 9, 7, 1];
// console.log([...arr1, ...arr2]);
