const express = require('express')
const app = express()
const port = 3000
const session = require('express-session')
var bodyParser = require('body-parser')
const indexRoute = require('./routes/index_route')
const adminRoute = require('./routes/admin_route')

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use('/', indexRoute)
app.use('/', adminRoute)

app.listen(port, () => console.log(`Listening to the port : ${port}`))