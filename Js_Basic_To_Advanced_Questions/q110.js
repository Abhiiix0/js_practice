// Question: Group Objects by a Property

function groupByAge(people) {
  const grouped = {};

  people.forEach((person) => {
    const { age, name } = person;
    if (grouped[age]) {
      grouped[age].push(name);
    } else {
      grouped[age] = [name];
    }
  });

  return grouped;
}

// Test the function
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 30 },
  { name: "Eve", age: 35 },
];

console.log(groupByAge(people));
// Output:
// {
//   25: ['Alice', 'Charlie'],
//   30: ['Bob', 'David'],
//   35: ['Eve']
// }
