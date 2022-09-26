const cors = require('cors');
const express = require('express');

//call express function
const app = express();
const port = 8888;

//todo require in our routes resources
const quizzes = require('./api/routes/quizzes');

//apply middleware
app.use(cors());
app.use(express.json()); // allows to parse post and put bodies in express

//todo add resource route to our express app
app.use('/quizzes', quizzes);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
