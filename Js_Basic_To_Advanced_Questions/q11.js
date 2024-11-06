// Write a function that takes an array of strings and a string, and checks if the string exists in the array.
function checkstrinarrofstr(arr, str) {
  for (let i = 0; i < arr?.length; i++) {
    if (arr[i]?.toLowerCase() === str?.toLowerCase()) {
      return true;
    }
  }
  return false;
}

const strArr = ["abhi", "Raj", "shIlLU", "OLd"];
console.log(checkstrinarrofstr(strArr, "Old"));
