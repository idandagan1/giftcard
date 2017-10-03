const Router = require('express').Router;
const User = require('../models/users');

const router = Router();

router.post('/login', (req, res) => {

    const { username, password } = req.body;

    if(!username || !password){
        res.status(200).send({msg: 'username or password are missing'});
    }

    const newUser = new User({username, password});

    newUser.save((err,data) => {
        if(err){
            throw err;
        }
        console.log('new user added');
        res.redirect('/thanks');
    })

})

module.exports = router;