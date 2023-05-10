/* 
Create 3 functions which accept an array to be searched, and a value to be matched.

indexOf: which returns the index of the first occurrence. It also accepts an optional index from where the search should begin. If the value was not found, -1 is returned.
lastIndexOf: which works just like your indexOf function, but returns the index of the last occurrence.
includes: which returns true if the value was found in the array, and false otherwise.
*/

function sameValueZero(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        // x and y are equal (may be -0 and 0) or they are both NaN
        return x === y || (x !== x && y !== y);
    }
    return x === y;
  }
  
  /*
  Negative index counts back from the end of the array — if fromIndex < 0, fromIndex + array.length is used. Note, the array is still searched from front to back in this case.
  If fromIndex < -array.length or fromIndex is omitted, 0 is used, causing the entire array to be searched.
  If fromIndex >= array.length, the array is not searched and -1 is returned.
  
  The indexOf() method compares searchElement to elements of the array using strict equality (the same algorithm used by the === operator). NaN values are never compared as equal, so indexOf() always returns -1 when searchElement is NaN.
  */
  
  const indexOf = (array, searchElement, fromIndex) => {
    fromIndex = +fromIndex; // convert to number
    if (!fromIndex) { fromIndex = 0; }
    if (fromIndex < 0) {
        fromIndex += array.length;
        if (fromIndex < 0) {
            fromIndex = 0;
        }
    }
    if (fromIndex >= array.length) { return -1 }
  
    for (let i = fromIndex; i < array.length; i++) {
        if (array[i] === searchElement) {
            return i;
        }
    }
    return -1;
  }
  
  /*
  fromIndex Optional
  Zero-based index at which to start searching backwards, converted to an integer.
  
  if fromIndex < 0, fromIndex + array.length is used.
  If fromIndex < -array.length, the array is not searched and -1 is returned. You can think of it conceptually as starting at a nonexistent position before the beginning of the array and going backwards from there. There are no array elements on the way, so searchElement is never found.
  If fromIndex >= array.length or fromIndex is omitted, array.length - 1 is used, causing the entire array to be searched. You can think of it conceptually as starting at a nonexistent position beyond the end of the array and going backwards from there. It eventually reaches the real end position of the array, at which point it starts searching backwards through the actual array elements.
  */
  const lastIndexOf = (array, searchElement, fromIndex) => {
    fromIndex = +fromIndex; // convert to number
    if (!fromIndex || fromIndex >= array.length) { fromIndex = array.length - 1; }
    
    if (fromIndex < 0) {
        fromIndex += array.length;
        if (fromIndex < 0) {
            return -1;
        }
    }
    //console.log(fromIndex, array.length);
  
    for (let i = fromIndex; i >= 0; i--) {
        if (array[i] === searchElement) {
            return i;
        }
    }
    return -1;
  }
  
  
  const includes = (array, searchElement) => {
  
    for (let i = 0; i < array.length; i++) {
        if (sameValueZero(array[i], searchElement)) {
            return true;
        }
    }
    return false;
  }
  
  /// TESTING
  
  const array = [2, 9, 9];
  console.log('indexOf');
  console.log(indexOf(array, 2)); // 0
  console.log(indexOf(array, 7)); // -1
  console.log(indexOf(array, 9, 2)); // 2
  console.log(indexOf(array, 2, -1)); // -1
  console.log(indexOf(array, 2, -3)); // 0
  const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
  
  console.log(indexOf(beasts, 'bison'));
  // Expected output: 1
  
  // Start from index 2
  console.log(indexOf(beasts, 'bison', 2));
  // Expected output: 4
  
  console.log(indexOf(beasts, 'giraffe'));
  // Expected output: -1
  
  const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
  console.log('lastIndexOf');
  console.log(lastIndexOf(animals, 'Dodo'));
  // Expected output: 3
  
  console.log(lastIndexOf(animals, 'Penguin', 2));
  // Expected output: 2
  
  console.log(lastIndexOf(animals, 'Penguin', 3));
  // Expected output: 2
  
  console.log(lastIndexOf(animals, 'Tiger')); 
  // Expected output: 1
  
  console.log(lastIndexOf(animals, 'rat'));
  // Expected output: -1
  
  console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2));
  // Expected output: 7
  
  console.log(lastIndexOf(['t', 0, 0, 't'], 't', 2));
  // Expected output: 0
  
  
  console.log('includes');
  const arr = [1, 2, 3, , NaN];
  console.log(includes(arr, 2)); // true
  console.log(includes(arr, 4)); // false
  console.log(includes(arr, 3,)); // true
  console.log(includes(arr, NaN)); // true
  console.log(includes(["1", "2", "3"], 3)); // false