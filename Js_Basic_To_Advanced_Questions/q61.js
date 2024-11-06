// Write a function to calculate the factorial of a given number n using recursion

function RecursionOfNum(n) {
  if (n === 0 || n === 1) return 1;
  console.log("hi", n);
  return n * RecursionOfNum(n - 1); // minus one variable from argument and pass  first its value is 5 and thn its 4
}
RecursionOfNum(5);
// console.log(RecursionOfNum(5));
