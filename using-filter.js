/*
Create the following functions:

Your solutions must use filter.
*/
// filterShortStateName: accepts an array of strings, and returns only those strings which contain less than 7 characters.
function filterShortStateName(strsArr) {
    return strsArr.filter(str => str.length < 7);
}

// filterStartVowel: accepts an array of strings, and returns only those that start with any vowel (a,e,i,o,u).
function filterStartVowel(strsArr) {
    return strsArr.filter(str => /^[aeiou]/i.test(str));
}

// filter5Vowels: accepts an array of strings, and returns only those which contain at least 5 of any vowels (a,e,i,o,u).
function filter5Vowels(strsArr) {
    return strsArr.filter(str => {
        const match = str.match(/[aeiou]/gi);
        return match.length >= 5
    });
}

// filter1DistinctVowel: accepts an array of strings, and returns only those which contain only one distinct vowel (a,e,i,o,u). 
// For example, "Alabama" contains only 1 distinct vowel "a".
function filter1DistinctVowel(strsArr) {
    return strsArr.filter(str => {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        // get array of regexp
        const regexpArr = vowels.map((vowel, index, vowelsArr) => new RegExp(`(?=^[^${vowelsArr.filter(v => v !== vowel).join('')}]*$).*${vowel}.*`, 'gi'));
        for (let regex of regexpArr) {
            if (regex.test(str)) return true;
        }
        return false

    });
}
/*
multiFilter: accepts an array of objects, and returns only those which:
    the key capital contains at least 8 characters.
    the key name does not start with a vowel.
    the key tag has at least one vowel.
    the key region is not "South"
*/
function multiFilter(objectsArr) {
    return objectsArr.filter(obj => {
        return obj.capital.length >= 8 && !/^[aeiou]/i.test(obj.name) && /[aeiou]/i.test(obj.tag) && obj.region !== "South";
    });
}

console.log(filter1DistinctVowel(['farategiogo', 'fer', 'aeaea', 'oooh', 'hoooh', 'hooo', 'ooho']))
