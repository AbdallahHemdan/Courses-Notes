class Person{
  // In ES6 we have 3 types of the Methods (Constructor Method, Static Method, Prototype Method)
  constructor(name){ // Constructor Method
      console.log(`Hello, ${name} from constructor`);
  }
  static sayHello(name){
      console.log(`Hello, ${name} from static`);
  }
  greetPerson = (name) => {
      console.log(`Hello, ${name} from Prototype`)
      }
 }

let Sedo = new Person(`Sedo`);
Sedo.greetPerson(`Sedo`);
Person.sayHello(`Sedo`);
