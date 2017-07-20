const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
var app = express()
const db = require('./models');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')

const Index = require('./models/index');
const User = require('./models/user');
const Staff = require('./models/departement');

const index = require('./routers/index');
const user = require('./routers/user');
const staff = require('./routers/staff');

app.use('/', index)
app.use('/home', user)
app.use('/staff', staff)



app.listen(process.env.PORT || 3000)
