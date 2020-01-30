const https = require('https')
const Model = require('../models/index')
const Company = Model.Company
class Controller {
    static admin(req, res) {
        res.render('admin')
    }

    static addCompanyPage(req, res) {
        const value = {
            hostname: 'financialmodelingprep.com',
            port: 443,
            path: '/api/v3/stock/actives',
            method: 'GET'
        }
        const request = https.request(value, (result) => {
            result.on('data', (d) => {
                const datas = JSON.parse(d.toString('utf8')).mostActiveStock
                res.render('add_company', { datas })
            })
        })

        request.on('error', (error) => {
            console.error(error)
        })

        request.end()
    }

    static addCompany(req, res) {
        const value = {
            
        }
    }
}

module.exports = Controller