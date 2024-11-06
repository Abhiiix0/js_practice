// Given a binary array (containing only 0s and 1s), find the maximum number of consecutive 1s.
// Example: For [1, 1, 0, 1, 1, 1], the function should return 3.

const arr = [1, 0, 1, 0, 1, 1];
const maxConsecutiveOnes = (arr) => {
  let max = 0;
  let current = 0;
  let char = "";

  for (let i = 0; i < arr.length; i++) {
    if (char === arr[i]) {
      current++;
    } else {
      char = arr[i];
      max = Math.max(max, current);
      current = 1;
    }
  }

  return Math.max(max, current);
};
console.log(maxConsecutiveOnes(arr));
