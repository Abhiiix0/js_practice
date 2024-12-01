// given 2 sorted array merge them and sort

const arr1 = [0, 3, 41, 31];
const arr2 = [4, 6, 25];

const mergeSortedArrays = (arr1, arr2) => {
  let arr3 = [...arr1, ...arr2];
  //with built in method
  //   return arr3.sort((a, b) => a - b);

  //without built in method
  for (let i = 0; i < arr3.length; i++) {
    for (let j = 0; j < arr3.length; j++) {
      if (arr3[j] > arr3[j + 1]) {
        let temp = arr3[j];
        arr3[j] = arr3[j + 1];
        arr3[j + 1] = temp;
      }
    }
  }
  return arr3;
};

console.log(mergeSortedArrays(arr1, arr2));
