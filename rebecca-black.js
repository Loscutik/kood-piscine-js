/*
Create the following functions which accept a Date:

isFriday: returns true if the Date is a Friday.
isWeekend: returns true if the Date is a weekend day.
isLeapYear: returns true if the year of the Date is a leap year.
isLastDayOfMonth: returns true if the Date represents the last day of the month.
*/


function isFriday(date) {
    return date.getDay() === 5;
}

function isWeekend(date) {
    return date.getDay() === 6 || date.getDay() === 0;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function isLastDayOfMonth(date) {
    return (new Date(date.getTime() + 24 * 60 * 60 * 1000)).getDate() === 1;
}

console.log(isFriday(new Date()));
console.log(isWeekend(new Date()));
console.log(isLeapYear(2020));
console.log(isLastDayOfMonth(new Date('2021-12-31')));


