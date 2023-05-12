/*
Create a function named letterSpaceNumber that accepts a string; returning an array with every instance of 
a letter, followed by a space, followed by a number, 
only if that number has only one digit, and is not followed by any letter.
*/

const letterSpaceNumber = (str) => {
    return str.match(/\w \d(?=\W)/g);
}

console.log(letterSpaceNumber("It's 20 past 3"));