/*
Create two functions:

race: that works like Promise.race.

some: that takes an array of promises or values, and count number. 
    It should return the first count resolved values. 
    Empty arrays or a count of 0 return a promise resolving to undefined.
*/



function race(promises) {
    return new Promise(function (resolve, reject) {
        // let resolvedEntries = [];
        promises.forEach((promise) => {
            if (promise instanceof Promise) {
                promise.then((value) => {
                    resolve(value)
                }).catch((err) => { reject(err) })
            } else {

                resolve(promise);
            }
        });

    });
}

function some(promises, count) {

    return new Promise(function (resolve, reject) {
        if (count ===0 || promises.length === 0) {resolve([])}
       // let counter = 0;
        let results = [];
        for (let i = 0; i < promises.length; i++) {
            if (promises[i] instanceof Promise) {
                promises[i].then((value) => {
                    promises[i] = value;
                    count--;
                    if (count===0) {
                        let res=promises.filter((el)=>!(el instanceof Promise));
                        resolve(res);
                    }
                }).catch((err) => { reject(err) })
            } else {
                count--;
                if (count===0) {
                    resolve(promises.filter((el)=>{!(el instanceof Promise)}));
                }
            }
        };

    });
}

