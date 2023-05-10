/*
Create some functions which behave like JavaScript's Math rounding functions:

round: which behaves similar to Math.round().
ceil: which behaves similar to Math.ceil().
floor: which behaves similar to Math.floor().
trunc: which behaves similar to Math.trunc().
Some restrictions apply:

You may not use strings conversion to do it
No bitwise operator
No % operator
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

const divide = (a, b) => {
    if (b == 0) { return NaN; }
    let a1 = a;
    if (a < 0) {
        a1 = -a;
    }
    let b1 = b;
    if (b < 0) {
        b1 = -b;
    }
    let res = -1;
    do {
        a1 -= b1;
        res++;
    } while (a1 >= 0)

    if (sameSign(a, b)) return res;
    else return -res;
}

// The largest integer smaller than or equal to x.
const floor = (num) => {
    if (num === Infinity || num === -Infinity || num === NaN) return num;
    let power = 0;
    while (!Number.isInteger(num * 10 ** power)) {
        power++;
    }
    const int = divide(num * 10 ** power, 10 ** power);
    return num > 0 ? int : int - 1;
}

const ceil = (num) => {
    return floor(num + 1);
}


// returns the value of a number rounded to the nearest integer.
const round = (num) => {
    if (num === Infinity || num === -Infinity || num === NaN) return num;

    const r = num - floor(num);
    return r > 0.5 ? floor(num) + 1 : floor(num);
}
const trunc = (num) => { return num >= 0 ? floor(num) : ceil(num); }

const numss = [3.7, -3.7, 3.1, -3.1]
console.log(numss.map(round))
console.log(numss.map(floor))
console.log(numss.map(trunc))
console.log(numss.map(ceil))
  /*
[ 4, -4, 3, -3 ]
[ 3, -4, 3, -4 ]
[ 3, -3, 3, -3 ]
[ 4, -3, 4, -3 ]
*/