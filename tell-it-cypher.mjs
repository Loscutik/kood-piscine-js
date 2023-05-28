/*
Create a tell-it-cypher.mjs script that:

Takes a file as first argument
Takes one of these keywords as second argument:
encode: convert your file to base64, then save the result in a cypher.txt file.
decode: convert your file from base64, then save the result in a clear.txt file.
Could take a string as third argument and use it as the new file name. Extension must be precised.
*/

import { readFile, writeFile } from "fs/promises";
import { Buffer } from "node:buffer";

try {
    const filename = process.argv[2] ?? '.';
    const option = process.argv[3] ?? 'encode';
    const newFileName = process.argv[4] ?? (option === 'encode' ? 'cypher.txt' : 'clear.txt');

    let content = await readFile(filename);
    console.log(content)
    content = option === 'encode' ?content.toString('base64') : Buffer.from(content.toString(), "base64");
    console.log(content)
    writeFile(newFileName, content);

} catch (e) { console.error(e); }


const buf1 = Buffer.from('this is a tést');
const buf2 = Buffer.from('7468697320697320612074c3a97374', 'hex');

console.log(buf1);
console.log(buf2);
console.log(buf1.toString());
// Prints: this is a tést
console.log(buf2.toString());
// Prints: this is a tést
console.log(buf1.toString('latin1'));
// Prints: this is a tÃ©st