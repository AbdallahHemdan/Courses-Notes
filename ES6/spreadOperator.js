let addNumbers = (a, b, c) => {
  return a + b + c;
};
let employeesSalary = [10, 20, 30];

console.log(
  `using regular calling ${addNumbers(
    employeesSalary[0],
    employeesSalary[1],
    employeesSalary[2]
  )}`
);

console.log(`using spread operator ${addNumbers(...employeesSalary)}`); // using spread operator
// spread operator => ...nameOfListToSpread (spread means separate the numbers)

let addFourNumbers = (a, b, c, d) => {
  return a + b + c + d;
};
let numbers = [1, 2, 3, 4];
console.log(addFourNumbers(...numbers));

// suppose you want to add an array after some element in another array

let firstName = "AbdallahHemdan";
let lastName = "Hegazy";
let bestEmployees = ["abdallah", "ahmed", "hemdan"];
let employees = [name, "said", ...bestEmployees, "mahmoud", lastName];
console.log(employees);

let listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let firstNumber = -100;
let lastNumber = 100;
listOfNumbers = [firstNumber, ...listOfNumbers, lastNumber];
console.log(listOfNumbers);

let displayColors = (message, ...colors) => {
  console.log(message);
  for (let index in colors) {
    console.log(colors[index]);
  }
};

let colorsArray = ["red", "green", "blue"];
displayColors("Our colors are:", "yello");
console.log(`=======================`);
displayColors("Our colors are:", "yello", "green");
console.log(`=======================`);
displayColors("Our colors are:", "yello", "green", "blue");
console.log(`=======================`);
displayColors("Our colors are:", "yello", "green", "blue", "red");
