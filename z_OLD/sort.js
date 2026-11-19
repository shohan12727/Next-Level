const numbers = [1,2,58,69,32,3, -98,65,-3];

const fruits = ['Apple', 'Banana', 'cherry', 'Date'];

const sortedFuits = fruits.sort((a,b) => a.localeCompare(b))
const sortedFuits2 = fruits.sort((a,b) => a-b)
// console.log(sortedFuits, sortedFuits2);


const sortedNumbers = numbers.sort((a,b) => a-b);
// console.log(sortedNumbers);

const nastedAyyay = [1,34,23,67,34,76,232,[4,6],[34,6]];
// console.log(nastedAyyay.flat(Infinity));



const arr = Array.from({length: 10}, (_, i) => i+1)
console.log(arr);
