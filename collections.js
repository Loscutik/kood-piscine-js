/*
Write a bunch of functions which converts data from one type to another:

arrToSet: from Array to Set.
arrToStr: from Array to string.
setToArr: from Set to Array.
setToStr: from Set to string.
strToArr: from string to Array.
strToSet: from string to Set.
mapToObj: from Map to Object.
objToArr: from Object to Array.
objToMap: from Object to Map.
arrToObj: from Array to Object.
strToObj: from string to Object.
Finally, write a function named superTypeOf that unlike typeof returns a specific values for advanced types like Map and Set.

*/


const arrToSet = (arr) => new Set(arr);
const arrToStr = (arr) => arr.join('');
const setToArr = (set) => Array.from(set);
const setToStr = (set) => Array.from(set).join('');
const strToArr = (str) => str.split('');
const strToSet = (str) => new Set(str.split(''));
const mapToObj = (map) => Object.fromEntries(map);
const objToArr = (obj) => Object.values(obj);
const objToMap = (obj) => new Map(Object.entries(obj));
const arrToObj = (arr) => Object.fromEntries(arr.entries());
const strToObj = (str) => Object.fromEntries(str.split('').entries());
/***
const superTypeOf = (obj) => {
    const name = Object.prototype.toString.call(obj); //Object.prototype.toString() returns "[object Type]", where Type is the object type. 
    return name.slice(8, name.length - 1);
}
*/
const superTypeOf = (obj) => {
    switch (true) {
        case obj === null: return 'null';
        case obj === undefined: return 'undefined';
        default: return obj.constructor.name; // doesn't work with null and undefined

    }
}
/* Tests */
const str = 'hello'
const arr = [1, 2, 1, 3]
const obj1 = { x: 45, y: 75, radius: 24, __proto__: { a: 1, b: 2, '3': 'c', } }
const set = new Set()
const map = new Map()
set.add(1)
set.add(2)
set.add(1)
set.add(3)
map.set('a', 1)
map.set('b', 2)
map.set(3, 'c')
map.set(4, 'd')

console.log('str = ', str)
console.log('arr = ', arr)
console.log('obj = ', obj1)
console.log('set = ', set)
console.log('map = ', map)


console.log('arrToSet(arr): ', arrToSet(arr)) // -> Set { 1, 2, 3 }
console.log('arrToStr(arr): ', arrToStr(arr)) // -> '1213'
console.log('setToArr(set): ', setToArr(set)) // -> [1, 2, 3]
console.log('setToStr(set): ', setToStr(set)) // -> '123'
console.log('strToArr(str): ', strToArr(str)) // -> ['h', 'e', 'l', 'l', 'o']
console.log('strToSet(str): ', strToSet(str)) // -> Set { 'h', 'e', 'l', 'o' }
console.log('mapToObj(map): ', mapToObj(map)) // -> { a: 1, b: 2, '3': 'c', '4': 'd' }
console.log('objToArr(obj): ', objToArr(obj1)) // -> [45, 75, 24]
console.log('objToMap(obj): ', objToMap(obj1)) // -> Map { 'x' => 45, 'y' => 75, 'radius' => 24 }
console.log('arrToObj(arr): ', arrToObj(arr)) // -> { '0': 1, '1': 2, '2': 1, '3': 3 }
console.log('strToObj(str): ', strToObj(str)) // -> { '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }

console.log('superTypeOf(map)         : ', superTypeOf(map));
console.log('superTypeOf(set)         : ', superTypeOf(set));
console.log('superTypeOf(obj)         : ', superTypeOf(obj1));
console.log('superTypeOf(str)         : ', superTypeOf(str));
console.log('superTypeOf(666)         : ', superTypeOf(666));
console.log('superTypeOf(NaN)         : ', superTypeOf(NaN));
console.log('superTypeOf(arr)         : ', superTypeOf(arr));
console.log('superTypeOf(null)        : ', superTypeOf(null));
console.log('superTypeOf(undefined)   : ', superTypeOf(undefined));
console.log('superTypeOf(superTypeOf) : ', superTypeOf(superTypeOf));