/*
Today, you're going to create your own color picker.

Write the function pick which turns the screen into a hsl color picker. It will vary the hue and luminosity according to the position of the mouse.

The background color of the body will change based on the position of the mouse on the screen.

The X axis will vary the hue value between 0 and 360.
The Y axis will vary the luminosity value between 0 and 100.
You'll need to display these three values:

The full hsl value in a div, which has the class hsl in the middle of the screen.
The hue value in a div with the class hue and text in the top right corner of the screen.
The luminosity value will be displayed in the bottom left corner of the screen, in a div with the class luminosity and text.

When the mouse is clicked, the value of the hsl will need to be copied to the clipboard.

Two SVG lines with ids axisX and axisY will need to follow the cursor, like really long cross hairs.

the axisX attributes x1 and x2 need to be set to the X position of the cursor.
the axisY attributes y1 and y2 need to be set to the Y position of the cursor.
The formatting of a hsl value: hsl(45, 50%, 35%).

Use Math.round() to round the values.
*/

export function pick(x, y) {
    const body = document.querySelector('body');
    // create mark
    // let mark = document.createElement('div');
    // mark.id = `mark`;
    // mark.classList.add('mark');

    //create place for hsl value
    let hslPlace = document.createElement('div');
    hslPlace.id = `hsl`;
    hslPlace.classList.add('hsl');
    hslPlace.style.margin = 'auto';


    //create place for hue value
    let huePlace = document.createElement('div');
    huePlace.id = `hue`;
    huePlace.classList.add('hue');
    huePlace.classList.add('text');

    //create place for luminosity value
    let luminosityPlace = document.createElement('div');
    luminosityPlace.id = `luminosity`;
    luminosityPlace.classList.add('luminosity');
    luminosityPlace.classList.add('text');
    body.append(/*mark,*/ hslPlace, huePlace, luminosityPlace);

    const CoefX = 360 / body.getBoundingClientRect().width;
    const CoefY = 100 / body.getBoundingClientRect().height;
    const Saturation = 50;
    let hue = 0;
    let luminosity = 0;

    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    // svg.setAttribute('width', Math.round(body.getBoundingClientRect().width));
    // svg.setAttribute('height', Math.round(body.getBoundingClientRect().height));

    let axisX = document.createElement('line');
    axisX.id='axisX';
    axisX.setAttribute('x1', 2);
    axisX.setAttribute('y1', 0);
    axisX.setAttribute('x2', 2);
    axisX.setAttribute('y2', Math.round(body.getBoundingClientRect().height));
    let axisY = document.createElement('line');
    axisY.id='axisY';
    axisY.setAttribute('x1', 0);
    axisY.setAttribute('y1', 2);
    axisY.setAttribute('x2', Math.round(body.getBoundingClientRect().width));
    axisY.setAttribute('y2',2 );
    svg.append(axisX,axisY);
    body.append(svg);

    body.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;

        hue = Math.round(x * CoefX);
        luminosity = Math.round(y * CoefY);

        let hsl = `hsl(${hue}, ${Saturation}%, ${luminosity}%)`;

        body.style.background = hsl;
       // mark.style.background = hsl;

        huePlace.textContent = 'hue ' + hue;
        huePlace.style.color = hsl;

        luminosityPlace.textContent = 'luminosity ' + luminosity;
        luminosityPlace.style.color = hsl;

        hslPlace.textContent = hsl;
        hslPlace.style.color = hsl;

        axisX.setAttribute('x1', x);
        axisX.setAttribute('x2', x);

        axisY.setAttribute('y1', y);
        axisY.setAttribute('y2', y);
    });

    body.addEventListener('click', (e) => {
        const x = e.clientX;
        const y = e.clientY;

        hue = Math.round(x * CoefX);
        luminosity = Math.round(y * CoefY);

        let hsl = `hsl(${hue}, ${Saturation}%, ${luminosity}%)`;
        console.log(hsl);
        //let clipboard = new ClipboardEvent('copy', {clipboardData: (new DataTransfer).SetData('text/plain',hsl)});
        navigator.clipboard.writeText(hsl)

    });

    // const axisX = document.getElementById('axisX');
    // axisX.setAttribute('x1', x);
    // axisX.setAttribute('x2', x);
    // const axisY = document.getElementById('axisY');
    // axisY.setAttribute('y1', y);
    // axisY.setAttribute('y2', y);

}