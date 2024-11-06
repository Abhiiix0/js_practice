// Write a function that replaces all spaces in a string with hyphens (-).
const str = "this is string for testing purpose";
// function replaceSpacesWithHyphens(str) {
//   return str.replace(/ /g, "-");
// }

function replaceSpacesWithHyphens(str) {
  let strs = str.split("");
  for (let i = 0; i < strs.length; i++) {
    if (strs[i] === " ") {
      strs[i] = "-";
    }
  }
  return strs.join("");
}

console.log(replaceSpacesWithHyphens(str));
