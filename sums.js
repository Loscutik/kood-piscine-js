/*
Create a function named sums that accepts a number and returns its partitions.

A partition is a group of numbers, where the sum of the partition is equal to the number argument.
Duplicate partitions are not allowed. [1, 2] and [2, 1] are considered duplicates.
The array of partitions must be sorted.
*/

function sumRecursive(num, start) {
    if (start === undefined) {
        start = 1;
    }
    if (num === 0) {
        return [];
    }

    if (num - start === 0) {
        return [[]];
    }

    if (num < start) {
        return undefined;
    }

    let arr = []
    for (let i = start; i <= num - start; i++) {
        
        let prev = sumRecursive(num - start, i);
        if (prev !== undefined) {
            for (let a of prev) {
                a.unshift(i);
            }
            arr.push(...prev);
        }
    }
    // for (let a of arr) {
    //     a.unshift(start);
    // }
    return arr;
}

function sums(num) {
    let arr = [];
    for (let i = 1; i <= Math.floor(num-1); i++) {
        let prev = sumRecursive(num, i);
        if (prev !== undefined) {
            for (let a of prev) {
                a.unshift(i);
            }
            arr.push(...prev);
        }
    }
    return arr;
}

console.log(sums(5)) // [ [1, 1, 1, 1], [1, 1, 2], [1, 3], [2, 2] ]