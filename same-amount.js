/*
Create a function named sameAmount, that takes three arguments: 
a string, and 2 regular expressions. 
Your function should return a boolean.
The objective is to confirm that 
the regular expressions match the string the same number of times.
*/

function sameAmount(str, reg1, reg2) {
    const regex1 = new RegExp(reg1, 'g');
    const regex2 = new RegExp(reg2, 'g');
    const arr1 = str.match(regex1)
    const arr2 = str.match(regex2)

    if (arr1 === null && arr2 === null) {
        return true;
    }
    if (arr1 !== null && arr2 !== null) {
        return arr1.length === arr2.length;
    }

    return false;
}
/*
const data = `qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw
 ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd`
console.log(sameAmount('hello how are you', /l/, /e/))
console.log(sameAmount('hello how are you', /h/, /e/))
console.log(sameAmount('hello how are you', /he/, /ho/))

console.log(sameAmount(data, /i/, /p/))
console.log(sameAmount(data, /h/, /w/))
console.log(sameAmount(data, /qqqq /, /qqqqqqq/))
console.log(sameAmount(data, /q /, /qqqqqqq/))
console.log(sameAmount(data, /fs[^q]/, /q /))
console.log(sameAmount(data, /^[qs]/, /^[gq]/))
console.log(sameAmount(data, /j/, /w/))
console.log(sameAmount(data, /j/, / /))
console.log(sameAmount(data, /fs./, /jn./))
*/