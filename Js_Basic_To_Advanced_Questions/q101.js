// Objects

const obj = {
  name: "John",
  age: 30,
  location: "Mumbai",
};

// Accessing Properties
console.log(obj["age"]);
console.log(obj.name);

//adding properties
obj.country = "India";
console.log(obj);

//obj modification
obj.age = 31;
console.log(obj);

//delete property
delete obj.country;
console.log(obj);
