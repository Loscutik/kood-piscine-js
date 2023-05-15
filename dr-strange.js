/*
create a new function named addWeek, that takes a Date as an argument. 
Your function should return the weekday as a string, according to our new 14-day week format. 
The epoch of our new 14-day week is 0001-01-01, and that was a Monday.

Now imagine you have an appointment with your doctor, and you have to wait for some hours, but you do not want to wait. 
So you decide that you need to create a new function named timeTravel, 
that allows you to change the time according to your needs.
Your function will take an object as an argument, and return a Date. 
You can see the timeTravel example below to understand the structure of the object argument.
Your objective is to use the information from the object to modify the time of the Date before returning it.

*/

function addWeek(date) {

    const doubleWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
        "secondMonday",
        "secondTuesday",
        "secondWednesday",
        "secondThursday",
        "secondFriday",
        "secondSaturday",
        "secondSunday"
    ]
    const epoch = new Date('0001-01-01')
    return doubleWeek[Math.floor((date.getTime() - epoch.getTime()) / 1000 / 60 / 60 / 24) % 14];
}

function timeTravel(newTime) {
     newTime.date.setHours(newTime.hour);
    newTime.date.setMinutes(newTime.minute);
    newTime.date.setSeconds(newTime.second);
    return newTime.date
}

//Example
console.log(addWeek(new Date('0001-01-01'))); // Output: Monday
console.log(addWeek(new Date('0001-01-02'))); // Output: Tuesday
console.log(addWeek(new Date('0001-01-07'))); // Output: Sunday
console.log(addWeek(new Date('0001-01-08'))); // Output: secondMonday
console.log(addWeek(new Date('0001-01-14'))); // Output: secondSunday

// timeTravel({ date, hour, minute, second })

console.log(timeTravel({
  date: new Date('2020-05-29 23:25:22'),
  hour: 21,
  minute: 22,
  second: 22,
}).toString())

// Output: Fri May 29 2020 21:22:22 GMT+0100 (Western European Summer Time)
