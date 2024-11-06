// Write a function that removes all duplicates from an array.
const arr = [2, 1, 4, 1, 8, 8, 9];
// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

function removeDuplicates2(arr) {
  var newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(removeDuplicates2(arr));
