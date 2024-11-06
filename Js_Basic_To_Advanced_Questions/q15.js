// Write a function that catches and logs an error if a function fails.

function funrun(arr) {
  var val = 0;
  for (let i = 0; i < arr?.length; i++) {
    val += arr[i];
  }
  console.log(val);
}

const arr = [5, 8, 3, 8];

function CatchErr(fun) {
  try {
    fun(arra);
  } catch (error) {
    console.log("error occur", error?.message);
  }
}

//A ReferenceError occurs in JavaScript when you try to use a variable or function that hasn't been declared or is out of scope
CatchErr(funrun);
