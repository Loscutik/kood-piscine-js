/*
Create a function named ionOut, that receives a string and 
returns an array with every word containing 'ion' following a 't'. 
The words should be returned without the 'ion' part.

*/
function ionOut(str) {
    let regex = /\b\S*t(?=ion)/g
    let matches = str.match(regex);
    if (matches===null){return []}
    return matches;
}

console.log(ionOut('attention, direction'))
console.log(ionOut('promotion, provision'))
console.log(ionOut('transfusion'))
console.log(
    ionOut(' 1st position is the vision of the 2nd position')
)
