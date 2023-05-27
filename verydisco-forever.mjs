
/*
Create a verydisco-forever.mjs script that does exactly the same as you verydisco script, 
but writes the result in a verydisco-forever.txt file instead of printing it in the console.
*/
import { writeFile } from 'node:fs/promises';


let words = process.argv[2].split(' ');
let disco = words.map((word) => { let l = Math.ceil(word.length / 2); return `${word.slice(l)}${word.slice(0, l)}` }).join(' ');
await writeFile('verydisco-forever.txt', disco);
