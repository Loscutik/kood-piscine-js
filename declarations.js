// Create the following constant variables:

// escapeStr: a string which contains the following special characters: `, \, /, " and '.
// arr: an array containing the values 4 and '2'.
// obj: an object containing primitive values:
// str: with a string value.
// num: with a number value.
// bool: with a boolean value.
// undef: with a undefined value.
// nested: an object containing:
// arr: an array of 3 values: 4, undefined and '2'.
// obj: an object with 3 properties
// str with a string value.
// num with a number value.
// bool with a boolean value.
// nested, arr and obj must be frozen, so that their elements or properties cannot be changed.

const escapeStr = `\`\\ / " '`;
const arr = [4, '2'];
const obj = {
    str: "string value",
    bool: true,
    undef: undefined
};

const nested = {
    arr: [4, undefined, '2'],
    obj: {
        str: "string value",
        num: 45,
        bool: true

    }
};