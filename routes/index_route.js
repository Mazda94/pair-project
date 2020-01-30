const express = require('express')
const indexRoute = express.Router()
const indexController = require('../controllers/indexController')
indexRoute.get('/', indexController.home)
indexRoute.post('/login', indexController.login)
indexRoute.get('/register', indexController.registerPage)
indexRoute.post('/register', indexController.register)

module.exports = indexRoute