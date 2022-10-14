const QuizServices = require('../services/quiz');
const getQuiz = async (req, res) => {
    const { query } = req;
    const name = query.name;

    try {
        if (name) {
            //find quiz by name
            const matches = await QuizServices.getQuizByName(name);
        } else {
            //get all quizes
            const quizzes = await QuizServices.getAllQuizes();
            res.json(quizzes);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

const getQuizById = async (req, res) => {
    const { params } = req;
    const id = params.id;
    try {
    } catch (error) {}
};

module.exports = { getQuiz, getQuizById };
