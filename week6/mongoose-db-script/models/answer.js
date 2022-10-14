const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    choices: [
        {
            //mongoose mixed will have different types

            answer: mongoose.Mixed,
            is_correct: Boolean,
        },
    ],
});

const Answer = mongoose.model('Answer', AnswerSchema);

module.exports = Answer;
