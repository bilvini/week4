let globalVariable = "I'm a global variable.";

function myFunction() {
  let localVariable = "I'm a local variable.";
  console.log("Inside the function:", globalVariable, localVariable);
}

myFunction();

console.log("Outside the function:", globalVariable); // Output: I'm a global variable.
// console.log("Outside the function:", localVariable); // Error: localVariable is not defined