const express = require('express');
var router = express.Router()
const db = require('../models');
const mkey = require('../helpers/mkey');
const encryptpass = require('../helpers/encryptpass');

router.get('/', function (req, res) {
  res.redirect('/staff/login')
})

router.get('/login', function (req, res) {
  res.render('staff')
})

module.exports = router
