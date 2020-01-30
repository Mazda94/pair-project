const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const session = require('express-session')
var bodyParser = require('body-parser')
const indexRoute = require('./routes/index_route')
const adminRoute = require('./routes/admin_route')
const clientRoute = require('./routes/client_route')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use('/', indexRoute)
app.use('/client', clientRoute)
app.use('/admin', adminRoute)

app.listen(port, () => console.log(`Listening to the port : ${port}`))