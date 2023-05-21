/*
Create two functions which takes an object and a string or array of strings. 
They should return a new object which:

pick: contains only those keys which appear in the string or array of strings.
omit: contains only those keys which do not match the string, or do not appear in the array of strings.
Those functions are pure and must not modify the given object
*/

function pick(obj, keysDesired) {
    if (!Array.isArray(keysDesired)) {
        keysDesired = [keysDesired];
    }
    const keys = Object.keys(obj).filter(key => keysDesired.includes(key));
    return keys.reduce((acc, key) => {
        acc[key] = obj[key];
        return acc;
    }, {});
}

function omit(obj, keysNotDesired) {
    if (!Array.isArray(keysNotDesired)) {
        keysNotDesired = [keysNotDesired];
    }
    const keys = Object.keys(obj).filter(key => !keysNotDesired.includes(key));
    return keys.reduce((acc, key) => {
        acc[key] = obj[key];
        return acc;
    }, {});
}

const agent= {
    firstName: 'James',
    lastName: 'Bond',
    age: 25,
    email: 'jamesbond@hotmail.com',
  }
  const car= { brand: 'ford', motor: 'v8', year: 2000 }
  const user= { firstName: 'John', lastName: 'Doe', age: 32, ageVerified: false }
console.log(pick(agent, ['firstName', 'lastName']));
console.log(pick(car, ['brand', 'year']));
console.log(pick(user, 'ageVerified'));
console.log(pick({ something: 5, __proto__: { d: 6 } }, ['proto', 'something']));