/*
Create a function named forEach which 
takes an array as the first argument, a function as the second argument, 
and that works like the Array.prototype.forEach method.
*/

function forEach(arr, func) {
    for (let index = 0; index < arr.length;index++) {
        func(arr[index],index, arr);
    }
}