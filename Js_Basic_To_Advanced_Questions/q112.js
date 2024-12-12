// Write a function that sums an array of numbers, but each addition should happen with a delay of 1 second.
const numbers = [1, 2, 3, 4];

async function delayedSum(array) {
  let sum = 0;

  for (let num of array) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second
    sum += num;
  }

  return sum;
}

delayedSum(numbers).then(console.log); // Output: 10 (after 4 seconds)
