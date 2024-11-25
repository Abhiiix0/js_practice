// What will the following code output, and why?

console.log("Start"); //1

setTimeout(() => {
  console.log("Inside setTimeout"); //3
}, 1000);

console.log("End"); //2
