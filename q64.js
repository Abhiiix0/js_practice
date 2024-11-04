// Write a function that checks if a given property exists in an object.

function hasProperty(obj, prop) {
  return obj.hasOwnProperty(prop);
}
const car = { brand: "Toyota", model: "Camry" };
console.log(hasProperty(car, "model")); // true
console.log(hasProperty(car, "year")); // false
