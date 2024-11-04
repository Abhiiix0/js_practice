// Write a function that removes all duplicate characters from a string, keeping only the first occurrences.
const str = "tanmay";
function RemoveDuplicateFromArr(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    console.log(newStr.indexOf(str[i].toLowerCase()));
    if (newStr.indexOf(str[i].toLowerCase()) == -1) {
      newStr += str[i];
    }
  }
  return newStr;
}
console.log(RemoveDuplicateFromArr(str));
