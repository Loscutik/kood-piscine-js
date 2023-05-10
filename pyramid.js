/*
Create a function named pyramid which works just like your triangle function. But, it should be pyramid shaped.

Output example
* character and depth of 5 :
    *
   ***
  *****
 *******
*********
No new line in last line
*/

function pyramid(character, depth) {
    if (depth === 0 || character.length === 0) { return ''; }

    let str = Array(depth - 1 + (character.length - 1) * (depth - 1)).fill(' ').join('').concat(character);

    for (let i = 1; i < depth; i++) {
        str = str.concat('\n').concat(Array(depth - i - 1 + (character.length - 1) * (depth - i - 1)).fill(' ').join(''));
        for (let j = 0; j <= 2 * i; j++) {
            str = str.concat(character);

        }

    }
    return str;
}

console.log(pyramid('4*', 5));