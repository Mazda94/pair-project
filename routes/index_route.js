const express = require('express')
const indexRoute = express.Router()
const indexController = require('../controllers/indexController')
const { isLoggedIn } = require('../middleware/middleware')

indexRoute.get('/', isLoggedIn, indexController.home)
indexRoute.post('/login', indexController.login)
indexRoute.get('/register', isLoggedIn, indexController.registerPage)
indexRoute.post('/register', indexController.register)

module.exports = indexRoute