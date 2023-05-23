/*
Create a function named flags that receives an object and returns the specific aliases and descriptions from the properties of that object.

The help flag:

Must be present in the output by default.
When not present in the input, it should return the description of all flags.
When present in the input, it specifies the descriptions of the flags that are passed to help. (ex: help: ['divide'])
*/

function flags(flagsObj) {
    const aliases = Object.keys(flagsObj).reduce((acc, flag) => {
        if (flag !== 'help') {
            return { ...acc, [flag.slice(0, 1)]: flag };
        }
        return acc;
    }, { h: 'help' });

    let descriptionArr = [];
    const helpNeeds =flagsObj.help??Object.keys(flagsObj);
    for (let flag of helpNeeds) {
        descriptionArr.push(`-${flag.slice(0,1)}, --${flag}: ${flagsObj[flag]}`)
    }
    return {alias: aliases, description: descriptionArr.join('\n')}
}


// Example:
const arithmetic = {
    multiply: 'multiply the values',
    divide: 'divides the values',
    help: ['divide']
}

console.log(flags(arithmetic));
/** outputs :
{
  alias: { h: 'help', m: 'multiply', d: 'divide'}
  description: '-d, --divide: divides the values',
}
*/