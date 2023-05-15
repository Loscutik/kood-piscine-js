/*
console.log( Create a function named matchCron, which accepts a vali)d cron string, and a valid Date. 
Your function should return true if the pattern matches the Date.

You only need to implement numbers and *. Other complex patterns are not required.

Only valid patterns will be tested.
*/


function matchCron(cron, date) {
    const normalizeDay = (date) => (date.getDay() + 6) % 7+1
    let time = [];
    time.push(date.getMinutes());
    time.push(date.getHours());
    time.push(date.getDate());
    time.push(date.getMonth()+1);
    time.push(normalizeDay(date));

    const cronArr = cron.split(' ');
    for (let i = 0; i < cronArr.length; i++) {
        if (cronArr[i] !== '*' && cronArr[i] != time[i]) {
            return false;
        }
    }
    return true;
}

console.log( matchCron('9 * * * *', new Date('2020-05-25 18:09:00'))) // -> true
console.log( matchCron('9 * * * *', new Date('2020-05-30 19:09:00'))) // -> true
console.log( matchCron('* * * * 1', new Date('2020-06-01 12:00:00'))) // -> false
console.log( matchCron('* * * 2 *', new Date('2021-02-01 00:00:00'))) // -> true
//         | | | | |
//         | | | | +- Day of the Week   (range: 1-7, 1 is Monday)
//         | | | +--- Month of the Year (range: 1-12)
//         | | +----- Day of the Month  (range: 1-31)
//         | +------- Hour              (range: 0-23)
//         +--------- Minute            (range: 0-59)