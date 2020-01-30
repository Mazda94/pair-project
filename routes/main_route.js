const express = require('express')
const route = express.Router()
const controller = require('../controllers/main')
route.get('/', controller.home)
route.post('/login', controller.login)
route.get('/register', controller.registerPage)
route.post('/register', controller.register)
route.get('/admin', controller.admin)
route.get('/add/company', controller.addCompanyPage)
route.post('/add/company', controller.addCompany)

module.exports = route