// Write a function that checks if an array is a palindrome (reads the same forwards and backwards).
// Example: isPalindrome([1, 2, 3, 2, 1]) should return true.

const arr = [3, 1, 2, 3, 2, 1, 3];
function isPalindrome(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome(arr));
