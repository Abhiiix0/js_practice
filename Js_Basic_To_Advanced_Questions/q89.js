// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

const str1 = "abczk";
const str2 = "efg";
function MergeStr(word, word2) {
  let result = "";
  let l = Math.max(word?.length, word2?.length);
  for (let i = 0; i < l; i++) {
    if (word[i] === undefined) {
      result += word2[i];
    } else if (word2[i] === undefined) {
      result += word[i];
    } else {
      result += word[i] + word2[i];
    }
  }
  return result;
}
console.log(MergeStr(str1, str2));
