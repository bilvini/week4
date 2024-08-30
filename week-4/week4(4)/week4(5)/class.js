class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log("Generic animal sound");
    }
  }
  
  let dog = new Animal("Buddy");
  dog.speak(); // Output: Generic animal sound