// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
async function sleep(millis) {
  const result = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, millis);
  });
  let response = await result;
  // done
}
