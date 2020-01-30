const Model = require('../models/index')
const Client = Model.Client
const Company = Model.Company

class ClientController {
    static client(req, res) {
        res.render('client', { data: { Client: null }, role: 'client' })
    }

    static logout(req, res) {
        req.session.destroy(() => {
            res.redirect('/')
        })
    }

    static buyPage(req, res) {
        Company
            .findAll()
            .then(companies => {
                res.render('buy_stock', { companies })
            })
            .catch(err => res.send(err))
    }
}

module.exports = ClientController