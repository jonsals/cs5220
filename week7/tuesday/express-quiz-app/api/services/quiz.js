const Quiz = require('../models/quiz');
const SharedServices = require('../services/shared');

const getAllQuizes = async () => await SharedServices.all(Quiz);

const getQuizById = async (id) => await SharedServices.get(Quiz, id);

const createQuiz = async (body) => await SharedServices.create(Quiz, body);

const getQuizByName = async (searchTerm) => {
    try {
        const matches = await Quiz.find({
            name: { $regex: searchTerm, $option: 'i' },
        });
    } catch (error) {
        return error;
    }
};

module.exports = {
    getQuizByName,
    getAllQuizes,
    createQuiz,
};
