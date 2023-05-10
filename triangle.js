/*
Create a function named triangle that takes a string and a number as arguments. Your function will return a string representing a triangle.

The string will denote the characters which construct the triangle, and the number denotes its height.

Example
* character and depth of 5:
*
**
***
****
*****
No new line in last line
*/

function triangle(character, depth) {
    if (depth === 0 || character.length === 0) { return ''; }
    let str = character;
    for (let i = 1; i < depth; i++) {
        str = str.concat('\n');
        for (let j = 0; j <= i; j++) {
            str = str.concat(character);
        }

    }
    return str;
}

console.log(triangle('*t', 15));
console.log('$f'.concat('\nrt'));