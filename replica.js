/*
Create a function named replica that allows you 
to deep assign the values of all properties from one or more objects to a target object.
*/
function replica(...objs) {
    return objs.reduce((acc, obj) => {
        for (let key of Object.keys(obj)) {
            if (obj[key] !== null && obj[key] !== undefined && obj[key].constructor === Object&&acc[key] !== null && acc[key] !== undefined && acc[key].constructor === Object) {
                acc[key] = replica(acc[key],obj[key]);
            } else {
                acc[key] = obj[key];
            }
        }
        return acc;
    },{});
}
//console.log({}.h)
console.log(replica({ a: [1, 2, 4] }, { a: { b: [4] } }));