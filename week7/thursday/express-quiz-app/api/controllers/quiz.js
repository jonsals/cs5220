const QuizService = require('../services/quiz');

const getQuiz = async (req, res) => {
    const { query } = req;
    const name = query.name;

    try {
        if (name) {
            const matches = await QuizService.getQuizByName(name);
            res.json(matches);
        } else {
            const quizzes = await QuizService.getAllQuizzes();
            res.json(quizzes);
        }
    } catch (error) {
        res.status(500).send({ error: error.toString() });
    }
};

const createQuiz = async (req, res) => {
    const { body } = req;

    try {
        const quiz = await QuizService.createQuiz(body);
        res.json(quiz);
    } catch (error) {
        res.status(500).send({ error: error.toString() });
    }
};

const getQuizById = async (req, res) => {
    const { params } = req;
    const id = params.id;

    try {
        const quiz = await QuizService.getQuizById(id);
        res.json(quiz);
    } catch (error) {
        res.status(500).send({ error: error.toString() });
    }
};

const updateQuiz = async (req, res) => {
    const {
        body,
        params: { id },
    } = req;

    try {
        const quiz = await QuizService.updateQuiz(id, body);
        res.json(quiz);
    } catch (error) {
        res.status(500).send({ error: error.toString() });
    }
};

const removeQuiz = async (req, res) => {
    const {
        params: { id },
    } = req;

    try {
        const quiz = await QuizService.removeQuiz(id);
        res.json(quiz);
    } catch (error) {
        res.status(500).send({ error: error.toString() });
    }
};

const addQuizQuestion = async (req, res) => {
    const {
        params: { id },
        body,
    } = req;

    try {
        const quiz = await QuizService.addQuizQuestion(id, body);
        res.json(quiz);
    } catch (error) {
        res.status(500).send({ error: error.toString() });
    }
};

const removeQuizQuestion = async (req, res) => {
    const {
        params: { id, questionId },
    } = req;

    try {
        const quiz = await QuizService.removeQuizQuestion(id, questionId);
        res.json(quiz);
    } catch (error) {
        res.status(500).send({ error: error.toString() });
    }
};

module.exports = {
    getQuiz,
    getQuizById,
    createQuiz,
    updateQuiz,
    removeQuiz,

    addQuizQuestion,
    removeQuizQuestion,
};
