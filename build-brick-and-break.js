/** 
Today, your mission is to build a 3-column brick tower, maintain it and finally break it.

Create a function build which will create and display the amount of bricks passed as argument:

each brick has to be created as a div and added to the page at a regular interval of 100ms.
each brick will receive a unique id property, like the following:
<div id="brick-1"></div>
each brick in the middle column has to be set with the custom data attribute foundation, receiving the value true.

Each one of the two emojis in the top-right corner fires a function on click:

🔨: triggers the function repair. Write the body of that function. It receives any number of ids. 
    For each id, it retrieves the HTML element, and 
    sets the repaired custom attribute to 
    in progress if it is a brick situated in the middle column, and true if not.
🧨: triggers the destroy function. Write the body of that function. It removes the current last brick in the tower.
*/
let lastbrick = 0
export function build(bricksAmount) {
    let bricks = [];
    let i = 1;
    const body = document.querySelector('body');

    let putBrick = () => {
        let brick = document.createElement("div");
        brick.id = `brick-${i}`;
        if (i % 3 === 2) brick.dataset.foundation = 'true';
        body.append(brick);
        bricks.push(brick);
        if (i >= bricksAmount) clearInterval(intervalID);
        i++;
    }

    const intervalID = setInterval(putBrick, 100);
    lastbrick = bricksAmount;
}

export function repair(...ids) {
    ids.forEach(id => {
        let brick = document.getElementById(id)
        brick.dataset.repaired = brick.dataset.foundation ? 'in progress' : 'true';
    });
}
export function destroy() {
    if (lastbrick > 0) {
        document.getElementById(`brick-${lastbrick}`).remove();
        lastbrick--;
    }
} 