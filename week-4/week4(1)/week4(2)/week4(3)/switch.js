function assignGrade(marks) {
    switch (true) {
      case marks >= 90:
        return "A";
      case marks >= 80:
        return "B";
      case marks >= 70:
        return "C";
      case marks >= 60:
        return "D";
      default:
        return "F";
    }
  }
  
  // Example usage:
  let grade = assignGrade(85);
  console.log("Your grade is:", grade); // Output: Your grade is: B