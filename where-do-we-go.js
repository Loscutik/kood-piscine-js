/*
Create a function named explore, which creates a page displaying the list of places provided in the data file below.

Sort the places from north to south, so that the northern-most place is first.
Display a fullscreen-size <section> for each place. 
Use the pics hosted in the ./where-do-we-go_images folder below. 
Set the background attribute with the corresponding image URL. 
The URL has to be formatted like so: ./where-do-we-go_images/name-of-the-place.jpg.

Display a location indicator as an <a> tag in the middle of the screen. It should:
have the class location
display the name and coordinates of the current place, as text strings separated by \n
set the text color as color
update the name, coordinates and color on scroll, 
at the point when the next image reaches the middle of the screen height
make the href attribute open a new tab redirecting to a Google Maps URL with the coordinates of the place currently displayed

Display a compass as a div tag, indicating the latitude direction which:
has the class direction
displays N for North if the user is scrolling up
displays S for South if he's scrolling down
*/

import { places } from './where-do-we-go.data.js'

export function explore() {
    const placesList = places.sort((a, b) => {
        const acoord = a.coordinates.split(' ')[0].split('"');
        const bcoord = b.coordinates.split(' ')[0].split('"');
        if (acoord[1] === 'N') {
            if (bcoord[1] === 'N') {
                return acoord[0] > bcoord[0] ? -1 : 1;
            } else {
                return -1;
            }
        } else {
            if (bcoord[1] === 'S') {
                return acoord[0] > bcoord[0] ? 1 : -1;
            } else {
                return 1;
            }
        }

    });
    for (let i = 0; i < placesList.length; i++) {
        const placesSection = document.createElement('section');
        placesSection.id = `places-${i}`;
        placesSection.style.background = 'url(https://public.01-edu.org/subjects/where-do-we-go/where-do-we-go_images/' + placesList[i].name.toLowerCase().split(',')[0].replaceAll(' ', '-') + '.jpg)';
        document.body.appendChild(placesSection);

    }
    const ancore = document.createElement('a');
    ancore.id = `ancore`;
    ancore.className = 'location';
    document.body.appendChild(ancore);

    const compass = document.createElement('div');
    compass.id = `compass`;
    compass.className = 'direction';
    document.body.appendChild(compass);


    let currentPlaceNum = Math.round(window.scrollY / window.innerHeight)
    let coords = placesList[currentPlaceNum].coordinates
        .split('°')
        .join('%C2%B0')
        .split('"')
        .join('%22')
        .split(' ')
        .join('%20');
    ancore.href = `https://www.google.com/maps/place/${coords}`
    ancore.setAttribute('target', '_blank');
    ancore.style.color = `${placesList[currentPlaceNum].color}`;
    ancore.textContent = `${placesList[currentPlaceNum].name}\n${placesList[currentPlaceNum].coordinates}`
    let prevScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        let placeNum = Math.round(window.scrollY / window.innerHeight)
        compass.textContent = prevScrollY < window.scrollY ? 'S' : 'N';
        prevScrollY = window.scrollY;
        if (placeNum !== currentPlaceNum) {
            currentPlaceNum = placeNum;
            coords = placesList[currentPlaceNum].coordinates.split(' ');
            ancore.href = `https://www.google.com/maps/place/${coords[0]}+${coords[1]}`
            ancore.setAttribute('target', '_blank');
            ancore.style.color = `${placesList[currentPlaceNum].color}`;
            ancore.textContent = `${placesList[currentPlaceNum].name}\n${placesList[currentPlaceNum].coordinates}`;
        }
    });
}