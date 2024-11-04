// Cache Function (Memoization)
// Write a function memoize that takes a function fn and returns a memoized version of fn. The memoized function should cache results based on its arguments.

function memoize(fn) {
  const cache = []; // created a array in memory this will stay live even if its outer function finished exucting
  return function (...args) {
    // ...args means take arguments in an array format
    const key = JSON.stringify(args); // create a key with the help of arguments e.g : [1,2]
    if (cache[key]) {
      // Search for that key in an array if found in cache then it will directly retun its value form array of cache
      return cache[key];
    } else {
      // if not found it will create a new key and value pair and add to the array  thn return
      const result = fn(...args); // e.g : [ '[1,2]': 5] like this
      cache[key] = result;
      console.log(cache);
      return result;
    }
  };
}
const memoizedAdd = memoize((x, y) => x + y);
console.log(memoizedAdd(2, 3)); // 5 (computed)
console.log(memoizedAdd(2, 3)); // 5 (cached)
console.log(memoizedAdd(2, 6)); // 5 (computed)
