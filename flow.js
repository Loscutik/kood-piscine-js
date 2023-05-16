/*
Create the function named flow that will act like the _.flow([funcs]) from lodash:
Creates a function that returns the result 
of invoking the given functions with the this binding of the created function, 
where each successive invocation is supplied the return value of the previous.
Arguments
[funcs] (...(Function|Function[])): The functions to invoke.
*/


function flow(funcsArray) {
    if (!Array.isArray(funcsArray) || funcsArray.length === 0) return undefined;
    if (funcsArray.length === 1) return funcsArray[0];
    return function (...args) {
        let initially = funcsArray[0](...args);
    
        return funcsArray.slice(1).reduce((acc, func) => func(acc, ...args), initially);
    }
}

/*
const square = (nbr) => nbr * nbr
const add2Numbers = (nbr1, nbr2) => nbr1 + nbr2
const flowedFunctions = flow([add2Numbers, square])
console.log(flowedFunctions(2, 3)) // -> 25

const sub32 = (el) => el - 32
const mult5 = (el) => el * 5
const div9 = (el) => el / 9
const roundDown = (el) => Math.floor(el)

const add2 = (el) => el + 2
const mult2 = (el) => el * 2

const addAll = (...el) =>
  el.length === 1 ? el[0] : el[0] + addAll(...el.slice(1))

const farenheitToCelsius = flow([sub32, mult5, div9, roundDown])
const add2Mult2Square = flow([add2, mult2, square])
const addAllThenConvertToCelsius = flow([addAll, farenheitToCelsius])

console.log(farenheitToCelsius(32))
console.log(add2Mult2Square(32))
console.log(addAllThenConvertToCelsius(20, 5, 6, 1))
*/