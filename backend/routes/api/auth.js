const router = require('express').Router();

router.get('/', (req, res) => {
    res.json('Welcome to auth router!')
});

module.exports = router;

