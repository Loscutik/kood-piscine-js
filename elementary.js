/*
Create 3 functions which each take (a, b) as arguments:

multiply that acts like the * operator, without using it.
divide that acts like the integer division operator /, without using it.
modulo that acts like the % operator, without using it.
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

const multiply = (a, b) => {
    if (a == 0 || b == 0) { return 0; }

    let count = b;
    if (b < 0) {
        count = -b;
    }
    let res = 0;
    for (let i = 0; i < count; i++) {
        res += a;
    }

    if (b < 0) {
        return -res;
    }
    return res;
}

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

const modulo = (a, b) => {
    return a - multiply(divide(a, b), b);
}
