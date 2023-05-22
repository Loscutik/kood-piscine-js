/*
Create 3 functions that works like the .filter, .map and .reduce array methods, 
but for the keys of your grocery cart. 
You can see their names and how they work in the examples.
*/

function filterKeys(objWithNumbers, callBack) {
    const entries = Object.entries(objWithNumbers);
    return Object.fromEntries(entries.filter(([key, value]) => callBack(key) ? [key, value] : null));

}
function mapKeys(objWithNumbers, callBack) {
    const entries = Object.entries(objWithNumbers);
    return Object.fromEntries(entries.map(([key, value]) => [callBack(key), value]));

}
function reduceKeys(objWithNumbers, callBack, initialValue) {
    const keys = Object.keys(objWithNumbers);
    if (arguments.length === 2) {
        return keys.reduce(callBack)
    }
    return keys.reduce(callBack, initialValue);
}

// ---checking
console.log(Object.entries({ 'a': 5, __proto__: { b: 10, c: 15 }, d: 20 })) // output: [ [ 'a', 5 ], [ 'd', 20 ] ]

//Examples

const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
// output: { protein: 20 }

console.log(mapKeys(nutrients, (k) => `-${k}`))
// output: { -carbohydrates: 12, -protein: 20, -fat: 5 }

console.log(reduceKeys(nutrients, (acc, cr) => acc.concat(', ', cr)))
// output: carbohydrates, protein, fat

console.log(reduceKeys(nutrients, (acc, cr) => acc.concat(', ', cr),'-'))
// output: carbohydrates, protein, fat