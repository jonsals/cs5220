const mongoose = require('mongoose');

const Answers = require('./models/answer');
const Question = require('./models/question');
const Quiz = require('./models/quiz');

const { username, password, dbName } = require('./config.json');

const mongURL = `mongodb+srv://${username}:${password}@cluster0.chehzdn.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(mongURL, () => {
    console.log(`Connected to mongo`);
});

//always want database to be asynchronize
const execScript = async () => {
    await Quiz.deleteMany({});

    const quiz = await Quiz.create({
        name: 'Advanced JavaScript Quiz',
        instructions: 'Please select the best answer.',
        start: '2022-09-25',
        end: '2022-09-28',
        timer: {
            isTimed: false,
            time_limit: null,
        },
    });

    await Question.deleteMany({});
    const questionOne = await Question.create({
        text: 'REST only supports a JSON message format.  REST APIs cannot return other message formats like XML.',
        points: 10,
        type: 'true/false',
    });

    // await Quiz.updateOne();
};

execScript();
