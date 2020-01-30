const Model = require('../models/index')
const Client = Model.Client

class ClientController {
    static client(req, res) {
        res.render('client', {role : 'client'})
    }

    static logout(req, res){
        req.session.destroy(() => {
            res.redirect('/')
        })
    }
}

module.exports = ClientController