// Write a function passwordProtected that takes a password as a parameter. Return a function that accepts another password and returns "Access granted" if the passwords match, otherwise "Access denied".

function passwordProtected(pass) {
  return function (password) {
    if (password === pass) {
      return "Access granted";
    } else {
      return "Access denied";
    }
  };
}
const checkPassword = passwordProtected("secret");
// console.log(checkPassword("secret")); // "Access granted"
console.log(checkPassword("wrong")); // "Access denied"
