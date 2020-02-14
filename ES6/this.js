let employee = {
  id: 1599,
  helloHemdan: function() {
    console.log("Hi, Hemdan!");
  }
};
employee.helloHemdan();

let person = {
  id: 1,
  great: function() {
    setTimeout(function() {
      console.log(`each function has its own context : ${this.id}`);
    }, 100);
  }
};
person.great(); // undefined as each function has its own context..

let personWithWorkAround = {
  id: 1,
  great: function() {
    let self = this;
    setTimeout(function() {
      console.log(`work around : ${self.id}`);
    }, 100);
  }
};
personWithWorkAround.great(); // works fine but we can do better

let personWithArrowFunction = {
  id: 1,
  great: function() {
    setTimeout(() => {
      console.log(`arrow function  : ${this.id}`);
    }, 100);
  }
};
personWithArrowFunction.great(); // works fine ❤
