//each resources has its own file : quizez question answers
const router = require('express').Router();
//bring in mock data
const quizzes = require('../../../mock_data/mock_data/quizzes.json');

router.get('/', (req, res) => {
    const { query } = req;
    const { name } = query;
    let allQuizzes = quizzes;
    if (name) {
        allQuizzes = quizzes.filter((quiz) => {
            quiz.name.toLowerCase().includes(name.toLowerCase());
        });
    }
    res.json(quizzes);
});

router.post('/', (req, res) => {
    const { body } = req;
    const id = quizzes.length + 1; // should never do

    res.json({ ...body, id });
});
router.get('/:id', (req, res) => {
    const { params } = req;
    const { id } = params;

    const quiz = quizzes.find((quiz) => quiz.id === parseInt(id));
    if (quiz) {
        res.json(quiz);
    } else {
        res.status(404).json({ error: 'Could not find quiz' });
    }
});

module.exports = router;
