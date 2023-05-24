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
        console.log('result: ' + result);
        result = fn.apply(null, args);
        return result;
    }
    function debounced() {
        args = arguments;
        // якщо ту ж дебаунсед функцію запущено знов, припинити виконання попередньої. 
        // Тобто це випадок коли було створено const deb=debounce(adding, 20); і потім запущено її декілька разів.
        clearInterval(intervalID); 
        console.log('-----int0 = ', intervalID);
        intervalID = setTimeout(invoke, wait);
        
        console.log('int= ', intervalID);
        console.log(`result${wait}: ` + result);
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
        if (intervalID===undefined&&leading){
            invoke();
        }
        clearInterval(intervalID); 
        intervalID = setTimeout(invoke, wait);
        
        return result;
    }
    return debounced;
}

let arr1 = [];
const adding = (arr, el) => arr.push(el)
let r=debounce(adding, 50)(arr1, 1)
setTimeout(() => console.log('r10: ' + r),15);
r=debounce(adding, 10)(arr1, 2)
console.log('r25: ' + r);
r=debounce(adding, 10)(arr1, 3)
console.log('r50: ' + r);
setTimeout(() => console.log(arr1), 100)
let arr2 = [];
const deb=debounce(adding, 20);
setTimeout(() => console.log('const deb 1: ' + deb(arr2, 20)),10);
setTimeout(() => console.log('const deb 1: ' + deb(arr2, 20)),10);
setTimeout(() => console.log(arr2),100);

// WARNING: This is not a drop in replacement solution and
// it might not work for some edge cases. Test your code! 
// const opDebounce = (func, delay) => {
//     let timerId
//     return (...args) => {
//       if (!timerId ) {
//         func(...args)
//       }
//       clearTimeout(timerId)
  
//       timerId = setTimeout(() => func(...args), delay)
//     }
//   }
  