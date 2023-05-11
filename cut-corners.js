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
    if (!isFinite(num)) {
        return num;
    }
    if (num === Number.MIN_VALUE) return 0;
    if (num === -Number.MIN_VALUE) return -1;
    if (Number.isInteger(num)) return num;
    let power = 0;
    let num10=num
    while (!Number.isInteger(num10)&&isFinite(num10)) {
        num10 *= 10;
        power++;
    }
    // if (num10 === Infinity) {return 0}
    // if (num10 === -Infinity) {return -0}
    if(!isFinite(num10)){return 0}
    const int = divide(num10, 10 ** power);
    return num >= 0 ? int : int - 1;
}

const ceil = (num) => {
    if (Number.isInteger(num)) return num;
    if (num === Number.MIN_VALUE) return 1;
    if (num === -Number.MIN_VALUE) return 0;
    return floor(num + 1);
}


// returns the value of a number rounded to the nearest integer.
const round = (num) => {
    if (!isFinite(num)) return num;

    const r = num - floor(num);
    return r > 0.5 ? floor(num) + 1 : floor(num);
}
const trunc = (num) => { return num >= 0 ? floor(num) : ceil(num); }



const numss = [3.7, -3.7, 3.1, -3.1, 'e', Number.MIN_VALUE*(1.0000000+Number.MIN_VALUE),  Number.NEGATIVE_INFINITY, 2]
floor(-Number.MIN_VALUE*10)
console.log("round\n", numss.map(round))
console.log("floor\n", numss.map(floor))
console.log("trunc\n", numss.map(trunc))
console.log("ceil\n", numss.map(ceil))
console.log(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER,Number.MIN_VALUE,Number.MAX_VALUE)
console.log(Number.POSITIVE_INFINITY + 1 === Infinity, Number.NEGATIVE_INFINITY + 1 === -Infinity)
  /*
[ 4, -4, 3, -3 ]
[ 3, -4, 3, -4 ]
[ 3, -3, 3, -3 ]
[ 4, -3, 4, -3 ]
MIN_VALUE
*/