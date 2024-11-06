// Write a function arrayManipulator that takes an array and returns two functions: add (adds an element to the array) and get (returns the array) Array Manipulator.

function arrayManipulator(arr) {
  let array = [...arr];
  return {
    add: function (num) {
      array.push(num);
    },
    get: function () {
      return array;
    },
    delete: function (del) {
      array.splice(array.indexOf(del), 1);
    },
  };
}
const arrManipulator = arrayManipulator([1, 2, 3]);
arrManipulator.add(4);
arrManipulator.delete(2);
console.log(arrManipulator.get()); // [1, 2, 3, 4]
