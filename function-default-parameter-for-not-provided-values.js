function addTwoNumbers(number1 = 0, number2 = 0) {
  // console.log(number1, number2);
  //first way to handle if one value is not provided
  // if (number2 == undefined) {
  //   number2 = 0;
  // }
  //second way or es5 way of handing if one value is not provided;
  // number2 = number2 || 0;
  const total = number1 + number2;
  return total;
}

// const result = addTwoNumbers(10);
// console.log(result);

function fullName(firstName, lastName = 'chowdhury') {
  const name = firstName + ' ' + lastName;
  return name;
}
const result = fullName('tushar', 'khan');
console.log(result);