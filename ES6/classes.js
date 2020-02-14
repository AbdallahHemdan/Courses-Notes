class student {
  constructor(name, age, subject) {
    this.name = name;
    this.age = age;
    this.subject = subject;
  }
  printInfo() {
    console.log(`Hello, my name is ${this.name}`);
    console.log(`my age is ${this.age}`);
    console.log(`my favorite subject is ${this.subject}`);
    console.log("\n");
  }
}

let hemdan = new student("hemdan", 21, "math");
let sayed = new student("Assma", 19, "geography");
hemdan.printInfo();
sayed.printInfo();
