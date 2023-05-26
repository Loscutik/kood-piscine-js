/*
Create a function named queryServers that takes 2 arguments:

serverName: a string of the name of the server.
q: a string of the query given by the user.
You need to construct 2 urls which should work like this:

queryServers('pouet', 'hello+world')
// return the fastest of those 2 calls:
// -> getJSON('/pouet?q=hello+world')
// -> getJSON('/pouet_backup?q=hello+world')

Create a function named: gougleSearch that takes a single query argument (q). 
It must invoke queryServers concurrently on 3 servers:

"web"
"image"
"video"
You must return the value from each server in an object using the server name as key.

A timeout of 80milliseconds must be set for the whole operation, 
if it is not complete within 80 milliseconds, then you must return Error('timeout').

*/



async function queryServers(serverName, q) {
    let url = `/${serverName}?${new URLSearchParams({ q }).toString()}`;
    const server = getJSON(url);
    url = `/${serverName}_backup?${new URLSearchParams({ q }).toString()}`;
    const backup = getJSON(url);

    let carelessResponce = await Promise.race([server, backup]);
    return carelessResponce;

}

async function gougleSearch(q) {
    const serversNames =['web','image','video'];
    const servers = serversNames.map(server =>queryServers(server, q))
    // const web = queryServers('web', q);
    // const image = queryServers('image', q);
    // const video = queryServers('video', q);
    const delayer = new Promise((res, rej) => { setTimeout(rej, 80, Error('timeout')) });

    let responce = await Promise.race([Promise.all(servers), delayer]);
    let result={};
    serversNames.forEach((serverName, i)=>{result[serverName] =responce[i]});
    return result;
}

