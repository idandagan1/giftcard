const Router = require('express').Router;
const path = require('path');
const router = Router();
const THANKS = path.join(__dirname, '../../client/thanks.html');
const INDEX = path.join(__dirname, '../../index.html');

router.get('/', (req, res) => {
    console.log('in dashboard');
    res.sendFile(INDEX);
})
router.get('/thanks', (req, res) => {
    res.sendFile(THANKS);
})

module.exports = router;