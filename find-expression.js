/*
Create a function named findExpression that takes a number as parameter and returns a string.

2 constant variables will be made available to your function: add4 and mul2.
Your goal is to try to find a sequence, starting from the number 1, 
and repeatedly either adding 4 or multiplying by 2, to produce the number given as a parameter.
If the number can not be reached you should return undefined
For example, for the number 8, you must first multiply by 2 twice, and then add 4. 
Your function should return something like: 1 *2 *2 +4.

*/
// const add4 = '+4'
// const mul2 = '*2'

function findExpression(num) {
    if (num === 1) {
        return ' 1';
    }
    if (num % 2 === 0) {
        let s = findExpression(num / 2);
        if (s !== undefined) {
            return s + mul2;
        } else {
            return check4(num);
        }
    } else {
        return check4(num);
    }
}

function check4(num) {
    if (num === 1) {
        return ' 1';
    }
    if (num > 4) {
        let s = findExpression(num - 4);
        if (s !== undefined) {
            return s + add4;
        } else {
            return undefined;
        }
    } else {
        return undefined;
    }
}

console.log(findExpression(14))
console.log(findExpression(8))
console.log(findExpression(10))
console.log(findExpression(60))
console.log(findExpression(100))
console.log(findExpression(100))
console.log(findExpression(280))
console.log(findExpression(110))
console.log(findExpression(144))
console.log(findExpression(200))
console.log(findExpression(104))
console.log(findExpression(7))
console.log(findExpression(63))
console.log(findExpression(23))
console.log(findExpression(103))
console.log(findExpression(3))

