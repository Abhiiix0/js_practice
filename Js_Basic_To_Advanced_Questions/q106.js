// Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value.

var join = function (arr1, arr2) {
  let arrss = [];
  let found = false;
  for (let i = 0; i < [...arr1, ...arr2].length; i++) {
    for (let j = 0; j < arrss.length; j++) {
      console.log([...arr1, ...arr2][i].id);
      if (arrss[j].id === [...arr1, ...arr2][i].id) {
        found = true;
        break;
      } else {
        found = false;
      }
    }
    if (!found) {
      arrss.push([...arr1, ...arr2][i]);
    }
  }
  return arrss;
};

console.log(
  join(
    [
      { id: 1, x: 2, y: 3 },
      { id: 2, x: 3, y: 6 },
    ],
    [
      { id: 2, x: 10, y: 20 },
      { id: 3, x: 0, y: 0 },
    ]
  )
);
