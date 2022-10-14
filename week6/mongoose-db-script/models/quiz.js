const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    name: {
        type: String,
        index: { unique: true },
    },
    instructions: String,
    start: Date,
    end: Date,
    timer: {
        is_timed: Boolean,
        time_limit: Number,
    },
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
});

const Quiz = mongoose.model('Quiz', QuizSchema);
module.exports = Quiz;
