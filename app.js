const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const session = require('express-session')
var bodyParser = require('body-parser')
const indexRoute = require('./routes/index_route')
const adminRoute = require('./routes/admin_route')
const clientRoute = require('./routes/client_route')
const isLoggedIn = require('./middleware/isLoggedIn')
const isAdmin = require('./middleware/isAdmin')
const alreadyLoggedIn = require('./middleware/alreadyLoggedIn')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))
    
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use('/client', isLoggedIn, clientRoute)
app.use('/' , alreadyLoggedIn, indexRoute)
app.use('/admin', isAdmin, adminRoute)

app.listen(port, () => console.log(`Listening to the port : ${port}`))