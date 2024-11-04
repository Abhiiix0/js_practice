// Write a function to count how many properties are in an object
const obj2 = {
  name: "John",
  age: 30,
  location: "Mumbai",
};

function ObjectPorperties(obj) {
  return Object.keys(obj).length;
}
console.log(ObjectPorperties(obj2));
