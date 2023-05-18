/*
Like an inspired Beethoven who's about to write his Moonlight Sonata, you're about to compose a colorful symphony of letters with your keyboard.

Write the function compose:

Make it fire every time a key is pressed.
Create a new div with the class note when a letter of the lowercase alphabet is pressed. It should have a unique background color generated using the key of the event. It should also display the corresponding pressed character.
When Backspace is pressed, delete the last note.
When Escape is pressed, clear all the notes.
*/


export function compose() {
    let lastNote = 0;
    generateClassesStyles();
    const playMusic = (letter) => {
        if (letter === 'Backspace') {
            lastNote--;
            console.log(`note-${lastNote}`);
            console.log(letter);
            document.getElementById(`note-${lastNote}`).remove();
            return;
        }
        if (letter === 'Escape' || letter === 'Esc') {
            document.body.innerHTML = '';
            return;
        }
        if (letter.length === 1 && ((letter >= 'A' && letter <= 'Z') || (letter >= 'a' && letter <= 'z'))) {
            let note = document.createElement('div');
            note.id = `note-${lastNote}`;
            note.classList.add('note');
            note.classList.add(letter);
            note.textContent = letter;
            document.body.append(note);
            lastNote++;
        }
    }

    window.addEventListener('keydown', (event) => playMusic(event.key));

}

function generateClassesStyles() {
    let colorStyles = [];
    for (let CodeLetter = 65; CodeLetter <= 91; CodeLetter++) {
        colorStyles.push(`.${String.fromCodePoint(CodeLetter)} { background: ${generateColor(CodeLetter)}; }`)
        colorStyles.push(`.${String.fromCodePoint(CodeLetter + 32)} { background: ${generateColor(CodeLetter + 32)}; }`)
    }

    const styles = document.createElement('style');
    styles.innerHTML = colorStyles.join('\n');
    document.head.appendChild(styles);
}

function generateColor(CodeLetter) {
    return `rgb(${20 * CodeLetter % 256}, ${2 * CodeLetter % 256}, ${2 * CodeLetter % 256})`
}
