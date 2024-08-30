function calculate(operator, num1, num2) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        return "Invalid operator";
    }
  }
  
  // Example usage:
  let result = calculate('+', 5, 3);
  console.log(result); // Output: 8