const https = require('https')
const Model = require('../models/index')
const Company = Model.Company
const User = Model.User

class Controller {
    static admin(req, res) {
        Company
            .destroy({
                where: {}
            })
            .then(() => {
                const value = {
                    hostname: 'financialmodelingprep.com',
                    port: 443,
                    path: '/api/v3/stock/actives',
                    method: 'GET'
                }
                const request = https.request(value, (result) => {
                    result.on('data', (d) => {
                        const datas = JSON.parse(d.toString('utf8')).mostActiveStock
                        datas.forEach((data, index) => {
                            data.id = index + 1
                        });
                        Company
                            .bulkCreate(datas)
                            .then(data => {
                                res.render('admin', { companies: data })
                            })
                            .catch(err => res.send(err))
                    })
                })

                request.on('error', (error) => {
                    console.error(error)
                })

                request.end()
            })
            .catch(err => {
                res.send(err)
            })
    }

    static showClientList(req, res) {
        User
            .findAll({
                where: {
                    RoleId: 3
                }
            })
            .then(users => {
                res.render('client_list', { users })
            })
            .catch(err => res.send(err))
    }

    static logout(req, res) {
        console.log(req.session)
    }
}

module.exports = Controller