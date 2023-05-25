/*
Create a function named interpolation that takes an object with 5 properties: step, start, end, callback and duration.

This function must interpolate points from the start position to the end position (not including the end position). 
The number of points depends on the number of steps.

For each interpolation point, you must call the callback function with an array of the two points [x, y]:

x: distance
y: point
There should be a delay between each callback invocation of duration / step, so that the final call happens after duration.
*/

function interpolation(options) {
    const deltaX = (options.end - options.start) / options.step;
    const deltaY = options.duration / options.step;
    let x = options.start;
    let y = deltaY;
    const repeter = function () {
        //console.log('repeter', x,y);
        options.callback([x,y]);
        x += deltaX;
        y += deltaY;
        idTime=setTimeout(repeter, deltaY);
        if(y>options.duration){clearTimeout(idTime)}
    }
    let idTime = setTimeout(repeter, deltaY)
}