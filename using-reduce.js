/*
Your solutions must use reduce.

adder: accepts an array of numbers, and returns the sum as a number.

sumOrMul: accepts an array of numbers and adds or multiplies its elements depending on whether the element is odd or even. Even = multiply. Odd = add.

funcExec: accepts an array of functions and executes them using reduce, returning the result.

Each function may accept an optional argument, which should be the initial value for the function's execution.
*/

const adder = (numbersArr, initialValue) => {
    initialValue = !(initialValue) ? 0 : initialValue;
    return numbersArr.reduce((sum, num) => sum + num, initialValue);
}

const sumOrMul = (numbersArr, initialValue) => {
    initialValue = !(initialValue) ? 0 : initialValue;
    return numbersArr.reduce((accumulator, currentNum) => currentNum % 2 === 0 ? accumulator * currentNum : accumulator + currentNum,
        initialValue);
}
const funcExec = (functionsArr, initialValue) => {
    initialValue = !(initialValue) ? 0 : initialValue;
    return functionsArr.reduce((accumulator, currentFunc) => currentFunc(accumulator), initialValue)
};

console.log(sumOrMul([1, 2, 3, 5, 8], 5)) // (((((5 + 1) * 2) + 3) + 5) * 8) -> 160
console.log(adder([1, 2, 3, 4])) 