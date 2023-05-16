/*
Create these functions which receive an array and a function each. Each element will return true if

every: every element in the array respects the condition of the function.
some: that returns true if at least one element in the array respects the condition of the function.
none: that returns true if none of the elements in the array respects the condition of the function.
The use of [].every and [].some is forbidden for this exercise.
*/

function every(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i],i,arr)) {
            return false;
        }
    }
    return true;
}

function some(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i],i,arr)) {
            return true;
        }
    }
    return false;
}

function every(arr, func) {
    //return !arr.some(func);
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i],i,arr)) {
            return false;
        }
    }
    return true;
}