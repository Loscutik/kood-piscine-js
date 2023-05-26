/*
Create a retry function, that takes 2 arguments:

count: indicates maximum number of retries.
callback: an async function that will be invoked for every attempt.
retry returns a function that invokes the callback function. 
That function passes its arguments to callback, and returns the value from callback.

The function returned by retry must catch errors from callback. 
After that function has caught count errors, it must throw an Error.

***if count is 3, callback will be invoked at most 4 times, the initial call plus 3 retries.


Create function named timeout, that takes 2 arguments:

delay: indicates maximum wait time.
callback: an asynchronous function that will be invoked.
timeout returns a function that invokes and returns the value from callback. 
The function must pass its arguments to callback. 
If callback does not resolve before delay, your function returns Error('timeout').
*/

function retry(count, callback) {
    let counter = 0;
    async function tryer(...args) {
        try {
            const res = await callback(...args);
            return res;
        }
        catch (err) {
            if (counter > count) { throw err; }
            counter++;
            return await tryer(...args);
        }
    }

    return tryer;
}


function timeout(delay, callback) {
    async function runner(...args) {
        const tryer = callback(...args);
        const delayer = new Promise((res, rej) => { setTimeout(rej, delay, Error('timeout')) });
        let value = await Promise.race([tryer, delayer])
        return value;
    }
    return runner;
}

async function cb(t) {
    let res = t;
    while (t > 0) { t-- }
    res = res / 1000 + 1;
    return res;
}
const tt = timeout(10, cb)
//cb(1000000000).then(v => console.log(v));
tt(1000000000).then((v) => console.log('tt=',v));

