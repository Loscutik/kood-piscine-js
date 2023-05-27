/*
Create a tell-me-how-many.mjs script that:

Take a relative or absolute directory path as argument from the command line.
Read this directory path.
Get the number of entries in this directory.
Print the result in console.
If there is no argument passed, the script must execute itself in the current directory
*/
import { readdir } from "fs/promises";
try {
    const path =process.argv[2]??'.';
console.log((await readdir(path)).length);
}
catch (e) {console.error(e);}