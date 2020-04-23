
module.exports = (req, res, next) => {
    console.log( 'session ', req.session.loggedIn)
    if(req.session.loggedIn) {
    next();
}else{
    res.status(405).json({
        error : "You are not logged in!"
    })
}
}