const router = require('express').Router();
const authRouter = require('./auth');

router.use('/auth', authRouter);

router.get('/test', function (req, res) {
  res.json("Hello World!");
});

module.exports = router;