/*
On top of the webpage, each of the four buttons fires a function:

Write the body of the getArchitects function, which returns an array containing 2 arrays of HTML elements:
the first array contains the architects, all corresponding to a <a> tag
the second array contains all the non-architects people

Write the body of the getClassical function, which returns an array containing 2 arrays of HTML elements:
the first array contains the architects belonging to the classical class
the second array contains the non-classical architects

Write the body of the getActive function, which returns an array containing 2 arrays of HTML elements:
the first array contains the classical architects who are active in their class
the second array contains the non-active classical architects

Write the body of the getBonannoPisano function, which returns an array containing:
the HTML element of the architect you're looking for, whose id is BonannoPisano
an array which contains all the remaining HTML elements of active classical architects

From now on, don't forget to export all the expected functions, so that they can be imported to be tested
*/

export function getBonannoPisano() { return [document.getElementById("BonannoPisano"), document.querySelectorAll("a:not(#BonannoPisano),span")] }
export function getActive() { return [document.querySelectorAll("a.classical.active"), document.querySelectorAll("a.classical:not(.active)")] }
export function getArchitects() { return [[...document.getElementsByTagName("a")], [...document.querySelectorAll("span")]] }
export function getClassical() { return [document.querySelectorAll("a.classical"), document.querySelectorAll("a:not(.classical)")] }