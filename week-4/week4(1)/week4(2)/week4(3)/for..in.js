let person = {
    name: "John Doe",
    age: 30,
    city: "New York"
  };
  
  for (let property in person) {
    console.log(property + ": " + person[property]);
  }