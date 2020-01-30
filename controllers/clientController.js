const Model = require('../models')
const Client = Model.Client
const Company = Model.Company

class ClientController {
    static client(req, res) {
        Client
            .findAll({
                include: Company
            })
            .then(data => {
                // res.send(data)
                res.render('client', {role : 'client'})
            })
    }

    static logout(req, res) {
        req.session.destroy(() => {
            res.redirect('/')
        })
    }

    static showBuy(req, res) {
        let objBuy = {
            companyName: req.query.companyName,
            price: req.query.price,
            changes: req.query.changes
        }

            .findOne({
                where: {

                }
            })
    }

    static buy(req, res) {

    }

    static showBalance(req, res) {

    }

    static addBalance(req, res) {

    }

}

module.exports = ClientController