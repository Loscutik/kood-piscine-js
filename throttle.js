/*
Create two functions that will work like _.throttle from lodash.

throttle: don't worry about the options.
opThrottle: implement the trailing and leading options.
*/
function throttle(fn, wait) {
    // let invoked = true;
    let args;
    let result;
    let intervalID;
    let lastInvokeTime;
    let leadingDone = false;
    function invoke() {
        lastInvokeTime = Date.now();
        intervalID = undefined;
        result = fn.apply(null, args);
        return result;
    }

    function throttled() {
        args = arguments;
        let time = Date.now();
        if (!(lastInvokeTime) || time - lastInvokeTime > wait) {
            if (!leadingDone) {
                leadingDone = true;
                result=invoke();
                return result;
            }
            //clearInterval(intervalID); 
            if (leadingDone && !intervalID) { //&&(!lastInvokeTime||time-lastInvokeTime >wait)) {
                intervalID = setTimeout(invoke, wait - (Date.now() - lastInvokeTime));
            }
        }
        return result;
    }

    return throttled;
}

function opThrottle(fn, wait, leading) {
    leading = leading || false;
}


let arr1 = [];
const adding = (arr, el) => arr.push(el);
let thr = throttle(adding, 7);

let r = thr(arr1, 1);
setTimeout(() => console.log(arr1), 10);

