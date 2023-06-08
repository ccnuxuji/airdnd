const router = require('express').Router();
const apiRouter = require('./api');

router.get('/hello/world', function (req, res) {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.send('Hello World!');
});

router.use('/api', apiRouter);

module.exports = router;