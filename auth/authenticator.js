const jwt = require('jsonwebtoken');
const secrets = require('../auth/sercrets.js');

module.exports = (req, res, next) => {
    // verify the token is valid
    const secret = secrets.jwtSecret;
    const token = req.headers.authorization;
    // talk to front-end but industry stand is auth in header
       if(token) {

    jwt.verify(token, secret, (error, decodedToken) => {
        // if everything is good, error will be undefined
        if(error) {
            res.status(401).json({
                errorMessage : 'user not verified'
            })
        } else {
            req.decodedToken = decodedToken;
            next()
        }
    }); 
 } else {
     res.status(401).json({
         errorMessage : 'Havent registered or needs to sign in again'
     })
 } 
}