/*
Create a function named get which takes two arguments:

src: an object.
path: a string representing a path.
Your function will return the value at the given path in the src object.
*/

function get(src, path) {
    const keys = path.split('.');
    let res = src;
    for (let key of keys) {
        if (!res[key]) return undefined;
        res = res[key];
    }
    return res;
}
// TEST

const src = { nested: { key: { key: 'peekaboo' } } }
const path = 'nested.key'
console.log(src["n"])
console.log(get(src, path)) // -> 'peekaboo'