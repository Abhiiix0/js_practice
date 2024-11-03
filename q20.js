// Given an array [1, 2, 3, 4, 5], use destructuring to assign the first two elements to variables and the rest to another variable.
const arr = [1, 5, 8, 3, 6, 7];
const [first, second, ...rest] = arr;
const f1 = first;
const s2 = second;
const r = rest;

console.log(f1); // 1
console.log(s2); // 5
console.log(r); // [8, 3, 6, 7]
