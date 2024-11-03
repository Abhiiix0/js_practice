// Extend the Person class to create a Student class with an additional property for grade. Use inheritance to define it.

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

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
}

const p1 = new Person("name", 12);
const s1 = new Student("Raj", 21, "88%");
console.log(s1);
