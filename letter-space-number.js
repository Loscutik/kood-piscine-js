/*
Create a function named letterSpaceNumber that accepts a string; returning an array with every instance of 
a letter, followed by a space, followed by a number, 
only if that number has only one digit, and is not followed by any letter.
*/

const letterSpaceNumber = (str) => {
    let arr= str.match(/\w \d(?=\W|$)/g);
    if (arr=== null){return [];}
    else {return arr;}
}

console.log(letterSpaceNumber("I 3 t's 20 past 3"));