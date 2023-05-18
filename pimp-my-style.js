/*
<button class="button">pimp my style</div>
For now, it's only a lonely, basic and sad element. let's pimp it up.

On each click on the page, a function pimp is triggered. Write the body of that function so that the button's class is altered:

From the data file provided, add each of the styles array elements as classes, in order.
When the end of the array is reached, remove the classes in a LIFO fashion.
While removing classes, toggle the unpimp class on. And toggle it off again while adding classes.
*/

import { styles } from './pimp-my-style.data.js'
let currentStyleNumber = 0;
export function pimp() {
    const ButtonPimpStyle = document.querySelector('button').classList;
    if (!ButtonPimpStyle.contains('unpimp')) {
        ButtonPimpStyle.add(styles[currentStyleNumber]);
        currentStyleNumber++;
        if (currentStyleNumber === styles.length) {
            ButtonPimpStyle.add('unpimp');
        }
    } else {
        currentStyleNumber--;
        ButtonPimpStyle.remove(styles[currentStyleNumber]);
        if (currentStyleNumber === 0) {
            ButtonPimpStyle.remove('unpimp');
        }
    }
}
