// Write a function that converts a string to title case (capitalize the first letter of each word and lowercase the rest).
const str = "this is a game";
// console.log(str.);
function toTitleCase(str) {
  let words = str.split(" ");
  let result = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  return result.join(" ");
}
console.log(toTitleCase(str));
