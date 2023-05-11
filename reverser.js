/*
Create a function named reverse which accepts an array or a string. 
It should work like Array.reverse(), and of course you cannot use that.
*/

const reverse = (arr) => {
  let array = true;
  if (typeof arr === 'string') { arr = arr.split(''); array = false; }
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let tmp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tmp;
  }
  return array?arr:arr.join('');
}

const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// Expected output: "array1:" Array ["one", "two", "three"]

console.log('reversed array1:', reverse(array1));
// Expected output: "array1:" Array ["three", "two", "one"]
console.log('array1 after reverse:', array1);

const str = 'hello';
console.log('reversed array1:', reverse(str));
console.log('array1 after reverse:', str);