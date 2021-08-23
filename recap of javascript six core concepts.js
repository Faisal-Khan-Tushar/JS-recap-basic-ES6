//variable declare
var onionPrice = 30;
let alurPrice = 50;
// console.log(alurPrice);
alurPrice = 100;
// console.log(alurPrice);
const murgirPrice = 200;
// console.log(murgirPrice);

// conditions
const mamPaniPrice = 50;
const pranPaniPrice = 30;
if (mamPaniPrice > pranPaniPrice) {

}
else if (mamPaniPrice < pranPaniPrice) {

}
else if (mamPaniPrice == pranPaniPrice) {

}
else if (mamPaniPrice != pranPaniPrice) {

}
else if (mamPaniPrice <= pranPaniPrice) {

}
else if (mamPaniPrice >= pranPaniPrice) {

}
//switch
let penPrice = 15;
switch (penPrice) {
  case 10:
    // console.log('price ekhono 10 taka');
    break;
  case 15:
    // console.log('price ta ekhon hocche 15 taka');
    break;
  default:
  // console.log('na price ta 10 takano na 15 takao na');

}
//array
const numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers.length);
numbers.push(7);
// console.log(numbers);
numbers.pop();
// console.log(numbers);
numbers.shift();//first er element ta ke dhore falay dey
// console.log(numbers);
numbers.unshift(10);//element add kore array er first e
// console.log(numbers);
//whether an element exists in the array or not
if (numbers.indexOf(6) == -1) {
  // console.log("No the element doesn't exist inside the array");
}
if (numbers.indexOf(6) != -1) {
  // console.log("yes the element does exist inside the array");
}
if (numbers.includes(6)) {
  // console.log('yes the numer does exist here');
}


//for of loop
for (const number of numbers) {
  // console.log(number);
}

//function 
function returnFullName(firstName, middleName, lastName) {
  return firstName + ' ' + middleName + ' ' + lastName;
}
const myName = returnFullName('Faisal', 'Khan', 'Tushar');
// console.log(myName);

//object
const myTableClock = { name: 'casio', price: 200, color: 'black' };
console.log(myTableClock);