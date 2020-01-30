const https = require('https')
const Op = require('sequelize').Op
const Model = require('../models/index')
const User = Model.User
const Role = Model.Role
const Company = Model.Company
class Controller {
    static home(req, res) {
        res.render('index', { data: null, msg: null })
    }

    static login(req, res) {
        let flag = true
        for (let key in req.body) {
            if (req.body[key] === '') {
                flag = false
            }
        }

        if (flag) {
            const user = req.body.username
            const password = req.body.password
            const options = {
                include: Role,
                where: {
                    [Op.or]: [{ email: user }, { username: user }],
                    [Op.and]: { password: password }
                },
                hooks: true
            }
            User
                .findOne(options)
                .then(data => {
                    if (data) {
                        res.render(`${data.Role.name}`, { data })
                    } else {
                        res.render('index', { data: null, msg: 'Incorrect username / password' })
                    }
                })
                .catch(err => {
                    res.send(err)
                })
        } else {
            res.render('index', { data: req.body, msg: null })
        }
    }

    static registerPage(req, res) {
        res.render('register', { error: null, value: null })
    }

    static register(req, res) {
        const value = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            RoleId: 3
        }
        User
            .create(value)
            .then(user => {
                res.redirect('/', { data: null, msg: null })
            })
            .catch(err => {
                const error = Controller.createError(err.errors)
                res.render('register', { error, value })
            })
    }

    static createError(err) {
        let temp = {}
        err.forEach(element => {
            if (!temp[element.path]) {
                temp[element.path] = [element.message]
            } else {
                temp[element.path].push(element.message)
            }
        });
        return temp
    }

    static admin(req, res) {
        const options = {
            hostname: 'financialmodelingprep.com',
            port: 443,
            path: '/api/v3/stock/actives',
            method: 'GET'
        }

        const req = https.request(options, (res) => {
            res.on('data', (d) => {
                res.render('admin', { d })
                // process.stdout.write(d)
            })
        })

        req.on('error', (error) => {
            console.error(error)
        })
    }

    static addCompanyPage(req, res) {
        res.render('add_company')
    }

    static addCompany(req, res) {
        const companyValue = {
            companyName: req.body.companyName,
            address: req.body.address,
            sector: req.body.sector
        }

        const companyUser = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            RoleId: 2
        }

        Promise.all([
            User.create(companyUser),
            Company.create(companyValue)
        ])
            .then(datas => {
                res.redirect('/admin')
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
    }
}

module.exports = Controller