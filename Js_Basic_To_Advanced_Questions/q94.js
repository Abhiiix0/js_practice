// LeetCode 2623
function memoize(fn) {
  const memoizesVal = {};
  return function (...args) {
    const key = String(args);
    if (key in memoizesVal) {
      return memoizesVal[key];
    } else {
      const result = fn(...args);
      memoizesVal[key] = result;
      return result;
    }
  };
}
const sum = (a, b) => a + b;
const runfun = memoize(sum);
console.log(runfun(2, 2));
console.log(runfun(2, 3));
