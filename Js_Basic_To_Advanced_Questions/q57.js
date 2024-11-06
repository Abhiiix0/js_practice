// Write a function once that takes a function fn and returns a new function that only allows fn to be executed once. Subsequent calls should return undefined.

function once(fn) {
  let executed = false;
  return function () {
    if (executed === false) {
      executed = true;
      fn();
    } else {
      console.log("undefined");
    }
  };
}

const logOnce = once(() => console.log("Hello"));
logOnce(); // "Hello"
logOnce(); // (does nothing)
logOnce(); // (does nothing)
logOnce(); // (does nothing)
logOnce(); // (does nothing)
