// Write a function that counts how many times a specific element occurs in an array.
const arr = [1, 4, 2, 2, 6, 7, 5, 4, 6];
function CountNum(arr) {
  let arrOfObj = [];
  if (arrOfObj.length === 0) {
    arrOfObj.push({
      num: arr[0],
      count: 1,
    });
  }
  for (let i = 1; i < arr.length; i++) {
    let found = false;

    // Check if the current number is already in arrOfObj
    for (let j = 0; j < arrOfObj.length; j++) {
      if (arrOfObj[j].num === arr[i]) {
        arrOfObj[j].count++;
        found = true;
        break;
      }
    }
    if (!found) {
      arrOfObj.push({
        num: arr[i],
        count: 1,
      });
    }
  }
  return arrOfObj;
}

console.log(CountNum(arr));
