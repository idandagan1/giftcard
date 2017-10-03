const Router = require('express').Router;
const userApi = require('./user.js');
const dashboardApi = require('./dashboard');
const router = Router();

router.use('/', dashboardApi);
router.use('/users', userApi);

module.exports = router;
