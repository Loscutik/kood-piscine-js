/*
Create a function named pronoun that accepts a string parameter. 
This function returns an object that will have all the personal pronouns, present in the string, as keys. 
Each key will have a sub object with the first word after each of the personal pronouns found in the string.

You must also a count property to the sub object, with the amount of occurrences of the pronoun.

Pronouns:

i
you
he
she
it
they
we
*/
function pronoun(str) {
    const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];
    const words =  str.toLowerCase().match(/[a-z]+/g);
    return words.reduce((acc, word, index) => {
        if (pronouns.includes(word)) {
            const currentSateliteWord = (index < words.length - 1 && !pronouns.includes(words[index + 1])) ? words[index + 1] : '';
            // form an object for the pronoun
            const pronounObject = acc[word] ?? {};
            if (pronounObject.word === undefined) {
                pronounObject.word = [];
                pronounObject.count = 0;
            }
            if (currentSateliteWord !== '' && !pronounObject.word.includes(currentSateliteWord)) {
                pronounObject.word.push(currentSateliteWord);
            }
            pronounObject.count++;

            return { ...acc, [word]: pronounObject };
        }
        return acc;
    }, {});
}

// Example
let ex = 'Using Array Destructuring, you you can iterate through objects easily.'
// { you: { word: [ 'can' ], count: 2 } }
console.log(pronoun(ex));
ex = 'If he you want to buy something you have to pay you.'
console.log(pronoun(ex));
// {
//   he: { word: [], count: 1}
//   you: { word: [ 'want', 'have' ], count: 2 }
// }
let o = {}
console.log(o['h'],/*o['k']['j'] ?? 0, */o['k'] = 2, o['k'] ?? 0);