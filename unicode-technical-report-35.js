/*
Create a function named format which accepts a valid Date and a format string. Your function should return a correctly formatted string.

Your function must handle:

y
yyyy
G
GGGG
M
MM
MMM
MMMM
d
dd
E
EEEE
h
hh
m
mm
s
ss
H
HH
a
*/

function format(date, format) {
    const week = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    const eraFull = ['Before Christ', 'Anno Domini'];
    const eraShort = ['BC', 'AD'];

    const ampm = ['AM', 'PM'];

    let res = format

    let year = date.getFullYear();
    const era = year < 0 ? 0 : 1;
    year = String(year >= 0 ? year : -year);
    const month = date.getMonth();
    const dayOfMonth = String(date.getDate());
    const dayOfWeek = date.getDay();
    const hour = date.getHours();
    const minute = String(date.getMinutes());
    const second = String(date.getSeconds());
    // yyyy
    res = res.replace("yyyy", year.padStart(4, '0'));

    // y
    res = res.replace("y", year);

    // dd
    res = res.replace("dd", dayOfMonth.padStart(2, '0'));

    // d
    res = res.replace("d", dayOfMonth);

    // HH
    res = res.replace("HH", String(hour).padStart(2, '0'));

    // H
    res = res.replace("H", String(hour));

    // hh
    res = res.replace("hh", String(hour % 12).padStart(2, '0'));

    // h
    res = res.replace("h", hour % 12);

    // mm
    res = res.replace("mm", minute.padStart(2, '0'));

    // m
    res = res.replace("m", minute);

    // ss
    res = res.replace("ss", second.padStart(2, '0'));

    // s
    res = res.replace("s", second);

    // a
    res = res.replace("a", ampm[hour < 12 ? 0 : 1]);

    // GGGG
    res = res.replace("GGGG", eraFull[era]);

    // G
    res = res.replace("G", eraShort[era]);

    // MMMM-M
    const arr = res.match(/M{2,4}|((?<!A|P)M)/g)
    if (arr) {
        for (let i = 0; i < arr.length; i++) {
            switch (arr[i]) {
                case "MMMM":
                    res = res.replace(arr[i], monthNames[month]);
                    break;

                case "MMM":
                    res = res.replace(arr[i], monthNames[month].slice(0, 3));
                    break;

                case "MM":
                    res = res.replace(arr[i], String(month + 1).padStart(2, '0'));
                    break;

                case "M":
                    res = res.replace(arr[i], String(month + 1));
                    break;
            }
        }
    }

    // EEEE
    res = res.replace("EEEE", week[dayOfWeek]);

    // E
    res = res.replace("E", week[dayOfWeek].slice(0, 3));


    return res;
}


// const landing = new Date('July 20, 1969, 20:17:40')
// const returning = new Date('July 21, 1969, 17:54:12')
// const eclipse = new Date(-585, 4, 28)
// const ending = new Date('2 September 1945, 9:02:14')

// console.log(eclipse)
// console.log(eclipse.getMonth())
// console.log(format(eclipse, 'MMM') )