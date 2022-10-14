// start the server: npm run start

// require in our dependencies
const cors = require('cors');
const express = require('express');

// call the express function which create the express application
// this allows us to use the full functionality of our express application

const { username, password, dbName } = require('./config.json');
const app = express();
const port = 8888;

// require in our route resource
const quizzes = require('./api/routes/quizzes');

// apply our cors middleware
app.use(cors());

// middleware to parse POST/PUT bodies in express
app.use(express.json());

// add resource route to our express application
app.use('/quizzes', quizzes);

// start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
