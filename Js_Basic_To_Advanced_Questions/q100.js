// Overriding: Redefining a method in the child class that already exists in the parent class.
class Animal {
  Eat() {
    return "eat eat eat";
  }
}
class Dog extends Animal {
  Eat() {
    return "dog eat dog eat";
  }
}
const animal = new Animal();
console.log(animal.Eat());
const dog = new Dog();
console.log(dog?.Eat());
