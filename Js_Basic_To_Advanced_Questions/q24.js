// Define a class Person with properties for name and age and a method greet that logs a greeting with the person’s name.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age}
            years old.`);
  }
}
// \end{code}

const p1 = new Person("name", 12);
console.log(p1.greet());
