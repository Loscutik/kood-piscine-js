/*
Create a function named nasa that takes a number N as an argument and returns a string with all numbers from 1 to N separated by spaces. There are three exceptions:

Convert numbers which are divisible by 3 to "NA".
Convert numbers which are divisible by 5 to "SA".
Convert numbers which are divisible by 3 and 5 to "NASA".
*/
function nasa(N) {
    if (N == 0) return '';
    if (N % 15 === 0) {
        return nasa(N - 1).concat(" ", "NASA");
    }
    if (N % 3 === 0) {
        return nasa(N - 1).concat(" ", "NA");

    }
    if (N % 5 === 0) {
        return nasa(N - 1).concat(" ", "SA");

    }
    if (N == 1) return "1";
    else return nasa(N - 1).concat(" ", N);
}

console.log(nasa(0));