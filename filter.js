/*
Create the following functions, which each take an array as the first argument, and a function as the second argument.

filter: that works like the [].filter method.

reject: that works like the reject function from lodash.

partition: that works like the partition function from lodash.
*/

function filter(arr, func) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            res.push(arr[i]);
        }
    }
    return res;
}

function reject(arr, func) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) {
            res.push(arr[i]);
        }
    }
    return res;
}

function partition(arr, func) {
    let yes = []; let no = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            yes.push(arr[i]);
        } else {
            no.push(arr[i]);
        }
    }
    return [yes, no];
}