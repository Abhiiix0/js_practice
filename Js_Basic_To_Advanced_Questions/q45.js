// Write a function that counts the number of vowels (a, e, i, o, u) in a given string.

const vowel = ["a", "e", "i", "o", "u"];
const str = "What are you doing";
// console.log(str.split(""));
function countVowels() {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowel?.includes(str[i])) {
      count++;
    }
  }
  console.log(count);
}
countVowels();
