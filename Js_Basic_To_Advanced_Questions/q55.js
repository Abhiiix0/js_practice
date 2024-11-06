// Write a function createStepper that takes a number step and returns a function that, when called, increments a counter by that step.
function createStepper(num) {
  let count = 0;
  return function () {
    count += num;
    return count;
  };
}
const stepByTwo = createStepper(3);
console.log(stepByTwo()); // 2
console.log(stepByTwo()); // 4
console.log(stepByTwo()); // 6
