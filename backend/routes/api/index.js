const router = require('express').Router();
const authRouter = require('./auth');

router.use('/auth', authRouter);

router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});

module.exports = router;