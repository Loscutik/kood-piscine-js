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
is.nan = (value) => value !== value; // or Number.isNaN(value)
is.str = (value) => typeof value === 'string';
is.bool = (value) => typeof value === 'boolean';
is.undef = (value) => typeof value === 'undefined';
is.def = (value) => typeof value !== 'undefined';
is.arr = (value) => Array.isArray(value);
is.obj = (value) =>  value !== null && typeof value === 'object' && !Array.isArray(value);
is.fun = (value) => typeof value === 'function';
is.truthy = (value) => !!value;
is.falsy = (value) => !value;
