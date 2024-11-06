// Write a function createMultiplier that takes a number as a parameter and returns a function that multiplies any given number by that number.

function createMultiplier(num) {
  return function (num2) {
    return num * num2;
  };
}
// it remeber it outer function arguments store in memory and used it with inner function
const double = createMultiplier(2);
console.log(double(5)); // 10
console.log(double(4)); // 10
