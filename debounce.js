/*
Create two functions that will work like _.debounce from lodash.

debounce: don't worry about the options.
opDebounce: implement the leading options.
*/
function debounce(fn, wait) {
    // let invoked = true;
    let args;
    let result;
    let intervalID;
    function invoke() {
        result = fn.apply(null, args);
        console.log(`result${wait}: ` + result);
        return result;
    }
    function debounced() {
        args = arguments;
        // якщо ту ж дебаунсед функцію запущено знов, припинити виконання попередньої. 
        // Тобто це випадок коли було створено const deb=debounce(adding, 20); і потім запущено її декілька разів.
        clearInterval(intervalID);
        //  console.log('-----int0 = ', intervalID);
        intervalID = setTimeout(invoke, wait);

        // console.log('int= ', intervalID);
        // console.log(`result${wait}: ` + result);
        return result;
    }
    return debounced;
}

function opDebounce(fn, wait, leading) {
    // let invoked = true;
    let args;
    let result;
    let intervalID;
    leading = leading || false;
    function invoke() {
        result = fn.apply(null, args);
        return result;
    }
    function debounced() {
        args = arguments;
        if (intervalID === undefined && leading) {
            invoke();
        }
        clearInterval(intervalID);
        intervalID = setTimeout(invoke, wait);

        return result;
    }
    return debounced;
}

// from Phind (like chatGPT)
const debounce2 = (func, wait = 0) => {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
}

let arr1 = [];
const adding = (arr, el) =>  arr.push(el)
let r = debounce(adding, 50)(arr1, 1)
console.log('arr1: ' ,arr1);
setTimeout(() => console.log('arr1: after 150 ' ,arr1), 150);
r = debounce(adding, 20)(arr1, 2)
r = debounce(adding, 10)(arr1, 3)
let arr2 = [];
let arr3 = [];
const deb = debounce(adding, 20);
let deb1 = deb(arr2, 'a');
const deb2 = deb(arr3, 'b');
setTimeout(() => console.log('let deb 1: ' + deb1), 10);
setTimeout(() => console.log('const deb 2: ' + deb2), 150);

setTimeout(() => console.log('arr2=', arr2), 100);
setTimeout(() => console.log('arr3=', arr3), 100);