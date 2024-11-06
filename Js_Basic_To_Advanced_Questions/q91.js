// leetcode 2629
// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
// The function composition of an empty list of functions is the identity function f(x) = x.
// You may assume each function in the array accepts one integer as input and returns one integer as output.
const f1 = (x) => {
  //   console.log(x + 1);
  return x + 1;
};
const f2 = (x) => x * 2;
// const f3 = (x) => x - 3;

var compose = function (functions) {
  var val = 0;
  return function (x) {
    if (functions?.length === 0) {
      return x;
    }
    val = x;

    functions.forEach((fn, i) => {
      val = functions[functions?.length - 1 - i](val);
    });
    return val;
  };
};

const fun = compose([f1, f2]);
console.log(fun(4));
