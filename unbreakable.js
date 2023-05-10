/*
Implement 2 functions:
split that works like String.split, but takes the string as its first argument.
join that works like Array.join, but take the array as its first argument.
*/

const split = (str, sep, limit) => {
    if (sep === undefined) return [str];
    if (limit === 0) return [];
    if (limit === undefined) limit = Infinity;
    if (sep.length === 0) return Array.from(str);
    let res = [];
    let i;
    let start = 0;
    do {
        i = str.indexOf(sep, start);
        if (i < 0) res.push(str.slice(start))
        else res.push(str.slice(start, i));
        start = i + sep.length;
        limit--;
    } while (i >= 0 && limit > 0);
    return res;
};

const join = (arr, sep) => {
    if (arr.length === 0) return '';
    //if(arr.length === 1) return `${arr[0]}`;
    if (sep === undefined) sep = ',';
    let res = `${arr[0]}`;
    for (let i = 1; i < arr.length; i++) {
        res += `${sep}${arr[i]}`;
    }
    return res;
}

//console.log('hello world'.indexOf('e',));
console.log(split('hello world', 'l', 0));
console.log('hello world'.split('l', 0));

console.log(join(['1', 't'],));
console.log(join(['1', 2], '-'));
console.log(join([1, 2], ''));
