// Write a function that rearranges an array so that all even numbers appear first, followed by all odd numbers.
const arr = [2, 3, 9, 7, 8, 4, 5, 6];
function rearrangeArray(arr) {
  let NewArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      NewArr.unshift(arr[i]);
    } else {
      NewArr.push(arr[i]);
    }
  }
  return NewArr;
}
console.log(rearrangeArray(arr));
