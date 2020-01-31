const Model = require('../models/index')
const Client = Model.Client
const Company = Model.Company
const User = Model.User
const Stock = Model.Stock

class ClientController {
    static client(req, res) {
        const userPromise = User.findOne({
            include: Client,
            where: { id: req.session.user.id }
        })

        const clientPromise = Client.findOne({
            include: [Company],
            where: { UserId: req.session.user.id }
        })
        Promise.all([userPromise, clientPromise])
            .then(datas => {
                // console.log(datas[1].dataValues.Companies)
                res.render('client', { data: datas[0], role: 'client', stocks: datas[1].dataValues.Companies })
            })
            .catch(err => res.send(err))
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

    static buy(req, res) {
        Client
            .findOne({
                where: { UserId: req.session.user.id }
            })
            .then(client => {
                const stockValue = {
                    ClientId: client.id,
                    CompanyId: Number(req.params.companyId)
                }
                return Stock
                    .create(stockValue)
            })
            .then(result => {
                res.redirect('/client/buy')
            })
            .catch(err => res.send(err))

    }

    static editProfilePage(req, res) {
        Client
            .findOne({
                where: { UserId: req.session.user.id }
            })
            .then(client => {
                res.render('edit_profile', { data: client })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static editProfile(req, res) {
        const value = {
            name: req.body.name,
            balance: Number(req.body.balance),
            UserId: Number(req.session.user.id)
        }

        Client
            .create(value)
            .then(data => {
                res.redirect('/client')
            })
            .catch(err => res.send(err))
    }
}

module.exports = ClientController