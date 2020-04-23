const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../auth/sercrets');

const Users = require('./users-model.js');

router.post('/', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
    .then(item => {
        console.log(item)
        if(item && bcrypt.compareSync(password, item[0].password)) {
            //produce token 
            const token = gernerateToken(item);
            //send to client
            res.status(200).json({
                message : 'welcome', token
            })
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

function gernerateToken(user) {
    const payload = {
        userId : user.id,
        username : user.username
    };

    const secret = secrets.jwtSecret

    const options = {
        expiresIn : '1d'
    }
    
    
    return jwt.sign(payload, secret, options)
}

module.exports = router;