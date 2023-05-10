/*
Create a function named repeat that takes a string and a number as arguments, 
and returns the string repeated as many times as the number describes. 
It should function like String.repeat(), but of course you must make your own.
*/

const repeat = (str, count) => {
    if (str !== null && count >= 0) {
        if (str.length == 0 || count == 0) {
            return '';
        }
        let rpt = '';
        for (let i = 0; i < count; i++) {
            rpt += str;
        }
        return rpt;
    }
    return '';
  }