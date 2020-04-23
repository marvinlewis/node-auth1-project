const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('./users-model.js');

router.post('/', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
    .then(item => {
        console.log(item)
        if(item && bcrypt.compareSync(password, item[0].Password)) {
            req.session.loggedIn = true;
            res.status(200).json({message : 'Welcome', })
    } else { 
        res.status(401).json({
            error : 'you shall not pass!'
        })
    }
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({
            error : 'You are not a member'
        })
    })

})

module.exports = router;