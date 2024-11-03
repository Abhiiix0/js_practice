// Given an object with properties firstName and lastName, use destructuring to create two variables.
const obj = {
  FirstName: "Abhishek",
  LastName: "Nayak",
};

const { FirstName, LastName } = obj; // destructuring
console.log("FirstName", FirstName);
console.log("LastName", LastName);
