/*
Let's eliminate Sundays by taking them out of the calendar, making a week only six days long, from "Monday" to "Saturday".
Create a function called sunnySunday that takes a Date as an argument and returns the weekday as a string.
01/01/0001 is a Monday.
*/


function sunnySunday(date) {
    const week6 = ['Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ]
   return week6[((date-(new Date('0001-01-01T00:00:00')))/(1000*60*60*24))%6]
}
console.log(sunnySunday(new Date('0001-01-01')));