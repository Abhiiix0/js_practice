// Write a function that returns another function which adds a given number to its argument.
function takeNum(num) {
  return function (x) {
    return num + x;
  };
}

const ReturnFun = takeNum(10); //return a function that contain num so if i call returnFun with 3 as an argument so it will sum arguments of takenum and returnFun arguments
console.log(ReturnFun(3)); // prints 13
