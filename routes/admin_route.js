const express = require('express')
const route = express.Router()
const adminController = require('../controllers/adminController')

route.get('/', adminController.admin)
route.get('/client/list', adminController.showClientList)
route.get('/logout', adminController.logout)

module.exports = route