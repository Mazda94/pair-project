const Op = require('sequelize').Op
const Model = require('../models/index')
const User = Model.User
const Role = Model.Role
const Client = Model.Client
class IndexController {
    static home(req, res) {
        res.render('index', { data: null, msg: null })
    }

    static login(req, res) {
        const user = req.body.username
        const password = req.body.password
        const options = {
            include: [Role, Client],
            where: {
                [Op.or]: [{ email: user }, { username: user }],
                [Op.and]: { password: password }
            },
            hooks: true
        }
        User
            .findOne(options)
            .then(data => {
                req.session.user = {
                    id : data.dataValues.id,
                    roleName: data.dataValues.Role.name,
                    isLoggedIn: true
                }
                if (data) {
                    switch (data.dataValues.Role.name) {
                        case 'client':
                            res.render(`${data.dataValues.Role.name}`, { data })
                            break

                        case 'admin':
                            res.redirect(`/${data.dataValues.Role.name}`)
                            break
                    }
                } else {
                    res.render('index', { data: null, msg: 'Incorrect username / password' })
                }
            })
            .catch(err => {
                res.render('index', { data: null, msg: 'Incorrect username / password' })
            })
    }

    static registerPage(req, res) {
        res.render('register', { error: null, value: null, msg : null })
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
                res.render('index', { data: null, msg: null })
            })
            .catch(err => {
                const error = IndexController.createError(err.errors)
                res.render('register', { value, error, msg: null })
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

}

module.exports = IndexController