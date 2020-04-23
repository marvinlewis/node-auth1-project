const router = require('express').Router();

const Users = require('./users-model.js');


router.get('/', (req, res) => {
    console.log('sfad')

    Users.get()
    .then(item => {
        res.status(200).json(item)
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({
            error : err
        })
    })
 })

module.exports = router;