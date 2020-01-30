const express = require('express')
const app = express()
const port = 3000
const session = require('express-session')
var bodyParser = require('body-parser')
const mainRoute = require('./routes/main_route')

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use('/', mainRoute)

app.listen(port, () => console.log(`Listening to the port : ${port}`))

const https = require('https')

req.end()