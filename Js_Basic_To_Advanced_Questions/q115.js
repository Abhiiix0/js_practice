// Write a function findMostFrequent(arr) that takes an array of integers as input and returns the number that appears most frequently in the array. If there is a tie, return the smallest number among them.

function findMostFrequent(arr) {
  if (arr.length === 0) return null; // Handle edge case of an empty array

  const frequency = {};

  // Count the frequency of each number
  for (const num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  // Find the maximum frequency
  const maxFrequency = Math.max(...Object.values(frequency));

  // Filter keys with the maximum frequency
  const mostFrequentNumbers = Object.keys(frequency)
    .filter((key) => frequency[key] === maxFrequency)
    .map(Number);

  // Return the smallest number among them
  return Math.min(...mostFrequentNumbers);
}

// Test the function
const arr = [5, 5, 7, 8, 7, 1, 5, 5, 3, 3, 3];
console.log(findMostFrequent(arr)); // Output: 5

// console.log(findMostFrequent(arr));
