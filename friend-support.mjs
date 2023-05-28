/*
Create a friend-support.mjs program that will open a server to remotely access the guest list stored on your computer. 
Your program will need to handle HTTP GET requests.

Here below the description of the expected behaviors of your program:

It has to listen on port 5000, and it will have to print a simple message on the console, specifying the listening port;
Its HTTP response should always contain a coherent status code depending on the handling of the received HTTP request. 
More specifically, your server should be able to respond with the following status codes: 200, 404 and 500;
The responses will always be JSON and this information should be included in the HTTP response;
For each HTTP request, your program should try to open the corresponding guest JSON file and 
provide the content as JSON in the HTTP response, if possible. 
When the guess specified in the request is not found, 
the server should return an object with the attribute error defined as guest not found;
If for any reason the server fails, the response should be an object with an attribute error specified as server failed.
*/
import http from "http";
import { readFile, writeFile } from "fs/promises";
import { Buffer } from "node:buffer";

const host = 'localhost';
const port = 5000;

const guestData = (req, res) => {
    let statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const guestFile = `${req.url.slice(1)}.json` 

    readFile(`guests/${guestFile}`)
        .then((guestInformation) => {
            let body = guestInformation.toString();
            res.writeHead(statusCode, {
                'Content-Length': Buffer.byteLength(body),
            })
                .end(body);
        })
        .catch((err) => {
            let body;
            if (err.code === "ENOENT") {
                body = JSON.stringify({ error: 'guest not found' })
                statusCode = 404;
            } else {
                body = JSON.stringify({ error: 'server failed' })
                statusCode = 500;

            }
            res.writeHead(statusCode, {
                'Content-Length': Buffer.byteLength(body),
            })
                .end(body);
        });

}

const server = http.createServer(guestData);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});