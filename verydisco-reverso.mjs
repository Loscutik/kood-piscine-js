/*Create a verydisco-reverso.mjs script that:

takes the name of a file (with the extension) as a first argument
reads this file
deciphers the content of this file by reversing it from the very disco mode
prints the result in the console
For example:

Reading the verydisco content of your verydisco.txt file would print discovery in console.
*/

import { readFile } from 'node:fs/promises';

let filePath = process.argv[2];
try {
    const contents = await readFile(filePath, { encoding: 'utf8' });
    let disco = contents.split(' ').map((word) => { let l = Math.floor(word.length / 2); return `${word.slice(l)}${word.slice(0, l)}` }).join(' ');
    console.log(disco);
} catch (err) {
    console.error(err.message);
}
