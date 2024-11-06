// Write a function rateLimiter that takes a function fn and an interval time (in ms). It should return a function that only allows fn to be called once within that interval.

function rateLimiter(fn, interval) {
  let lastCall = 0;
  return function () {
    const now = Date.now();
    console.log(now);
    if (now - lastCall > interval) {
      console.log("1", now - lastCall);
      lastCall = now;
      return fn();
    }
    console.log("2", now - lastCall);
  };
}

const limitedLog = rateLimiter(() => console.log("Hello"), 1000);
limitedLog(); // "Hello"
limitedLog(); // (does nothing if called within 1 second)
