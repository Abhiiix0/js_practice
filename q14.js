// Write a function that converts a JavaScript object to a JSON string.
const obj = {
  name: "John",
  age: 30,
  city: "New York",
};

// Convert to Json
function ConvertToJson(obj) {
  return JSON?.stringify(obj);
}
// Parse the json data
function JsonToParse(obj) {
  return JSON?.parse(obj);
}
console.log(ConvertToJson(obj));
