/*
Create the following functions:

isValid: accepts a Date, and returns false if the Date is invalid.
isAfter: accepts two Date arguments, and returns true if the first is greater then the second.
isBefore: accepts two Date arguments, and returns true if the second is greater than the first.
isFuture: accepts a Date, and returns true if the Date is valid, and is after than the present date.
isPast: accepts a Date, and returns true if the Date is valid, and is before the present date.
*/

function isValid(date) {
    if (isNaN(date)) return false;
    if (date instanceof Date) {
        return !isNaN(date.valueOf());
    }
    return typeof date === 'number' && Number.isInteger(date) && date > -8_640_000_000_000_000 && date < 8_640_000_000_000_000
}

function isAfter(date1, date2) {
    return date1 > date2;
}
function isBefore(date1, date2) {
    return date1 < date2;
}
function isFuture(date) {
    return isValid(date) && isAfter(date, new Date());
}
function isPast(date) {
    return isValid(date) && isBefore(date, new Date());
}
const dates = [
    new Date(),
    new Date('2016-01-01'),
    new Date(''),
    new Date(1488370835081),
    new Date(NaN),
    '2016-01-01',
    '',
    1488370835081,
    NaN,
    2.5
]
dates.forEach(d => console.log(d, '\t\t', isValid(d)));