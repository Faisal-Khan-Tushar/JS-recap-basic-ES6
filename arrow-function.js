function add(num1, num2) {
  return num1 + num2;
}
//we can declare a function in a variable.
const add2 = function add2(num1, num2) {
  return num1 + num2;
}
// we don't have to write the function name in this method(annonymous function)
const add3 = function (num1, num2) {
  return num1 + num2;
}
//arrow function
const add4 = (num1, num2) => num1 + num2;
//arrow function (example-2)
const fullName = (firstName, lastName) => firstName + ' ' + lastName;

const sum1 = add(10, 15);
const sum2 = add2(10, 15)
const sum3 = add3(10, 15);
const sum4 = add4(10, 15);
const name = fullName('Faisal', 'Tushar');
console.log(sum1, sum2, sum3, sum4, name);
