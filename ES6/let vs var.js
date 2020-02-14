let name = "abdallah";

function getName() {
  let name = "hemdan";
  console.log(name);
}
console.log(name); // use global
getName(); // use function variable
console.log(name); // use global



let testLet = () => {
  let greeting = `Hello, My name is Abdallah Hemdan`;
  console.log(`A : ${greeting}`);
  let trueValue = true;
  if (trueValue) {
    let greeting = `Hello, I am not Abdallah Hemdan`;
    console.log(`B : ${greeting}`);
  }
  console.log(`C : ${greeting}`);
};
testLet();
