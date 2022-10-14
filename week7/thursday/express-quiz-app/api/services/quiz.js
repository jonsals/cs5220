const Question = require('../models/question');
const Quiz = require('../models/quiz');

const QuestionService = require('../services/question');
const SharedService = require('../services/shared');

// shared method for checking time
const _canUpdateQuiz = async (id) => {
    const now = new Date().toISOString();
    const validQuiz = await Quiz.findOne({ _id: id, start: { $gte: now } });
    return Boolean(validQuiz); //!!validQuiz --> does the same thing
};

const getAllQuizzes = async () => await SharedService.all(Quiz);

const getQuizById = async (id) => await SharedService.get(Quiz, id);

const createQuiz = async (body) => await SharedService.create(Quiz, body);

const getQuizByName = async (searchTerm) => {
    const matches = await Quiz.find({
        name: { $regex: searchTerm, $options: 'i' },
    });
    return matches;
};

const updateQuiz = async (id, body) => {
    const canUpdate = await _canUpdateQuiz(id);

    if (canUpdate) {
        const updated = await Quiz.findByIdAndUpdate(id, body, {
            returnDocument: 'after',
        });
        return updated;
    } else {
        throw new Error(`Cannot update Quiz ${id}.`);
    }
};

const removeQuiz = async (id) => {
    const canUpdate = await _canUpdateQuiz(id);

    if (canUpdate) {
        const removed = await Quiz.findByIdAndDelete(id);
        return removed;
    } else {
        throw new Error(`Cannot update Quiz ${id}.`);
    }
};

// add a question and associate to the quiz
const addQuizQuestion = async (id, body) => {
    const canUpdate = await _canUpdateQuiz(id);

    if (canUpdate) {
        const question = await QuestionService.createQuestion(body);
        const updated = await Quiz.findByIdAndUpdate(
            id,
            {
                $set: { last_updated: body.last_updated }, // putting question and updating quiz
                $addToSet: { questions: question._id },
            },
            { returnDocument: 'after' }
        );
        return updated;
    } else {
        throw new Error(`Cannot update Quiz ${id}.`);
    }
};

// remove a question and dis-associate to the quiz
const removeQuizQuestion = async (id, questionId) => {
    const canUpdate = await _canUpdateQuiz(id);

    if (canUpdate) {
        await QuestionService.removeQuestion(questionId);

        const updated = await Quiz.findByIdAndUpdate(
            id,
            {
                $pull: { questions: questionId },
            },
            { returnDocument: 'after' }
        );

        return updated;
    } else {
        throw new Error(`Cannot update Quiz ${id}.`);
    }
};

module.exports = {
    getAllQuizzes,
    getQuizByName,
    getQuizById,
    createQuiz,
    updateQuiz,
    removeQuiz,

    addQuizQuestion,
    removeQuizQuestion,
};
