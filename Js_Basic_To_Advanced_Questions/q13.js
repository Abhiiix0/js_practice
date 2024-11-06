// Create a simple promise that resolves with the message "Promise resolved!" after 2 seconds.
const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved!");
  }, 2000);
});

// Write an async function that waits for a promise to resolve and then logs the result.
const data = async () => {
  const result = await promise;
  console.log(result);
};
data();
