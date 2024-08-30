function findGreater(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else if (num1 < num2) {
      return num2;
    } else {
      return "Numbers are equal";
    }
  }
  
  // Example usage:
  let greaterNumber = findGreater(10, 5);
  console.log(greaterNumber); // Output: 10