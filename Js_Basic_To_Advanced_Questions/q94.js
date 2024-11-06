function memoize(fn) {
  const memoizesVal = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (memoizesVal[key]) {
      console.log("memo");
      return memoizesVal[key];
    } else {
      console.log("new");
      const result = fn(...args);
      memoizesVal[key] = result;
    }

    return Object.values(memoizesVal);
  };
}
const sum = (a, b) => a + b;
const runfun = memoize(sum);
console.log(runfun(2, 2));
console.log(runfun(2, 3));
