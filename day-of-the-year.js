/*
Create a function named dayOfTheYear which accepts a Date. 
Your function should return the number of days since the first day of that year.
*/

function dayOfTheYear(date) {
    let newYear = new Date(date);
    console.log(newYear);
    // in this way we solved the problem with the years before 1900, because Date(00) means Jan 1, 1900
    newYear.setDate(1);
    newYear.setMonth(0);

    return Math.floor((date - newYear) / (1000 * 60 * 60 * 24)) + 1;

}

console.log(dayOfTheYear(new Date('0001-01-31')));
console.log(dayOfTheYear(new Date('2000-12-31')));
console.log(dayOfTheYear(new Date('1600-12-31')));