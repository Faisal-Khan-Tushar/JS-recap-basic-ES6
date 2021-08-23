//when to use const & let
const mayerName = 'Sahinoor ';
let bestFriend = 'Faisal Khan Tushar';


//finding the maximum in an array using Math.max() also the minimum in an given arary using Math.min()
const numbers = [1, 2, 3, 4, 5, 6];
// const max = Math.max(...numbers);
// console.log(max);
const min = Math.min(...numbers);
console.log(min);

//default parameter
function addNumbers(x, y = 0) {
  return x + y;
}
const res = addNumbers(10);
// console.log(res);

//template string
function fullName(first, last = 'Akther') {
  return first + ' ' + last;
}
const myPeople = `
My mothers name is ${fullName(mayerName)}.And my Best Friend is ${bestFriend}.Together we make a rock solid duo.
`
// console.log(myPeople);

//arrow function
const addTwoNumbers = (x, y) => x + y;
const doOperations = (x, y, z = 0) => {
  const sum = x + y + z;
  const differenece = x - y - z;
  return sum + differenece;
}
const res2 = doOperations(10, 5);
// console.log(res2);