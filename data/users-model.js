const db = require('./dbConfig.js');

module.exports ={
    get,
    add,
    findBy
};

function get() {
    console.log('made it here')
    return db('users');
};

function add (user) {
    return db('users').insert(user)
};

function findBy (filter) {
    return db('users').where(filter)
        
}