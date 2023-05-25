/*
In this exercise, we will focus on building complex async flows with promises.

Create a function named getJSON with two parameters:

path: a URL called by your function.
params: optional query parameters that will be appended to the path.
getJSON must construct a valid url with the path and stringified params, and use fetch to fulfil the request.

If the response is not OK, getJSON must throw an error using the response status text.

The response body must then be read and parsed from JSON.

The parsed object contains one of those 2 properties:

"data": the actual data to return.
"error": the error message to throw.
*/

async function getJSON(path, params) {
    //let url = new URL(path);

    //Object.entries(params).forEach(([n, v])=>param.append(n,v));
    let url = `${path}?${new URLSearchParams(params).toString()}`;
    let res = await fetch(url)
    console.log(res);
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    let jsonRes = await res.json();
    console.log(jsonRes);
    if (jsonRes['error']) {
        throw new Error(jsonRes['error']);
    }
    return jsonRes.data;
// on this way (then version) it didn't pass test!!!!
    // fetch(url)
    //     .then(res => {
    //         console.log(res);
    //         if (!res.ok) {
    //             throw new Error(res.statusText);
    //         }
    //         return res.json();
    //     })
    //     .then((jsonRes) => {
    //         console.log(jsonRes);
    //         if (jsonRes['error']) {
    //             throw new Error(jsonRes['error']);
    //         }
    //         return jsonRes.data;
    //     });
}

//getJSON('/test', { query: 'hello world', b: 5 })