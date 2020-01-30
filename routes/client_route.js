const express = require('express')
const route = express.Router()
const clientController = require('../controllers/clientController')

route.get('/', clientController.client)
route.get('/logout', clientController.logout)
// route.get('/client/list', clientController.showClientList)

module.exports = route