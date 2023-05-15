/*
Create a function named countLeapYears which accepts a Date. 
Your function should return the number of leap years to have taken place since the year 1.
*/

function countLeapYears(date) {
    let year = date.getFullYear()-1; //  to not count the current year
    return Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400);
}

console.log(countLeapYears(new Date('0001-08-09')));
console.log(countLeapYears(new Date('0004-08-09')));
console.log(countLeapYears(new Date('0041-08-09')));
console.log(countLeapYears(new Date('0304-01-09')));
console.log(countLeapYears(new Date('1660-08-09')));
console.log(countLeapYears(new Date('1663-07-09')));
console.log(countLeapYears(new Date('1664-07-09')));
console.log(countLeapYears(new Date('1664-08-09')));
console.log(countLeapYears(new Date('1664-08-09')));
console.log(countLeapYears(new Date('2020-01-01')));
console.log(countLeapYears(new Date('2048-12-08')));