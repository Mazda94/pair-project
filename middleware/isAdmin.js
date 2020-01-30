module.exports = (req, res, next) => {
    if (req.session.user.roleName == 'admin') {
        next()
    } else {
        res.redirect('/')
    }
}