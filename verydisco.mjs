/*

Create a verydisco.mjs script that :

takes the 1st argument from the command line (after the program name)
makes it very disco:
cut each word from this argument in 2 (rounded up),
re-compose a word by concatenating the chunks in the other order
display the result in console
If the argument passed is a sentence, each word of the sentence must be "very disco".

For example:

discovery would print verydisco (🕺🏼) in console.
Node is awesome would print deNo si omeawes in the console.
*/
let words = process.argv[2].split(' ');
let l = words.map((word) => { let l = Math.ceil(word.length / 2); return `${word.slice(l)}${word.slice(0, l)}` }).join(' ');
console.log(l);
