// Find the First Non-Repeated Character
const str = "swiss";

function firstNonRepeatedChar(string) {
  let elm = [];
  for (let i = 0; i < string.length; i++) {
    let element = 0;
    for (let j = 0; j < string.length; j++) {
      if (string[i] === string[j]) {
        element++;
      }
    }
    if (element === 1) {
      elm.push(string[i]);
    }
  }
  return elm.join("");
}

console.log(firstNonRepeatedChar(str)); // Output: 'w'
