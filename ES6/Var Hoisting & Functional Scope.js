// note : var keyword is functional-scope not block-scope
// so : it does not limited to its declaration block

function greetUser(username) {
  if (username === "Hemdan") {
    var greetMessage = "Hello, Hemdan";
  } else {
    var greetMessage = "Hello there";
  }
  console.log(greetMessage); // how we access greetMessage here !!! 🤔..
}
greetUser("Hemdan");
greetUser("Ahmed");

// it's confusing right !!
// what happed here is something called Hoisting..
// JavaScript split the declaration of (var greetMessage) ==> to declaration  + initialization so the function will be like following with ignoring any duplicate declaration..

function greetUser(username) {
  var greetMessage;
  if (username === "Hemdan") {
    greetMessage = "Hello, Hemdan";
  } else {
    greetMessage = "Hello there";
  }
  console.log(greetMessage);
}

// This also work 😂😂 (cause of hoisting)..
function greetUser(username) {
  if (username === "Hemdan") {
    greetMessage = "Hello, Hemdan";
  } else {
    greetMessage = "Hello there";
  }
  var greetMessage;
}
