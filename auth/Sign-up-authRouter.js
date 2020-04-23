const router = require('express').Router();
const bycrpt = require('bcryptjs');

const Users = require('../data/users-model.js');


router.post('/', (req, res) => {
    let user = req.body;
    // hash the user.password
    // update user to use the hash

    // rounds are 2 to the N times
    const rounds = process.env.HASH_ROUNDS || 8;
    const hash = bycrpt.hashSync(user.password, rounds)
    user.password = hash
    console.log( 'user',user)
    Users.add(user)
        .then(saved => {
            console.log('saved',saved)
            res.status(201).json(saved)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error : 'Username already exists'
            })
        })
})

module.exports = router;