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

    let mark = document.createElement('div');
    mark.id = `mark`;
    mark.classList.add('text');
    mark.style.margin = 'auto';
    mark.style.textAlignment = 'top';
    body.append(mark);

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
    body.append(hslPlace, huePlace, luminosityPlace);

    const CoefX = 360 / window.innerWidth;
    const CoefY = 100 / window.innerWidth;
    //mark.textContent='Cx='+CoefX;
    const Saturation = 50;
    let hue = 0;
    let luminosity = 0;

    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    body.append(svg);

    let axisX = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    axisX.id = 'axisX';
    axisX.setAttribute('x1', '2');
    axisX.setAttribute('y1', '0');
    axisX.setAttribute('x2', '2');
    axisX.setAttribute('y2', `${Math.floor(body.getBoundingClientRect().height)}`);
    let axisY = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    axisY.id = 'axisY';
    axisY.setAttribute('x1', 0);
    axisY.setAttribute('y1', 2);
    axisY.setAttribute('x2', Math.floor(body.getBoundingClientRect().width));
    axisY.setAttribute('y2', 2);
    svg.append(axisX, axisY);
    let bodyBg = eval('body', (body) => body.style.background)
    console.log(bodyBg)

    const HSLToRGB = (h, s, l) => {
        s /= 100;
        l /= 100;
        const k = n => (n + h / 30) % 12;
        const a = s * Math.min(l, 1 - l);
        const f = n =>
            l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
        return [Math.round(255 * f(0)), Math.round(255 * f(8)), Math.round(255 * f(4))];
    };

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        hue = x * CoefX;
        luminosity = y * CoefY;

        const color = `hsl(${hue}, 50%, ${luminosity}%)`;
        //let color = `rgb(`+ HSLToRGB( hue, Saturation, luminosity).join(', ')+`)`;
        
        document.body.style.background = color;
        mark.textContent = 'x=' + document.querySelector('body').style.background;
        
        let hsl = `hsl(${Math.round(hue)}, ${Saturation}%, ${Math.round(luminosity)}%)`;

        huePlace.textContent = 'hue ' + Math.round(hue);
        huePlace.style.color = color;

        luminosityPlace.textContent = 'luminosity ' + Math.round(luminosity);
        luminosityPlace.style.color = hsl;

        hslPlace.textContent = hsl;
        hslPlace.style.color = color;

        axisX.setAttribute('x1', x);
        axisX.setAttribute('x2', x);

        axisY.setAttribute('y1', y);
        axisY.setAttribute('y2', y);
    });

    document.addEventListener('click', (e) => {
        const x = e.clientX;
        const y = e.clientY;

        hue = Math.round(x * CoefX);
        luminosity = Math.round(y * CoefY);

        let hsl = `hsl(${hue}, ${Saturation}%, ${luminosity}%)`;
        //console.log(hsl);
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