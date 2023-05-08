/*
Write 5 functions:

words: that takes a string, splits it by spaces, and returns an array of those substrings.
sentence: that takes an array of strings, and joins them with spaces to return a single string.
yell: that takes a string and returns it in upper case.
whisper: that takes a string and returns it in lower case, surrounded by *.
capitalize: that takes a string and transforms it so that the first character is upper case, and the subsequent characters are lower case.
*/

const words = (str) => str.split(' ');
const sentence = (array) => array.join(' ');
const yell = (str) => str.toUpperCase();
const whisper = (str) => '*'.concat(str.toLowerCase()).concat('*');
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

console.log(words('hello world'));
console.log(sentence(['hello', 'world']));
console.log(yell('hello world'));
console.log(whisper('HELLO WORLD'));
console.log(capitalize('hELLO WORLD'));
