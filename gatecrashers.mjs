/*
To modify the guest list now your friends will need to make authenticated requests. 
You decided that only your 3 best friends 
(Caleb_Squires, Tyrique_Dalton and Rahima_Young) 
will be able to modify the list. You also told them the secret 
password abracadabra in order to do that.

The request query will look like this curl -u Caleb_Squires:abracadabra ....

The server should properly handle unauthorized requests using the error code 401.

Apart for the authentication part your server's behavior should remain unchanged from uninvited exercise:

You will listen to port 5000 and print a message containing the port you are using.
For each authorized http POST request, your program 
should create the corresponding JSON file and store the contents of the body, and 
then provide the content as JSON in the HTTP response, if possible.
*/

import http from "http";
import { readFile, writeFile } from "fs/promises";
import { Buffer } from "node:buffer";

const host = 'localhost';
const port = 5000;
const pathGuests = `guests`;
const bestFriends = ['Caleb_Squires', 'Tyrique_Dalton', 'Rahima_Young'];

const guestData = (req, res) => {
    let statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const guestFile = `${req.url.slice(1)}.json`

    const errHandler = (err, statusCode, message) => {
        let bodyRes = JSON.stringify({ error: message })

        res.writeHead(statusCode, {
            'Content-Length': Buffer.byteLength(bodyRes),
        })
            .end(bodyRes);
    }

    //reading credentials

    let baseAuthorusation = req.headers['authorization'];
    if (!baseAuthorusation) {
        errHandler('no credentials found', 401, 'no credentials found');
        return;
    }
    let credentials = Buffer.from(baseAuthorusation.slice(6), "base64").toString().split(':');

    if (!bestFriends.includes(credentials[0]) || credentials[1] !== 'abracadabra') {
        errHandler('wrong credentials', 401, 'wrong credentials')
        return;
    }
    // reading the request body
    let bodyReq = [];
    req.on('data', (chunk) => {
        bodyReq.push(chunk);
    }).on('end', () => {
        bodyReq = Buffer.concat(bodyReq).toString();
        // at this point, `body` has the entire request body stored in it as a string
    }).on('error', errHandler);

    writeFile(`${pathGuests}/${guestFile}`, bodyReq)
        .then(() => {
            let bodyRes = bodyReq;
            res.writeHead(statusCode, {
                'Content-Length': Buffer.byteLength(bodyRes),
            })
                .end(bodyRes);
        })
        .catch(errHandler);

}

const server = http.createServer(guestData);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
