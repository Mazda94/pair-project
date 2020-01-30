const express = require('express')
const route = express.Router()
const clientController = require('../controllers/clientController')
const { isNotLoggedIn } = require('../middleware/middleware')

route.get('/',isNotLoggedIn, clientController.client)
route.get('/logout', isNotLoggedIn, clientController.logout)
route.get('/buy', clientController.buyPage)
route.get('/edit/profile/:id', clientController.editProfilePage)
route.post('/edit/profile/:id', clientController.editProfile)

module.exports = route