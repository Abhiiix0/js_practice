// Write a function that takes an array of numbers and returns a new array containing only the even numbers.
const arr = [4, 5, 3, 8, 2, 4, 1, 6];
function evenNumber() {
  var newArr = [];
  for (let i = 0; i < arr?.length; i++) {
    if (arr[i] % 2 === 0) {
      //   console.log(arr[i] % 2);
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(evenNumber(arr));
