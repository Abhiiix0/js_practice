const obj = {};

var isEmpty = function(obj) {
  if(Array.isArray(obj)){
    return obj.length === 0;
  }else{
    return Object.keys(obj).length === 0;
  }
};
console.log(Array.isArray(obj));
console.log([...Object?.entries(obj)]);
