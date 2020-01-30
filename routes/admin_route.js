const express = require('express')
const route = express.Router()
const adminController = require('../controllers/adminController')

route.get('/admin', adminController.admin)
route.get('/add/company', adminController.addCompanyPage)
route.post('/add/company', adminController.addCompany)

module.exports = route