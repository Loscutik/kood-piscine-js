/*
Create a function named max that takes 2 number arguments and returns the largest of the two.
You must not just use Math.max, make your own.
Create a function named min which is the same as max, but returns the lowest.
You must not just use Math.min, make your own.
*/

const max = (a, b) => a > b ? a : b
const min = (a, b) => a < b ? a : b

console.log(max(1, 2))
console.log(min(1, 2))