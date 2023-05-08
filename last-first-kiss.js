/*
Create 3 functions:

first: that takes an array or a string and returns its first element or character.

last: that takes an array or a string and return its last element or character.

kiss: that takes an array or string, and returns an array of 2 elements. The returned array should contain the last and first elements or characters, in that order.
*/

const first = (array) => array[0];
const last = (array) => array[array.length - 1]
const kiss = (array) => [array[0], array[array.length - 1]]

console.log(first([1, 2, 3]));
console.log(last([1, 2, 3]));
console.log(kiss("Roma"));