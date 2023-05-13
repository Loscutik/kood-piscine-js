//TODO check wrong conditions:
// 1. in the crossword must be only '.','0','1','2'
// 2. words must be unique
// 3. words in array must have at least 2 letters
// 4. sum of puzzle starting cells must be equal to number of words
// 5. sum of puzzle starting cells must be less or equal to sum of rows & collumns

function crosswordSolver(crossword, words) {
    if(!Array.isArray(words)) {console.log('Error'); return false; }
    if (crossword.length === 0 || words.length===0) { console.log('Error'); return false; }
    let crosswordNet = readCrosswordNet(crossword);
    console.log(crosswordNet);
    crosswordNet.checkAcross = checkAcross;
    crosswordNet.checkDown = checkDown;
    crosswordNet.searchPlaceAndFillIn = searchPlaceAndFillIn;

    crosswordNet.checkCellDown = checkCellDown;
    crosswordNet.checkCellUp = checkCellUp;
    crosswordNet.checkCellLeft = checkCellLeft;
    crosswordNet.checkCellRight = checkCellRight;
    crosswordNet.delWord = delWord;

    /****TESTS
     //console.log(words.toSpliced(2,1));
    crosswordNet.searchPlaceAndFillIn('casa');
    console.log(crosswordNet);
    crosswordNet.searchPlaceAndFillIn('ciao');
    console.log(crosswordNet);
    crosswordNet.delWord({ i: 2, j: 0, direction: 'across' })
    console.log(crosswordNet);
    */


    let solutions = crosswordSearchSolutions(crosswordNet, words);
    if (solutions.length !== 1) { console.log('Error'); return false; }
    console.log(solutions[0]);
}

// TODO test needed. just written from draft 
function crosswordSearchSolutions(crossword, words) {
    let solutions = [];
    if (words.length === 0) {
        solutions.push(Object.assign(solutions));
        return true;
    }

    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i];
        let place = crossword.searchPlaceAndFillIn(currentWord);
        if (place) {
            if (!crosswordSearchSolutions(crossword, words.splice(i, 1))) {
                crossword.delWord(place);
                words.splice(i, 0, currentWord); // check if it's really needed
            }
        } else {
            return false;
        }
    }
    return solutions;
}

// returns an object of the crossword's net
function readCrosswordNet(str) {
    let rows = str.split('\n');
    let crosswordNet = [];
    let acrossLen = rows[0].length;
    let downLen = rows.length;
    for (let row of rows) {
        if (row.length !== acrossLen) {
            return 'Error' // rows have different lengths
        }
        // create an across row for our crosswordNet
        let across = [];
        for (let symbol of row.split('')) {
            if (symbol === '.') {
                across.push({
                    letter: '.',
                });
            } else {
                let number = +symbol;
                if (isNaN(number) || number < 0 || number > 2) return 'Error'; // invalid symbol
                across.push({
                    number: +symbol,
                    letter: '',
                });
            }
        }
        crosswordNet.push(across);
    }
    crosswordNet.accrosLen = acrossLen;
    crosswordNet.downLen = downLen;
    return crosswordNet;
}

// returns true if it is possible to put the word to the crossword across starting at the given coordinates.
// and false in the other case.
function checkAcross(word, iStart, jStart) {
    let j = jStart;
    for (let letter of word) {
        if (j >= this.accrosLen || this[iStart][j].letter === '.') { return false; } // the place is less than the word
        if (this[iStart][j].letter === '' || this[iStart][j].letter === letter) {
            j++;
        } else {
            return false;
        };
    }
    if (j < this.accrosLen && this[iStart][j].letter !== '.') { return false; } // the place is bigger than the word
    return true;
}

function checkDown(word, iStart, jStart) {//TODO like checkAcross
}

// returns a place for the word or 
// undefined if it was impossible to put the word to any places
function searchPlaceAndFillIn(word) {
    for (let i = 0; i < this.downLen; i++) {
        for (let j = 0; j < this.accrosLen; j++) {
            if (this[i][j].letter !== '.' && this[i][j].number > 0) { // a start cell
                if (this.checkAcross(word, i, j)) {
                    let k = j;
                    for (let letter of word) {
                        this[i][k].letter = letter;
                        k++;
                    }
                    this[i][j].number--;
                    return {
                        i: i,
                        j: j,
                        direction: 'across',
                    };
                }
                if (this.checkDown(word, i, j)) {
                    let k = i;
                    for (let letter of word) {
                        this[k][j].letter = letter;
                        k++;
                    }
                    this[i][j].number--;
                    return {
                        i: i,
                        j: j,
                        direction: 'down',
                    };
                }
            }
        }
    }
    return undefined;
}

// deletes a word from the given place in the crossword
function delWord(place) {
    if (place.direction === 'across') {
        this[place.i][place.j].number++;
        for (let j = place.j; j < this.accrosLen && this[place.i][j].letter !== '.'; j++) {
            // check neibors of the cell and del if there is no letter up or down
            switch (place.i) {
                case 0:
                    if (this.checkCellDown(place.i, j)) this[place.i][j].letter = '';
                    break;
                case this.downLength:
                    if (this.checkCellUp(place.i, j)) this[place.i][j].letter = '';
                    break;
                default:
                    if (this.checkCellDown(place.i, j) && this.checkCellUp(place.i, j)) this[place.i][j].letter = '';
                    break;
            }
        }
    }
    //TODO the same for 'down'
}

// these functions check if a neighbor of the given cell is empty
function checkCellDown(i, j) {
    return this[i + 1][j].letter === '' || this[i + 1][j].letter === '.';
}
function checkCellUp(i, j) {
    return this[i - 1][j].letter === '' || this[i + 1][j].letter === '.';
}
function checkCellLeft(i, j) {
    return this[i][j - 1].letter === '' || this[i + 1][j].letter === '.';
}
function checkCellRight(i, j) {
    return this[i][j + 1].letter === '' || this[i + 1][j].letter === '.';
}


const emptyPuzzle = `2001
0..0
1000
0..0`
const words = ['casa', 'alan', 'ciao', 'anta'];
crosswordSolver(emptyPuzzle, words);

