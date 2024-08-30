function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
  };
  
  let person2 = new Person("keerthi", 25);
  person2.greet(); // Output: Hello, my name is keerthi