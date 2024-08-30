let age = 25;
let isStudent = true;

if (age >= 18 && isStudent) {
  console.log("You are eligible for a student discount.");
} else if (age >= 18) {
  console.log("You are eligible for adult pricing.");
} else {
  console.log("You are not eligible for any discounts.");
}