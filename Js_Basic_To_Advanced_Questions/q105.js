// Given an array arr and a chunk size size, return a chunked array.
var chunk = function (arr, size) {
  let arrs = [];
  for (let i = 0; i < arr.length; i += size) {
    arrs.push(arr.slice(i, i + size));
  }
  return arrs;
};
