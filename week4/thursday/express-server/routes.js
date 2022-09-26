//to use these routers in the server.js
const router = require('express').Router();
//create a get route to handle

router.get('/', (req, res) => {
    const { url, method, headers, query } = req;
    console.log(url, method, headers, query);
    res.json({ hello: 'world' });
});
//create a router to get json
router.get('/:id', (req, res) => {
    const { params } = req;
    console.log(params);

    res.json({ echo: params });
});

module.exports = router;
