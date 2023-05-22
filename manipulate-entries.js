/*
Create 3 functions which work like the .filter, .map and .reduce array methods, but for the entries in the grocery cart.

filterEntries: filters using both key and value, passed as an array ([k, v]).
mapEntries: changes the key, the value or both, passed as an array ([k, v]).
reduceEntries: reduces the entries passing keys and values as an array ([k, v]).

Create 3 additional functions that use your previously created functions and take an object as input:

totalCalories: that will return the total calories of a cart.
lowCarbs: that leaves only those items of the cart which have less than 50 grams of carbs after calculating the total amount.
cartTotal: that will give you the right amount of calories, proteins and so on for each item in your grocery cart.
Think about the shape of Object.entries()
*/

function filterEntries(obj, callBack) {
    const entries = Object.entries(obj);
    return Object.fromEntries(entries.filter(callBack));

}
function mapEntries(obj, callBack) {
    const entries = Object.entries(obj);
    return Object.fromEntries(entries.map(callBack));
}
function reduceEntries(obj, callBack, initialValue) {
    const entries = Object.entries(obj);
    if (arguments.length === 2) {
        return entries.reduce(callBack)
    }
    return entries.reduce(callBack, initialValue);
}

function totalCalories(products) {
    return reduceEntries(products, (accCalories, [productName, quantity]) => accCalories + quantity * nutritionDB[productName].calories,0)/100;
}
function lowCarbs(products) {
    return filterEntries(products, ([productName, quantity]) => nutritionDB[productName].carbs * quantity / 100 < 50);
}
function cartTotal(products) {
    return mapEntries(products, ([productName, quantity]) => [productName, mapEntries(nutritionDB[productName], ([nutrition, value]) => [nutrition, Math.round(value /100 * quantity*1000)/1000 ])]);
}

//Exampels

// const nutritionDB = {
//     tomato: { calories: 18, protein: 0.9, carbs: 3.9, sugar: 2.6, fiber: 1.2, fat: 0.2 },
//     vinegar: { calories: 20, protein: 0.04, carbs: 0.6, sugar: 0.4, fiber: 0, fat: 0 },
//     oil: { calories: 48, protein: 0, carbs: 0, sugar: 123, fiber: 0, fat: 151 },
//     onion: { calories: 0, protein: 1, carbs: 9, sugar: 0, fiber: 0, fat: 0 },
//     garlic: { calories: 149, protein: 6.4, carbs: 33, sugar: 1, fiber: 2.1, fat: 0.5 },
//     paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1, fiber: 0, fat: 12.89 },
//     sugar: { calories: 387, protein: 0, carbs: 100, sugar: 100, fiber: 0, fat: 0 },
//     orange: { calories: 49, protein: 0.9, carbs: 13, sugar: 9, fiber: 0.2, fat: 0.1 },
// }

const groceriesCart = { orange: 500, oil: 20, sugar: 480 }

console.log('Total calories:')
console.log(totalCalories(groceriesCart))
console.log('Items with low carbs:')
console.log(lowCarbs(groceriesCart))
console.log('Total cart nutritional facts:')
console.log(cartTotal(groceriesCart))
/*output:

Total calories:
2112.2
Items with low carbs:
{ oil: 20 }
Total cart nutritional facts:
{
  orange: {
    calories: 245,
    protein: 4.5,
    carbs: 65,
    sugar: 45,
    fiber: 1,
    fat: 0.5
  },
  oil: {
    calories: 9.6,
    protein: 0,
    carbs: 0,
    sugar: 24.6,
    fiber: 0,
    fat: 30.2
  },
  sugar: {
    calories: 1857.6,
    protein: 0,
    carbs: 480,
    sugar: 480,
    fiber: 0,
    fat: 0
  }
}
*/