/*
Create a function named all that works like Promise.all but with objects (instead of arrays).
*/

function all(obj) {
    return new Promise(function (resolve, reject) {
        const entriesOfPromisesObject = Object.entries(obj);
        if (entriesOfPromisesObject.length === 0) resolve({});
        let resolvedEntries = [];
        entriesOfPromisesObject.forEach(([key, promise]) => {
            if (promise instanceof Promise) {
                promise.then((value) => {
                    resolvedEntries.push([key, value]);
                    if (resolvedEntries.length === entriesOfPromisesObject.length) {
                        resolve(Object.fromEntries(resolvedEntries));
                    }
                }).catch((err) => { reject(err) })
            } else {
                resolvedEntries.push([key, promise]);

                if (resolvedEntries.length === entriesOfPromisesObject.length) {
                    resolve(Object.fromEntries(resolvedEntries));
                }
            }
        });

    });
}

all({ a: 1, b: true }).then((v) => console.log(v));
// all({
//     a: Promise.resolve(1),
//     b: Promise.resolve(true),
// }).then((test) => console.log(test));

// let s;
// const n1 = new Promise(function (resolve, reject) { setTimeout(() => { s = 5; resolve(3) }, 1000) });
// const n2 = new Promise(function (resolve, reject) { setTimeout(resolve, 500, 5) });

// n2.then((v) => s= v);
// console.log(n2);
// for (let i = 0; i < 1000000; i++) { if (!s) { setTimeout(() => { s = Promise.resolve(n2) }, 0) } else break; }
// console.log('0. n2=', n2, 's=', s);
// console.log('1. n2=', n2);
// setTimeout(() => { console.log('2. n1=', n1); console.log('3. n2=', n2) }, 600);
// console.log('4. s=', s);