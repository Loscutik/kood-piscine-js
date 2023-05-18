/*
Write the generateClasses function. It creates a <style> tag inside the <head>. 
It should generate one class for each color in the colors array, 
which sets the background attribute like so:

.blue {
  background: blue;
}

Write the generateColdShades function which 
creates a <div> for each color of the colors array, whose 
name contains aqua, blue, turquoise, green, cyan, navy or purple. 
Each <div> must have the corresponding generated class and display the name of the color, like following:

<div class="blue">blue</div>

The function choseShade is triggered when clicking on a div. 
Write the body of this function. 
It accepts the shade of the clicked element as an argument, 
and replaces all the classes of all the other elements by the chosen shade.
*/

import { colors } from './fifty-shades-of-cold.data.js'
export function generateClasses() {
    let colorStyles = [];
    for (let color of colors) {
        colorStyles.push(`.${color} { background: ${color}; }`)
    }
    const styles = document.createElement('style');
    styles.innerHTML = colorStyles.join('\n');
    document.head.appendChild(styles);
}

export function generateColdShades() {
    const coldColors = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple'];
    const coldShades = colors.filter(color => coldColors.some(coldColor=>color.includes(coldColor)));
    coldShades.forEach((coldShade) => {
        let colorBox=document.createElement('div');
        colorBox.id=coldShade;
        colorBox.className=coldShade;
        colorBox.textContent=coldShade;
        document.body.append(colorBox);
    });
}

export function choseShade(shade){
[...document.getElementsByTagName("div")].forEach(element=>element.className=shade);
}