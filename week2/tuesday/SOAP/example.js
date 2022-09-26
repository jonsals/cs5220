//run file by using node example js
// need third party library
// node module to make an http request --> superagent
// allow to make http request
//http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso
const superagent = require('superagent');
// need to make a asynchronize request since we dont know how long the api will take to repsonse
async function maekSOAPRequest() {
    let url =
        'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso';
    let postBody = `<?xml version="1.0" encoding="utf-8"?>
    <soap12:Envelope xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
      <soap12:Body>
        <ListOfContinentsByName xmlns="http://www.oorsprong.org/websamples.countryinfo">
        </ListOfContinentsByName>
      </soap12:Body>
    </soap12:Envelope>`;

    try {
        // make a post rqeust to the SOAP api to get continent by names
        // set th continent type as text/xml
        const response = await superagent
            .post(url)
            .set('Content-Type', 'text/xml;charset=utf-8')
            .send(postBody);
        console.log(response.text);
    } catch (error) {
        console.log(error);
    }
}
// calling the function we wrote aboce so that it excutes when the file is run
maekSOAPRequest();
