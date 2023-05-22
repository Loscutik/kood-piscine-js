/*
Create a function named deepCopy that copies objects and arrays recursively.
*/

function deepCopy(obj) {
    //const entries = Object.entries(obj);
    let result = Array.isArray(obj) ? [] : {};
    //const keys = Object.keys(obj);
    for (const key in obj) {
        if (obj[key] !== null && obj[key] !== undefined && (obj[key].constructor === Array || obj[key].constructor === Object)) {
            result[key] = deepCopy(obj[key]);
        } else {
            result[key] = obj[key];
        }
    }
    return Object.isFrozen(obj) ? Object.freeze(result) : result;

    //   if (Array.isArray(obj)) {
    //     return obj.map(deepCopy);
    //   } else if (typeof obj === 'object') {
    //     return Object.keys(obj).reduce((acc, key) => {
    //       acc[key] = deepCopy(obj[key]);
    //       return acc;
    //     }, {});
    //   } else {
    //     return obj;
    //   }
}

// Examples

console.log(deepCopy({ user: 'mika', age: 37 }))
console.log(deepCopy([1, 'a']))
// nesting object
console.log(deepCopy({ a: { b: { c: 1 } } }))


// nesting array
console.log(deepCopy([1, [2, [true]]]))


// mixed nesting

console.log(deepCopy([console.log, /hello/]))
console.log(deepCopy(['b', { b: [3] }]))
console.log(deepCopy([{ a: 5 }, ['b', { b: [3] }]]))
console.log(deepCopy([{ a: () => { } }, ['b', { b: [3] }]]))

console.log((() => { 2 === 2 }).constructor)
console.log((/f/).constructor === Object)
console.log([].constructor === Array)
console.log({}.constructor === Object)
console.log(Object.getPrototypeOf({ j: 5 }) === Object)

const r = Math.random()
const obj1 = [r, Object.freeze([r, Object.freeze([r])])]
const copy = deepCopy(obj1)
console.log(obj1, copy)
obj1[0] = 1
console.log(obj1[0], copy[0])
console.log('obj[1][1]', obj1[1][1], Object.getPrototypeOf(obj1[1]))
console.log('copy[1][1]', copy[1][1])
// obj1[1][1] = 55
// console.log('obj[1][1]', obj1[1][1])
// copy[1][1] = 55
// console.log('copy[1][1]', copy[1][1])
// console.log(obj1[1][1] !== copy[1][1])
