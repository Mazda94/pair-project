const isLoggedIn = (req, res, next) => {
    if (!req.session.user) {
        next()
    } else {
        res.redirect(`/${req.session.user.roleName}`)
    }
}

const isNotLoggedIn = (req, res, next) => {
    if (!req.session.user) {
        res.redirect(`/`)
    } else {
        next()
    }
}

module.exports = { isLoggedIn, isNotLoggedIn }