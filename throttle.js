/*
Create two functions that will work like _.throttle from lodash.

throttle: don't worry about the options.
opThrottle: implement the trailing and leading options.
*/
function throttle(fn, wait) {
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
                result = invoke();
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

function opThrottle(fn, wait, options) {
    let leading = false,
        trailing = false;
    if (options) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }

    let args;
    let result;
    let intervalID;
    let lastInvokeTime = 0;
    let lastCallTime = Date.now();
    function invoke() {
        lastInvokeTime = Date.now();
        intervalID = undefined;
        result = fn.apply(null, args);
        return result;
    }

    function throttled() {
        let time = Date.now();
        args = arguments;
        let timeToNextWaitPoint = wait - (time - lastInvokeTime);

        if (timeToNextWaitPoint <= 0) {
            if (leading) {
                result = invoke();
                return result;
            }
            if (trailing) {
                const restTime = time - lastCallTime >= wait ? 0 : wait - (time - lastCallTime);
                clearTimeout(intervalID);
                intervalID = setTimeout(() => {
                    invoke();
                }, restTime);
                lastCallTime = time;
                return result;
            }
        }

        // there is time to the next waiting Point
        if (trailing) {
            clearTimeout(intervalID);
            intervalID = setTimeout(() => {
                invoke();
            }, wait - (time - lastInvokeTime));
            lastCallTime = time;
            return result;
        }

        return result;
    }

    return throttled;
}


// let arr1 = [];
// const adding = (arr, el) => arr.push(el);
// let thr = throttle(adding, 7);

// let r = thr(arr1, 1);
// setTimeout(() => console.log(arr1), 10);

