// Given an array arr and a chunk size size, return a chunked array.
// A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.
// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.
const arrarys = [2, 8, 6, 2, 4, 0, 7, 3, 1];
var chunk = function (arr, size) {
  let arrs = [];
  for (let i = 0; i < arr.length; i += size) {
    arrs.push(arr.slice(i, i + size));
  }
  return arrs;
};
console.log(chunk(arrarys, 4));
