// Write a function that takes a number and returns "Positive" if it's greater than zero, "Negative" if it's less than zero, and "Zero" if it's equal to zero.

function PositiveAndNegative(num) {
  if (num === 0) {
    return "Zero";
  }
  return num >= 0 ? "Positive" : "Negative";
}
console.log(PositiveAndNegative(5)); // "Positive"
console.log(PositiveAndNegative(-1)); // "Negative"
console.log(PositiveAndNegative(0));
