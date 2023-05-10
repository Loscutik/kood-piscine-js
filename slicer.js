/*
Create a function named slice that works like Array.slice() and String.slice().

It takes 3 arguments:

string or array to process.
starting index.
optional ending index.
*/

/*
The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
If start < 0, start + array.length is used.
If start < -array.length or start is omitted, 0 is used.
If start >= array.length, nothing is extracted.
If end < 0, end + array.length is used.
If end < -array.length, 0 is used.
If end >= array.length or end is omitted, array.length is used, causing all elements until the end to be extracted.
If end is positioned before or at start after normalization, nothing is extracted.

*/
function slice(array, start, end) {
    if (start === undefined) {
        start = 0;
    }
    if (end === undefined) {
        end = array.length;
    }

    start = +start;
    end = +end;

    if (start < 0) {
        start += array.length;
        if (start < 0) start = 0;
    }

    if (start >= array.length) return [];


    if (end < 0) {
        end += array.length;
        if (end < 0) end = 0;
    }

    if (end >= array.length) end = array.length;

    const sliceArray = [];
    for (let i = start; i < end; i++) {
        sliceArray.push(array[i]);
    }
    return sliceArray;
}

// TESTING
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(slice(animals, 2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(slice(animals, 2, 4));
// Expected output: Array ["camel", "duck"]

console.log(slice(animals, 1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(slice(animals, -2));
// Expected output: Array ["duck", "elephant"]

console.log(slice(animals, 2, -1));
// Expected output: Array ["camel", "duck"]

console.log(slice(animals,));
  // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]




