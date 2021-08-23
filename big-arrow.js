//add two numbers with arrow function
const add = (num1, num2) => num1 + num2;
const sum = add(10, 15);
//multiply 3 numbers with arrow function
const multiply = (num1, num2, num3) => num1 * num2 * num3;
const multiplication = multiply(10, 5, 4);
//take a number and multiply it 5 times with arrow function
const fiveTimes = (num) => num * 5;
const result = fiveTimes(5);
//take a number and multiply it 10 times with arrow function without brackets
const tenTimes = num => num * 10;
const result2 = tenTimes(10);
//how to deal with multiple lines of code in a function with arrow function
const mathOperations = (x, y) => {
  const add = x + y;
  const difference = x - y;
  const division = x / y;
  const multiplication = x * y;
  return add + difference + division + multiplication;
}

const mathematicalResult = mathOperations(10, 5);

console.log(mathematicalResult);