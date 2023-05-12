/*
Have you been been pondering over the etymology of grep?
Create 4 regular expression variables:
normal: matches with the expression 'hi'.
begin: matches with the expression 'hi', only when it is at the beginning.
end: matches with the expression 'hi', only when it is at the end.
beginEnd: matches with the expression 'hi', only when it is exactly hi.
*/


const normal=(str)=> str.match(/hi/);
const begin=(str)=> str.match(/^hi/);
const end=(str)=> str.match(/hi$/);
const beginEnd=(str)=> str.match(/^hi$/);

console.log('normal');

console.log(normal('hi'))
console.log(normal('higher'))
console.log(normal('likelihood'))
console.log(normal('Hi'))
console.log(normal('I love sushi'))

console.log('begin');

console.log(begin('hi'))
console.log(begin('higher'))
console.log(begin('hired'))
console.log(begin('likelihood'))
console.log(begin('Hi'))
console.log(begin('I love sushi'))

console.log('end');

console.log(end('hi'))
console.log(end('higher'))
console.log(end('likelihood'))
console.log(end('Hi'))
console.log(end('I love sushi'))

console.log('beginEnd');

console.log(beginEnd('hi'))
console.log(beginEnd('hired kimchi'))
console.log(beginEnd('higher'))
console.log(beginEnd('likelihood'))
console.log(beginEnd('Hi'))
console.log(beginEnd('I love sushi'))