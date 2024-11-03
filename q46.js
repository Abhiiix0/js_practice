// Write a function that finds and returns the longest word in a given sentence.
const str = "This sentence is for testing purpose";
function LongestWord(str) {
  let words = str.split(" ");
  let longest = words[0];
  for (let i = 0; i < words.length; i++) {
    if (longest?.length < words[i]?.length) {
      longest = words[i];
    }
  }
  return longest;
}
console.log(LongestWord(str));
