// Flatten a Nested Array
function flattenArray(arr) {
  return arr.reduce(
    (flat, current) =>
      flat.concat(Array.isArray(current) ? flattenArray(current) : current),
    []
  );
}

console.log(flattenArray([1, [2, [3, [4, 5]]], 6])); // Output: [1, 2, 3, 4, 5, 6]
