let peyajerDam = 100;
peyajerDam = 200;

const numbers = [1, 2, 3, 4, 5, 6];
numbers.push(12);
numbers.pop();
//reassigning to a constant array is not possible. 
// numbers = [343, 3434, 3435]; 
for (let i = 0; i < numbers.length; i++) {
  number = numbers[i];
  // console.log(number);
}
//changing value at a certain index is okay, but re reassigning is not.
numbers[0] = 100;

//reassiging an object is not okay or acceptable 
const student = { name: 'Faisal Khan Tushar', age: 21, university: 'diu' };
//these are acceptable 
student.name = 'Mr Stevens';
student['age'] = 52;
// console.log(student);

//not possible


// student = { name: 'Mr Stevens', age: 50, university: 'none' };