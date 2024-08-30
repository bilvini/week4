let car = {
    make: "Toyota",
    model: "Camry",
    year: 2023,
    getDetails: function() {
      console.log("This car is a " + this.year + " " + this.make + " " + this.model);
    }
  };
  
  car.getDetails(); // Output: This car is a 2023 Toyota Camry