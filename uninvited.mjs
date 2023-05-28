/*
Create an uninvited.mjs program that will open a server to remotely not just access, but also update the list. 
It will need to handle http POST requests to add new guests.

Here below are your program/server's expected behaviors:

It has to listen on port 5000 and it will have to print a simple message on the console, specifying the listening port.

Its HTTP response should contain a coherent status code depending on the handling of the received HTTP request. 
More specifically, your server should be able to respond with the following status codes: 201 and 500.

The responses will always be JSON and this information should be explicit in the HTTP response.
For each http POST request, your program should create the corresponding JSON file and 
store the contents of the body, and then provide the content as JSON in the HTTP response, if possible. 
If the file already exists, it should replace it.
If for any reason the server fails, the response should be an object with a key error and its value server failed.
*/

import http from "http";
import { readFile, writeFile } from "fs/promises";
import { Buffer } from "node:buffer";

const host = 'localhost';
const port = 5000;

const guestData = (req, res) => {
    let statusCode = 201;
    res.setHeader('Content-Type', 'application/json');
    const guestFile = `${req.url.slice(1)}.json`

    const errHandler = (err) => {
        let bodyRes = JSON.stringify({ error: 'server failed' })
        statusCode = 500;

        res.writeHead(statusCode, {
            'Content-Length': Buffer.byteLength(bodyRes),
        })
            .end(bodyRes);
    }

    // reading the request body
    let bodyReq = [];
    req.on('data', (chunk) => {
        bodyReq.push(chunk);
    }).on('end', () => {
        bodyReq = Buffer.concat(bodyReq).toString();
        // at this point, `body` has the entire request body stored in it as a string
    }).on('error', errHandler);

    writeFile(`guests/${guestFile}`, bodyReq)
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
