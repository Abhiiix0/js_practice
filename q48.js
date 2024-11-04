// Write a function to check if two strings are anagrams of each other (contain the same characters in any order).
const str1 = "thi";
const str2 = "isht";

function anagrams(str1, str2) {
  if (str1?.length !== str2?.length) {
    return false;
  }
  const str1F = str1?.split("").sort()?.join();
  const str2F = str2?.split("").sort()?.join();
  if (str1F === str2F) return true;
}
console.log(anagrams(str1, str2));
