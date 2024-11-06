// Write a function to return the n-th number in the Fibonacci sequence.
function Fibonacci(n) {
  //   console.log(n);
  if (n <= 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}
console.log(Fibonacci(6));
