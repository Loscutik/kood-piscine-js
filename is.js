/*
Add new function properties to the is object to check value types. Each function should take one argument, and return a boolean.

is.num: value is a number.
is.nan: value is NaN.
is.str: value is a string.
is.bool: value is a boolean.
is.undef: value is undefined.
is.def: value is defined.
is.arr: value is an array.
is.obj: value is a simple object or null objects.
is.fun: value is a function.
is.truthy: value is truthy.
is.falsy: value is falsy.
*/
/*
The provided code will be added to your solution, and does not need to be submitted.

const is = {}
*/

is.num = (value) => typeof value === 'number';
is.nan = (value) => isNaN(value);
is.str = (value) => typeof value === 'string';
is.bool = (value) => typeof value === 'boolean';
is.undef = (value) => typeof value === 'undefined';
is.def = (value) => typeof value !== 'undefined';
is.arr = (value) => Array.isArray(value);
is.obj = (value) => typeof value === 'object';
is.fun = (value) => typeof value === 'function';
is.truthy = (value) => !!value;
is.falsy = (value) => !value;


console.log('num(5): ', is.num(5));
console.log('num(true) ', is.num(true));
console.log('num("hhhhh"): ', is.num('hhhhh'));
console.log('nan(NaN): ', is.nan(NaN));
console.log('undef(undefined): ', is.undef(undefined));
console.log('undef(null): ', is.undef(null));
console.log("undef(''): ", is.undef(''));
console.log('undef({}): ', is.undef({}));
console.log('undef([]): ', is.undef([]));
console.log('undef(function(){}): ', is.undef(function () { }));
console.log('undef(true): ', is.undef(true));
console.log('undef(false): ', is.undef(false));
console.log('def("hhhhh"): ', is.def('hhhhh'));
console.log('def({}): ', is.def({}));
console.log('arr([5,"k"]): ', is.arr([5, 'k']));
console.log('arr({"0":[5,"k"]}): ', is.arr({ "0": [5, 'k'] }));
console.log('arr(null): ', is.arr(null));
console.log('arr(Int16Array): ', is.arr(new Int16Array(5)));
console.log('obj({a:5}): ', is.obj({ a: 5 }));
console.log('obj(null): ', is.obj(null));
console.log('obj(undefined): ', is.obj(undefined));
console.log('obj(""): ', is.obj(''));
console.log('obj({}): ', is.obj({}));
console.log('obj([]): ', is.obj([]));
console.log('obj(function(){}): ', is.obj(function () { }));
console.log('obj([6,7]): ', is.obj([6, 7]));
console.log('fun(function(){}): ', is.fun(function () { }));
console.log('truthy(true): ', is.truthy(true));
console.log('truthy([]): ', is.truthy([]));
console.log('truthy({}): ', is.truthy({}));
console.log('truthy(100): ', is.truthy(100));
console.log('truthy(0): ', is.truthy(0));
console.log('truthy(function(){}): ', is.truthy(function () { }));
console.log('falsy(false): ', is.falsy(false));
console.log('falsy(null): ', is.falsy(null));
console.log('falsy(undefined): ', is.falsy(undefined));
console.log('falsy(NaN): ', is.falsy(NaN));
console.log('falsy(0): ', is.falsy(0));
console.log('falsy(-0): ', is.falsy(-0));
console.log('falsy(0n): ', is.falsy(0n));
console.log('falsy(""): ', is.falsy(""));
console.log('falsy(document.all): ', is.falsy(document.all));
console.log('falsy(15): ', is.falsy(15));