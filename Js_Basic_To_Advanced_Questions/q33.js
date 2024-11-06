// Write a function that returns the current date in the format "YYYY-MM-DD".
function CUrrentDate() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return year + "-" + month + "-" + day;
}
console.log(CUrrentDate());
