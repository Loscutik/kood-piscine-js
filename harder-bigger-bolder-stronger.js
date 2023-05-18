/*
Write the function generateLetters which 
creates 120 div elements, each containing a letter randomly picked through the uppercase alphabet, 
and whose style properties have to be increased:

each letter's font-size has to grow from 11 to 130 pixels.
font-weight has to be 300 for the first third of the letters, 400 for the second third, and 600 for the last third.
*/

export function generateLetters() {
    const LETTERS_NUMBER = 120;
    const SYMBOL_MIN = 65;
    const SYMBOL_MAX = 90;
    const FONT_SIZE_START = 11;
    const FONT_SIZE_STEP = 1;
    const FONT_WEIGHTS = [300, 400, 600];

    for (let i = 0; i < LETTERS_NUMBER; i++) {
        let letter = document.createElement("div");

        letter.textContent = String.fromCodePoint(Math.round(Math.random() * (SYMBOL_MAX-SYMBOL_MIN)) + SYMBOL_MIN);
        letter.style.fontSize = FONT_SIZE_START+FONT_SIZE_STEP*i + "px";
        letter.style.fontWeight =  FONT_WEIGHTS[Math.floor(i*FONT_WEIGHTS.length/LETTERS_NUMBER)];
        document.querySelector("body").append(letter);
    }
    
}