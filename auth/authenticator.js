
module.exports = (req, res, next) => {
    console.log(req.session.loggedIn)
    if(req.session.loggedIn) {
    next()
} else {
    res.status(401).json({
        error : "You are not logged in!"
    })
}
}