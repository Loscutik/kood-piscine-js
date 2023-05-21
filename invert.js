/*
Create a function named invert which takes an object and returns a new one with its keys and values inverted.
*/
function invert(obj) {
    let invertedObj = {};
    // for (let key in obj) {
        //     invertedObj[obj[key]] = key;
        // } // for invert({ f: 5, __proto__: { d: 6 } the result is { '5': 'f', '6': 'd' } })
        
        let values =Object.keys(obj);
        let keys = Object.values(obj);
        for (let i = 0; i < values.length; i++) {
            invertedObj[keys[i]] = values[i];
        }
        return invertedObj;
}

console.log(invert({ f: 5, __proto__: { d: 6 } }))