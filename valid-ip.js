/*
Create a function named findIP, that returns an array of valid IP addresses from a given string. 
These addresses may or may not have a port.
For the IP part, the syntax will be as follows, where x is a number from 0-255. 
Values with leading zeros are not valid:

x.x.x.x

Don't forget to learn about the syntax of ports. 
But remember, the maximum TCP port number is 65,535.

For this task, you only need to concern yourself with <host> and <port>. 
Don't worry about <scheme> or anything else.
*/

function findIP(str) {
    let regex = /((((1\d\d|2[0-4]\d|25[0-5]|[1-9]\d|\d)\.?\b){4})(:(?:[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d\d|655[0-2]\d|6553[0-5]|\d{1,4}))\b)|(((1\d\d|2[0-4]\d|25[0-5]|[1-9]\d|\d)\.?\b){4})(?=[^:\d]|$)/g
    return str.match(regex);

}

console.log(findIP(`qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you qq 233.123.12.234 qw w wq wqw  wqw  ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsd https://devdocs.io/javascript/global_objects/object/fromentries njnkfsdjnk sfdjn fsp fd192.168.1.123:8080 https://devdocs.io/javascript/global_objects/regexp/@@split
htpp://wrong/url hello %$& wf* ][½¬ http://correct/url?correct=yes è[}£§ https://nan-academy.github.io/js-training/?page=editor#data.nested 255.256.1233.2
ssages has become an accepted part of many cultures, as happened earlier with emailing. htt://[1] This makes texting a quick and http://www.example.com/mypage.html?crcat=test&crsource=test&crkw=buy-a-loteasy way to communicate 255.256.2 with friends, family and colleagues, including 255.256.555.2 in contexts where a call would be when one knows the other person is busy 192.169.1.23 with family or work activities).; 172.01.123.254:1234
for example, to order products or 10.1.23.7 http://www_example.com/ 255.255.255.000 09.09.09.09
services fromhttps://regex-performance.github.io/exercises.html 3...3 0.0.0.0:22 0.0.0.0:68596
this permits communication even between busy individuals255.253.123.2:8000 https: // . Text messages can also http:// be used to http://example.com/path?name=Branch&products=[Journeys,Email,Universal%20Ads]interact with automated systems,https:// regex -performance.github.io/ exercises.html172.01.123.999:1234
https//nan-academy.github.io/js-training/?page=editor#data.nested impolite or inappropriate (e.g., calling very late at night orhttp://localhost/exercises
https://192.168.1.123?something=nothing&pro=[23] htts:/nan-academy.github.io/js-training?b=123&a=123/?page=editor#data.nested  Like e-mail and voicemail and unlike calls (in which the caller hopes to speak directly with the recipient),
http://www.example.com/catalog.asp?itemid=232&template=fresh&crcat=ppc&crsource=google&crkw=buy-a-lot texting does not require the caller and recipient to both be free at the same moment0.0.0.0`));