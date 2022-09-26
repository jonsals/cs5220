const cors = require('cors');
const express = require('express');
const app = express(); // creates express application
//server need to run on a port
const port = 8080;
const routes = require('./routes.js');
//apply cors middleware
app.use(cors());

app.get('/', (req, res) => {
    res.send('welcome to cs');
});

app.use('/json', routes); // can now use all things imported from routes
app.listen(port, () => {
    console.log('server has started ' + port);
});

// to view http://localhost:8080/json
