/*
Create the function grid which displays all the gossips, 
provided in the data file below, as cards on a grid (in the same order).

They will each be represented as a div with the gossip class.

The first gossip card must be a form. 
It will need a textarea, and a submit button with the text "Share gossip!". 
It will add new gossip to the list.

Create 3 type="range" inputs with the class range, all wrapped in a div with the class ranges.

id="width": that controls the width of cards from 200 to 800 pixels.
id="fontSize": that controls the font size from 20 to 40 pixels.
id="background": that control the background lightness from 20% to 75%.
Use hsl for colors
*/
import { gossips } from './gossip-grid.data.js'

//let cards = [];
let cardNumbers = gossips.length;
export function grid() {

    const cardForm = document.createElement('form');
    cardForm.id = `cardForm`;
    cardForm.className = 'gossip';
    cardForm.setAttribute('method','dialog');

    // const form = document.createElement('form');
    // form.id = `form`;

    const textarea = document.createElement('textarea');
    textarea.id = `textarea`;

    const button = document.createElement('button');
    button.id = `button`;
    button.innerText = 'Share gossip!';
    button.style.background = 'hsl(280, 50%, 50%)';

    //form.append(textarea, button);

    cardForm.append(textarea, button);
    document.body.appendChild(cardForm);

    for (let i = 0; i < cardNumbers; i++) {
        const card = document.createElement('div');
        card.id = `c-${i}`;
        card.className = 'gossip';
        card.textContent = gossips[i];
        document.body.appendChild(card);
    }
    let lastGossip = document.getElementById(`c-0`);


    button.addEventListener('click', () => {
        const card = document.createElement('div');
        card.id = `c-${cardNumbers}`;
        card.className = 'gossip';
        card.textContent = textarea.value;
        document.body.insertBefore(card, lastGossip);
        lastGossip = card;
        cardNumbers++;
        textarea.value = '';
        console.log(card, textarea.value);
    });

    const ranges = document.createElement('div');
    ranges.id = `ranges`;
    ranges.className = 'ranges';
    document.body.appendChild(ranges);

    const width = document.createElement('input');
    width.setAttribute('type', 'range');
    width.setAttribute('min', '200');
    width.setAttribute('max', '800');
    width.setAttribute('value', '250');
    width.id = `width`;
    width.className = 'range';
    let label = document.createElement('label');
    label.setAttribute('for', "width");
    label.innerText = 'Width';
    ranges.append(label, width);

    width.addEventListener("input", (event) => {
        const cards = document.querySelectorAll('.gossip');
        for (let card of cards) {
            card.style.width = `${event.target.value}px`;
        }
    });

    

    const fontSize = document.createElement('input');
    fontSize.setAttribute('type', 'range');
    fontSize.setAttribute('min', '20');
    fontSize.setAttribute('max', '40');
    fontSize.setAttribute('value', '20');
    fontSize.id = `fontSize`;
    fontSize.className = 'range';
    label = document.createElement('label');
    label.setAttribute('for', "fontSize");
    label.innerText = 'Font size';
    ranges.append(label, fontSize);

    fontSize.addEventListener("input", (event) => {
        const cards = document.querySelectorAll('.gossip');
        for (let card of cards) {
            card.style.fontSize = `${event.target.value}px`;
        }
    });

    const background = document.createElement('input');
    background.setAttribute('type', 'range');
    background.setAttribute('min', '20');
    background.setAttribute('max', '75');
    background.setAttribute('value', '50');
    background.id = `background`;
    background.className = 'range';
    label = document.createElement('label');
    label.setAttribute('for', "background");
    label.innerText = 'Background';
    ranges.append(label, background);

    background.addEventListener("input", (event) => {
        const cards = document.querySelectorAll('.gossip');
        for (let card of cards) {
            card.style.background = `hsl(280, 50%, ${event.target.value}%)`;
        }
    });




}