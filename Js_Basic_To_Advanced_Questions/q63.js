// Create an object for a person with properties name and age. Write a function that adds a new property city to the object and updates the age.

const obj = {
  name: "John",
  age: 30,
  city: "Mumbai",
};
function updateObj(obj, newCity, newAge) {
  obj.age = newAge;
  obj.city = newCity;
  return obj;
}
console.log(updateObj(obj, "Up", 21));
