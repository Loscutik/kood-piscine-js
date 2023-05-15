/*
Create a function named firstDayWeek, which accepts a specific week in a given year:

number: representing a week of the year (between 1 and 53).
string: representing a year.
Your function should return a string representing the date of the first day of that specific week in the format dd-mm-yyyy.

Week 1 is in all cases, the week which contains the 1st of January.

The first day of a week is a Monday.

If the start of the week is in the previous year, then your function should return the first day of the specified year.
*/

function firstDayWeek(week, year) {
    if (+week < 1 || +week > 53) return undefined;
    if (+year < 1 || +year > 9999) return undefined;
    const newYear = new Date();
    // in this way we solved the problem with the years before 1900, because Date(00) means Jan 1, 1900
    newYear.setFullYear(year);
    newYear.setMonth(0);
    newYear.setDate(1);
    if (week == 1) { return  newYear.toISOString().slice(0,10).split('-').reverse().join('-'); }
    const normalizeDay = (date) => (date.getDay() + 6) % 7
    const res = new Date(newYear.getTime() + (7 * (week - 1) - normalizeDay(newYear)) * 24 * 60 * 60 * 1000);
    return res.toISOString().slice(0,10).split('-').reverse().join('-');
}

console.log(firstDayWeek(7, '1923'))    
console.log(firstDayWeek(1, '1000'))    
console.log(firstDayWeek(52, '1000'))    
console.log(firstDayWeek(52, '0001'))    