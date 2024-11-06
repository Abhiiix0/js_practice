// Write a function delay that takes a function fn and a delay time (in ms). It should return a new function that, when called, waits for the delay time before executing fn.

function delay(fn, time) {
  return function () {
    setTimeout(fn, time);
  };
}

const delayedLog = delay(() => console.log("Delayed run"), 1000);
delayedLog(); // Logs "Delayed" after 1 second
