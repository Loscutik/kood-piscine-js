/*
Create a function named flat that works like Array.flat(), 
except its first argument is the array.
*/

function flat(arr, depth) {
    if (depth === undefined) {
        depth = 1;
    }
    if (!Number.isFinite(depth) || depth < 0) {
        depth = 0;
    }
    if (depth === 0) {
        return arr;
    }
    let flatArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flatArr = flatArr.concat(flat(arr[i], depth - 1));
        } else {
            flatArr.push(arr[i]);
        }
    }
    return flatArr;
}

//TEST
const arr1 = [0, 1, 2, [3, 4, 5]];

console.log('1:', flat(arr1));
// Expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log('2:', flat(arr2));
console.log('3:', flat(arr2, 1));
console.log('4:', flat(arr2, 0));
console.log('5:', flat(arr2, 14));
console.log('6:', flat(arr2, -1));

console.log(Number.isFinite(undefined)); //false
console.log(Number.isFinite(null)); //false
console.log(Number.isFinite(NaN)); //false
console.log(Number.isFinite(Infinity)); //false
console.log(Number.isFinite('d')); //false