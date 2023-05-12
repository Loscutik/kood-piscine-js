/*
Have you been been pondering over the etymology of grep?
Create 4 regular expression variables:
normal: matches with the expression 'hi'.
begin: matches with the expression 'hi', only when it is at the beginning.
end: matches with the expression 'hi', only when it is at the end.
beginEnd: matches with the expression 'hi', only when it is exactly hi.
*/


const normal=/hi/;
const begin=/^hi/;
const end=/hi$/;
const beginEnd=/^hi$/;

