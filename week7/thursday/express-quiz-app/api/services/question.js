const Question = require('../models/question');

const SharedService = require('../services/shared');

const getAllQuestions = async () => await SharedService.all(Question);

const getQuestyionById = async (id) => await SharedService.get(Question, id);

const createQuestion = async (body) =>
    await SharedService.create(Question, body);

const removeQuestion = async (id) => await SharedService.remove(Question, id);

module.exports = {
    getAllQuestions,
    getQuestyionById,
    createQuestion,
    removeQuestion,
};
