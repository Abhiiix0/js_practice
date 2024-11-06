// Write a function that takes an array of numbers and returns the sum of all the numbers using the reduce method.
const numbers = [1, 2, 3, 4, 5, 8, 7];
const newNum = numbers.reduce((prv, curr) => prv + curr);
console.log(newNum);
