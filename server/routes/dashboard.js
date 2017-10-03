const Router = require('express').Router;
const path = require('path');
const router = Router();
const THANKS = path.join(__dirname, '../../client/thanks.html');

router.get('/thanks', (req, res) => {
    res.sendFile(THANKS);
})

module.exports = router;