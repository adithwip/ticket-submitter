const express = require('express');
var router = express.Router()
const db = require('../models');
const mkey = require('../helpers/mkey');
const encryptpass = require('../helpers/encryptpass');
// const user = require('../models/user');


router.get('/', function (req, res) {
  res.redirect('/login')
})

router.get('/home', function (req, res) {
  res.redirect('/login')
})

router.get('/login', function (req, res) {
  res.render('login', {err: false})
})


router.post('/login', function(req, res, next){
  db.User.findOne({
    where: {
      username: req.body.username
    }
  })
  .then(result => {
    // console.log(JSON.stringify(result));
    let pass = encryptpass(req.body.password, 'final')
    if(result.password === pass) {
      // req.session.username = result.dataValues.username,
      // req.session.RoleId = result.dataValues.RoleId
      // if(req.session.RoleId === 1){
      //   req.session.authority = 1;
      // }
      res.redirect(`/home/${result.id}`)
    } else {
      res.render('login', {err: `${req.body.username} atau password tidak dikenal`})
    }

  })
})


router.get('/signup', function (req, res) {
  res.render('signup', {err: false})
})

router.post('/signup', function (req, res) {
  db.User.create({
    username: req.body.username,
    password: req.body.password,
    RoleId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then(result => {
    res.redirect('/login')
  })
})

module.exports = router
