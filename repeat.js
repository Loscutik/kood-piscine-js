/*
Create a function named repeat that takes a string and a number as arguments, 
and returns the string repeated as many times as the number describes. 
It should function like String.repeat(), but of course you must make your own.
*/

const repeat = (str, count) => {
    if (str == null) {
        throw new TypeError('can\'t convert ' + this + ' to object');
    }
    count = +count; // turn count into a number
    console.log(count);
    if (count != count) {
        count = 0;
    }
    if (count < 0) {
        throw new RangeError('repeat count must be non-negative');
    }
    if (count == Infinity) {
        throw new RangeError('repeat count must be less than infinity');
    }
    count = Math.floor(count); // throw away the fractional part
    if (str.length == 0 || count == 0) {
        return '';
    }
    // Обеспечение того, что count является 31-битным целым числом, позволяет нам значительно
    // соптимизировать главную часть функции. Впрочем, большинство современных (на август
    // 2014 года) браузеров не обрабатывают строки, длиннее 1 << 28 символов, так что:
    if (str.length * count >= 1 << 28) {
        throw new RangeError('repeat count must not overflow maximum string size');
    }
    let rpt = '';
    for (let i = 0; i < count; i++) {
        rpt += str;
    }
    return rpt;
}
