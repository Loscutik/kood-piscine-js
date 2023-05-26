/*
Create a function named series that takes an array of async functions. 
It must execute them in series and return the results in order.
*/

async function series(array) {

    if (array.length === 0) return ([]);
    let values = [];
    for (let el of array) {
        if (el instanceof Promise) {
            await el.then((f) => f()).then((value) => { values.push(value) }).catch((err) => { throw (err) })
        } else {
            values.push(await el());
        }
    }
    return values;
}
