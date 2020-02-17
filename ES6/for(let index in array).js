let names = ["Abdallah", "Ahmed", "Hemdan"];

console.log("using for-in");
// for(let i in names) => i = current-index-of-the-array
for (let i in names) {
  console.log(names[i]);
}

console.log("============================");
console.log("using for-of");
// for(let name of names) => name = current-element-of-the-array
for (let name of names) {
  console.log(name);
}

console.log("============================");
console.log("hemdanFullName chars using in");
let hemdanFullName = "Abdallah Ahmed Hemdan";
for (let i in hemdanFullName) {
  console.log(hemdanFullName[i]);
}

console.log("============================");
console.log("hemdanFullName chars using of");
for (let char of hemdanFullName) {
  console.log(char);
}
