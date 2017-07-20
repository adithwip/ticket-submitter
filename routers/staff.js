const express = require('express');
var router = express.Router()
const db = require('../models');
const mkey = require('../helpers/mkey');
const encryptpass = require('../helpers/encryptpass');

router.get('/', function (req, res) {
  res.redirect('/staff/login')
})

router.get('/login', function (req, res) {
  res.render('stafflogin', { err: false})
})

router.post('/login', function (req, res) {
  db.Departement.findOne({
    where: {
      username: req.body.username
    }
  })
  .then(result => {
    // res.send(result)
    let pass = encryptpass(req.body.password, 'final')
    if(result.password === pass) {
      res.redirect(`/staff/${result.id}`)
    }
    res.render('stafflogin', {err: `${req.body.username} atau password tidak dikenal`})

  })
})

router.get('/:id', function (req, res) {
  db.Ticket.findAll({
    where: {
      DepartementId: req.params.id
    },
    include: [{ all: true}]
  })
  .then(result => {
    // console.log('result')
    // res.send(result)
    res.render('staff', {dataTiket: result})
  })
})

router.get('/:id/:id2/view-conversations', function (req, res) {
  db.Ticket.findAll({
    
    where: {
      DepartementId: req.params.id
    },
    include: [{ all: true}],
    order: [['Messages', 'updatedAt', 'DESC']]
  })
  .then(result => {
    // res.send(result.Messages.Messages.message)
    res.render('staff-conversations', {data: result})
  })
})


router.post('/:id/:id2/view-conversations', function (req, res) {
  db.Message.create({
    message: req.body.message,
    from:2,
    TicketId: req.params.id2
  })
  .then(result => {
    res.redirect(`/staff/${req.params.id}/${req.params.id2}/view-conversations`)
  })
})
module.exports = router
