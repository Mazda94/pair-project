const express = require('express')
const route = express.Router()
const clientController = require('../controllers/clientController')
const { isNotLoggedIn } = require('../middleware/middleware')

route.get('/',isNotLoggedIn, clientController.client)
route.get('/logout', isNotLoggedIn, clientController.logout)
route.get('/buy', clientController.buyPage)

module.exports = route