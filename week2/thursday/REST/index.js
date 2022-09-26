//
// require in the superagent to make http request
// axios is another package
// package that is still available
const superagent = require('superagent');

async function makeRestRequest() {
    let id = 1;
    const url = `https://swapi.dev/api/people/${id}/`;
    try {
        //make a get request to api
        const response = await superagent.get(url);
        console.log(response.body);
    } catch (err) {
        console.log(err);
    }
}

makeRestRequest();
