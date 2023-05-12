/*
Create a function named groupPrice, that can find prices in a given string.
Your function will return 2D array with the full price breakdown.
If there is no match, your function should return an empty array.

Given price of USD12.31:

[["USD12.31", "12", "31"]]
*/

function groupPrice(str) {
    let priceREgex = /(?:USD|\$)(\d+)\.(\d{2})/g;
    let result = [];
    let arr
    while ((arr = priceREgex.exec(str)) !== null) {
        let tmp =[]
        for(let a of arr){tmp.push(a)}
        result.push(tmp);
    }
    return result;
}

console.log(groupPrice('The price of the cereals is $4.00.'))

console.log(groupPrice('the total is USD19.98'))

console.log(groupPrice('excuse me sir it is missing $0.45'))

console.log(groupPrice('excuse me sir here is your change $99.20'))

console.log(groupPrice('this, 0.32, is not a match'), [])
console.log(groupPrice('product one its $9.98 and the second one its $10.20'))
