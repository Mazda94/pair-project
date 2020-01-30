const express = require('express')
const route = express.Router()
const adminController = require('../controllers/adminController')
const { isNotLoggedIn } = require('../middleware/middleware')

route.get('/', isNotLoggedIn, adminController.admin)
route.get('/client/list', isNotLoggedIn, adminController.showClientList)
route.get('/logout', adminController.logout)

module.exports = route