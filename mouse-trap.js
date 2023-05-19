/*
Develop a trap to capture the elements when the mouse is getting too close to the center of the page.

Create the following functions:

Hint: Be careful, a circle cannot overlap the box which has walls of 1px. It has to be trapped strictly inside.
*/

/*
createCircle: 
    make it fire on every click on the page, and 
    create a div at the position of the mouse on the screen, 
    setting its background to white and 
    its class to circle.
*/
let lastCircleNumber = 0;
let captured = false;

export function createCircle() {
    window.addEventListener('click', (e) => {
        lastCircleNumber++;
        captured = false;
        let circle = document.createElement('div');
        circle.id = `cr-${lastCircleNumber}`;
        circle.style.top = `${e.clientY}px`;
        circle.style.left = `${e.clientX}px`;
        circle.style.background = 'white';
        circle.classList.add('circle');
        document.body.appendChild(circle);

    });
}

/*
moveCircle: 
    make it fire when the mouse moves, and 
    get the last circle created and 
    makes it move along with the mouse.
*/
export function moveCircle() {
    const movingCircle = (e) => {
        if (lastCircleNumber > 0) {
            const circle = document.getElementById(`cr-${lastCircleNumber}`);
            const box = document.getElementById('box').getBoundingClientRect();
            const circleWidth = circle.getBoundingClientRect().width;
            const circleHeight = circle.getBoundingClientRect().height;
            let x = e.clientX, y = e.clientY;
            if (captured) {
                if (x < box.left + 1) { x = box.left + 1 } else if (x+circleWidth > box.right - 1) { x = box.right - 1-circleWidth }
                if (y < box.top + 1) { y = box.top + 1 } else if (y+circleHeight > box.bottom - 1) { y = box.bottom - 1-circleHeight }
            }
            circle.style.top = `${y}px`;
            circle.style.left = `${x}px`;
        }
    }
    window.addEventListener('mousemove', movingCircle);
}


/*
setBox: 
    which creates a box with 
    the class box in the center of the page. 
    When a circle is entirely inside that box, 
    it has to be purple (use the CSS global variable var(--purple) as its background). 
    Once a circle enters the box, it is trapped inside and cannot escape.
    
Hint: Be careful, a circle cannot overlap the box which has walls of 1px. It has to be trapped strictly inside.
*/
export function setBox() {
    let box = document.createElement('div');
    box.id = `box`;
    box.classList.add('box');
    document.body.appendChild(box);

    const CaptureCircleInBox = (e) => {
        if (lastCircleNumber > 0) {
            let circle = document.getElementById(`cr-${lastCircleNumber}`);
            //const boxRect = document.getElementById('box').getBoundingClientRect();
            // const cons = document.getElementById('cons');
            // cons.textContent = `${e.offsetX}-${e.offsetY}...${e.clientX}-${e.clientY}---${circle.offsetWidth}... ${ box.offsetWidth}`;
            if (e.offsetX > 0 && e.offsetY > 0 && e.offsetX + circle.offsetWidth <  box.offsetWidth - 1 && e.offsetY + circle.offsetHeight < box.offsetHeight - 1) {
                circle.style.background = 'var(--purple)';
                captured = true;
            }
        }
    }

    box.addEventListener('mousemove', CaptureCircleInBox);
}

