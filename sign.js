/*
Create a function named sign that takes one number argument; returning 1 if the number is positive, -1 if the number is negative and 0 if the number is exactly 0.
You must not just use Math.sign, make your own.
Create a function named sameSign that takes 2 numbers as arguments and returns true if they both have the same sign, or false otherwise.
*/

const sign = (num) => {
    if (num > 0) {
        return 1;
    }
    if (num < 0) {
        return -1;
    }
    return 0;
}

const sameSign = (a, b) => sign(a) === sign(b);

console.log(sameSign(1, -1));
console.log(sameSign(1, 1));
console.log(sameSign(0, 0));