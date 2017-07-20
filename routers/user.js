const express = require('express');
var router = express.Router()
const db = require('../models');
const mkey = require('../helpers/mkey');
const encryptpass = require('../helpers/encryptpass');

// router.get('/:id', function (req, res) {
//   db.Ticket.findAll({
//     where: {
//       UserId: req.params.id
//     }
//   })
//   .then(result => {
//     console.log('result')
//     res.render('home', {dataTiket: result})
//   })
// })

router.get('/:id', function (req, res) {
  db.Ticket.findAll({
    where: {
      UserId: req.params.id
    }
  })
  .then(result => {
    console.log('result')
    res.render('home', {dataTiket: result})
  })
})


router.get('/:id/open-ticket', function (req, res) {
  db.Departement.findAll()
  .then(result => {
    console.log(result);
    res.render('open-ticket', {support: result})
  })
})

router.post('/:id/open-ticket', function (req, res) {
  let noticket = mkey()
  db.Ticket.create({
    ticket: noticket,
    title: req.body.title,
    close_status: 1,
    UserId: req.params.id,
    DepartementId: req.body.ids
  })
  .then((rows) => {
    db.Message.create({
      message: req.body.message,
      from: 1,
      TicketId: noticket
    })
    .then(() => {
      res.redirect(`/home/${req.params.id}`)
    })
})
})

module.exports = router
