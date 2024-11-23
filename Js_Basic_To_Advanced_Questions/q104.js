const arr = [4, 2, 8, 4, 2, 1, 7, 9, 8, 2, 6, 3, 1, 5, 4, 0, 1, 0];
function removeDuplicate(arr) {
  let newarr = [...new Set(arr)];
  let count = [];
  for (let i = 0; i < newarr.length - 1; i++) {
    if (newarr[i] % 2 !== 0) {
      count.push(newarr[i]);
    }
  }
  return count[1];
}
console.log(removeDuplicate(arr));
