// Find the First Non-Repeating Character in a String
// Given a string, find the first character that does not repeat.
// Example: For "swiss", the function should return ‘w’.

const str = "swiwss";
function NonRepeatingChar(str) {
  let charCount = { char: "", count: 0 };

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        console.log(charCount);
        charCount.char = str[i]; // if char found in str so i set the char and count in obj
        charCount.count++;
      }
    }
    if (charCount.count === 1) {
      // if char count is 1 so we found the result that char does not repeat
      return charCount.char;
    }
    // reset the value on every loop to track the char count
    charCount.char = "";
    charCount.count = 0;
  }
}
console.log(NonRepeatingChar(str));
