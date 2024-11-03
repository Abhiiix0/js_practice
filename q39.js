// Write a function that finds the intersection (common elements) of two arrays.
const arr1 = [9, 1, 3, 7, 0];
const arr2 = [4, 1, 8, 7];

function findIntersection(arr1, arr2) {
  const newarr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        newarr.push(arr1[i]);
      }
    }
  }
  return newarr;
}
console.log(findIntersection(arr1, arr2));
