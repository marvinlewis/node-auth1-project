const router = require('express').Router();

router.get('/logout', (req, res) => {
    if(req.session) {
    req.session.destroy(err => {
        if(err) {
            res.status(500).json({
                errorMessage : ' you can checkout anytime you like but you cant leave...'
            })
        } else {
            res.status(204).end();
        }
    })
} else {
    res.status(204).end();
}
})

module.exports = router;