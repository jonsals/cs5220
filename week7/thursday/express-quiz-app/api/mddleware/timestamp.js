const addTimestamp = (req, res, next) => {
    //next -> will be the middleware
    console.log('Running rotuer level middleware');
    const now = new Date().toISOString();
    if (req.method === 'POST' && req.body) {
        const { body } = req;
        body.created = now;
    } else if (req.method === 'PUT' && req.body) {
        const { body } = req;
        body.last_updated = now;
    }
    next(); // middleware is done now move on to next thing in line
};

module.exports = { addTimestamp };
