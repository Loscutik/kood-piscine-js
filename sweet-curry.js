/*
Create the following functions with the "currying" process. Those functions should accept only one argument each.

mult2: that multiplies two numbers.
add3: that adds three numbers.
sub4: that subtracts four numbers.
*/

function mult2(a) {
    return (b)=> b*a;
}
function add3(a) {
    return (b)=> (c)=> a + b + c;
}
function sub4(a) {
    return (b)=>(c) =>(d) => a - b - c - d;
}


console.log(mult2(2)(3));
console.log(add3(2)(3)(1));
console.log(sub4(10)(5)(2)(1));