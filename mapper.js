/*
Create a map function that takes an array as the first argument, a function as second, and that works like the method .map

Create a flatMap function that takes an array as the first argument, a function as second, and that works like the method .flatMap
*/

function map(arr, func) {
    let res = [];
    for (let index = 0; index < arr.length; index++) {
        res.push(func(arr[index], index, arr));
    }
    return res;
};
function flatMap(arr, func)
{
    let mapped = map(arr, func);

    let flatArr = [];
    for (let i = 0; i < mapped.length; i++) {
        if (Array.isArray(mapped[i])) {
            flatArr.push(...mapped[i]);
        } else {
            flatArr.push(mapped[i]);
        }
    }
    return flatArr;
}
// let arr=[];
// arr.push(...[1, [2, 3], 4, 5][0]) //TypeError: Spread syntax requires ...iterable[Symbol.iterator] to be a function
// arr.push([1, [2, 3], 4, 5][1])
//console.log(arr); 