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



// The largest integer smaller than or equal to x.
const floor = (num) => {
    if (!isFinite(num)) {
        return num;
    }
    if (num === Number.MIN_VALUE) return 0;
    if (num === -Number.MIN_VALUE) return -1;
    if (Number.isInteger(num)) return num;
    let power = 0;
    let tmp = num
    // search for limits 2**n
    while (tmp > 1 || tmp < -1) {
        tmp /= 2;
        power++;
    }
    let left;
    let right;
    if (num > 0) {
         left = 2 ** (power - 1);
         right = 2 ** (power);
    } else {
         left = -(2 ** (power));
         right = -(2 ** (power - 1));
    }
    while (right - left > 1) {
        let mid = (right + left) / 2;
        if (num > mid) {
            left = mid;
        } else {
            right = mid;
        }
    }




    // while (!Number.isInteger(num10) && isFinite(num10)) {
    //     num10 *= 10;
    //     power++;
    // }
    // // if (num10 === Infinity) {return 0}
    // // if (num10 === -Infinity) {return -0}
    // if (!isFinite(num10)) { return 0 }
    // const int = divide(num10, 10 ** power);
    return left;//num >= 0 ? int : int - 1;
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


/*
const numss = [3.7, -3.7, 3.1, -3.1, 0xfffffffff + 0.1,Number.MIN_VALUE * (1.0000000 + Number.MIN_VALUE), Number.NEGATIVE_INFINITY, 2]
//floor(-Number.MIN_VALUE * 10)
console.log("round\n", numss.map(round))
console.log("floor\n", numss.map(floor))
console.log("trunc\n", numss.map(trunc))
console.log("ceil\n", numss.map(ceil))
console.log(0xfffffffff + 0.1, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MIN_VALUE, Number.MAX_VALUE)
console.log(Number.POSITIVE_INFINITY + 1 === Infinity, Number.NEGATIVE_INFINITY + 1 === -Infinity)
  /*
[ 4, -4, 3, -3 ]
[ 3, -4, 3, -4 ]
[ 3, -3, 3, -3 ]
[ 4, -3, 4, -3 ]
MIN_VALUE
*/