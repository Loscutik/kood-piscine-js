/*
Create the following functions:

Your solutions must use map.
*/
/*
** Cities Only **
citiesOnly: accepts an array of objects and returns an array of strings from the city key.
*/

/*
** Upper Casing States **
upperCasingStates: accepts an array of strings, and returns a new array of strings. 
The returned array will be the same as the argument, except the first letter of every word must be capitalized.
*/

/*
** Fahrenheit to Celsius **
fahrenheitToCelsius: accepts an array of fahrenheit temperatures as strings, and returns an array of strings converted to celsius. 
Round down the result.
*/

/*
** Trim Temp **
trimTemp: accepts an array of objects, and returns a new array of objects with the same structure. 
The temperature strings must have their spaces removed in the new array.
*/

/*
** Temp Forecasts **
tempForecasts: accepts an array of objects, and returns an array of formatted strings. See the example below:
*/


function citiesOnly(cityObjs) { return cityObjs.map(cityObj => cityObj.city); }
function upperCasingStates(states) {
    return states.map(
        state => state.split(' ').map(chunk => chunk.charAt(0).toUpperCase() + chunk.slice(1).toLowerCase()).join(' ')
    );
}
function fahrenheitToCelsius(temperatures) { return temperatures.map(temp => Math.floor((temp.slice(0, -2) - 32) * 5 / 9) + '°C'); }
function trimTemp(cityObjs) {
    cityObjs.map(cityObj => cityObj.temperature = cityObj.temperature.split(' ').join(''));
    return cityObjs;
}
function tempForecasts(cityObjs) {
    trimTemp(cityObjs);
    return cityObjs.map(cityObj => {
        const temperature = Math.floor((cityObj.temperature.slice(0, -2) - 32) * 5 / 9);
        const city = cityObj.city.split(' ').map(chunk => chunk.charAt(0).toUpperCase() + chunk.slice(1).toLowerCase()).join(' ');
        const state = cityObj.state.split(' ').map(chunk => chunk.charAt(0).toUpperCase() + chunk.slice(1).toLowerCase()).join(' ');

        return `${temperature}°Celsius in ${city}, ${state}`;
    });

}


console.log(citiesOnly([
    {
        city: 'Los Angeles',
        temperature: '  101 °F   ',
    },
    {
        city: 'San Francisco',
        temperature: ' 84 ° F   ',
    },
]))// -> ['Los Angeles', 'San Francisco']
console.log(upperCasingStates(['alabama', 'new jersey'])) // -> ['Alabama', 'New Jersey']
console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F'])) // -> ['20°C', '15°C', '-4°C']
console.log(trimTemp([
    { city: 'Los Angeles', temperature: '  101 °F   ' },
    { city: 'San Francisco', temperature: ' 84 ° F   ' },
]))/* -> [
  { city: 'Los Angeles', temperature: '101°F' },
  { city: 'San Francisco', temperature: '84°F' },
] */
console.log(tempForecasts([
    {
        city: 'Pasadena',
        temperature: ' 101 °F',
        state: 'california',
        region: 'West',
    },
]))// -> ['38°Celsius in Pasadena, California']