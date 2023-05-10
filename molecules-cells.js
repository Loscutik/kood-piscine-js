/*
Create two functions which accept a string, and return a string:

RNA: that converts a DNA strand into its compliment RNA strand.
DNA: that converts an RNA strand into its compliment DNA strand.
Compliments:

DNA | RNA
 G  -  C
 C  -  G
 T  -  A
 A  -  U
Each strand must be represented as upper case string, without spaces, eg: "ATCG" is a valid DNA strand.
*/

function RNA(str) {
    const DNAtoRNAmap = new Map([
        ['G', 'C'],
        ['C', 'G'],
        ['T', 'A'],
        ['A', 'U'],
    ]);

    return str.replaceAll(/./g, (match) => DNAtoRNAmap.get(match));
}

function DNA(str) {
    const RNAtoDNAmap = new Map([
        ['C', 'G'],
        ['G', 'C'],
        ['A', 'T'],
        ['U', 'A'],
    ]);

    return str.replaceAll(/./g, (match) => RNAtoDNAmap.get(match));
}

console.log(RNA('ATCGTG'));
console.log(DNA('UAGCAC'));