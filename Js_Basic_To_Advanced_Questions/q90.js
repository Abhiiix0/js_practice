// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: "";

const str1 = "abcabc";
const str2 = "abc";
function gcdOfStrings(str1, str2) {
  if (str1 !== str2) {
    return "";
  }
  if (str1.subString(0, str2?.length)) {
    return str2;
  }
}
// gcdOfStrings(str1, str2);
console.log(gcdOfStrings(str1, str2));
