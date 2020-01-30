const express = require('express')
const route = express.Router()
const clientController = require('../controllers/clientController')

route.get('/', clientController.client)
route.get('/logout', clientController.logout)

route.post('/buy', clientController.showBuy)
route.get('/buy', clientController.buy)

// route.post('/addBalance', clientController.showBalance)
// route.get('/addBalance', controller.addBalance)
// route.get('/client/list', clientController.showClientList)

module.exports = route