let getRegValue = function() {
  return 1599;
};
console.log(`getRegValue : ${getRegValue()}`);

let getArrowValue = () => {
  return 1599;
};
console.log(`getArrowValue : ${getArrowValue()}`);

let getArrowValue2 = () => 1599;
console.log(`getArrowValue2 : ${getArrowValue2()}`);

let getArrowValueWithPar = day => 1599 + day;
console.log(`getArrowValueWithPar : ${getArrowValueWithPar(1)}`);

let getArrowValueWithMultipleStatement = (day, month, year) => {
  let todayDate = day + month * 30 + year * 356;
  return todayDate;
};
console.log(
  `getArrowValueWithMultipleStatement : ${getArrowValueWithMultipleStatment(
    1,
    5,
    99
  )}`
);
