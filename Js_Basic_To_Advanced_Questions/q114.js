// Find the Frequency of Each Element in an Array
function frequencyCount(arr) {
  return arr.reduce((freq, num) => {
    freq[num] = (freq[num] || 0) + 1;
    return freq;
  }, {});
}

console.log(frequencyCount([1, 2, 2, 3, 3, 3, 4]));
// Output: { '1': 1, '2': 2, '3': 3, '4': 1 }
