// Write a recursive function to calculate the factorial of a number.

// The function should take an integer as input and return the factorial.
function factorial(n) {
  // Base case: if n is 0 or 1, return 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Recursive case: call the function with n-1 and multiply the result by n
  else {
    console.log(n);
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));
