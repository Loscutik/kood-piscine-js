/*
Create four functions:

fold that receives an array, a function and an accumulator, in this order, 
    and applies the function in the elements of the array starting on the left.

foldRight that receives an array, a function and an accumulator, in this order, 
    and applies the function in the elements of the array starting on the right.

reduce that works just like the method [].reduce when you don't specify an accumulator. 
    The arguments should be an array and a function. The starting value of your accumulator must be the first value of the array. 
    If your array is less than 1 argument you should throw an error.

reduceRight like reduce, from the last value to the first

The use of [].reduce and [].reduceRight is forbidden for this exercise.
*/

function fold(array, func, accumulator) {
    for (let i = 0; i < array.length; i++) {
        accumulator = func(accumulator, array[i]);
    }
    return accumulator;
}

function foldRight(array, func, accumulator) {
    for (let i = array.length - 1; i >= 0; i--) {
        accumulator = func(accumulator, array[i]);
    }
    return accumulator;
}


function reduce(array, func) {
    if (!array || array.length < 1) { throw new Error('Error: array is empty!'); }
    let accumulator = array[0];
    for (let i = 1; i < array.length; i++) {
        accumulator = func(accumulator, array[i]);
    }
    return accumulator;
}

function reduceRight(array, func) {
    if (!array || array.length < 1) { throw new Error('Error: array is empty!'); }
    let accumulator = array[array.length - 1];
    for (let i = array.length - 2; i >= 0; i--) {
        accumulator = func(accumulator, array[i]);
    }
    return accumulator;
}
/*
const adder = (a, b) => a + b
console.log(fold([1, 2, 3], adder, 2))// returns 8 (2 + 1 + 2 + 3)
console.log(foldRight([1, 2, 3], adder, 2)) // returns 8 (2 + 3 + 2 + 1)
console.log(reduce([1, 2, 3], adder)) // returns 6 (1 + 2 + 3)
console.log(reduceRight([1, 2, 3], adder)) // returns 6 (3 + 2 + 1)
*/
