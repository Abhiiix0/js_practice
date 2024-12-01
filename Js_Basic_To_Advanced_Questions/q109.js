//Remove dulicate from array

const arr = [3, 1, 6, 9, 8, 3, 2, 1, 0, 8, 7];

//with built in method
const uniqueArr = [...new Set(arr)];

const removeDUplicate = (arr) => {
  // without built in
  const uniqueArr = [];
  arr.forEach((item) => {
    if (!uniqueArr.includes(item)) {
      uniqueArr.push(item);
    }
  });
};
console.log(uniqueArr);
