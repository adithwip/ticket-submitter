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
    },
    include: [{ all: true}]
  })
  .then(result => {
    // console.log('result')
    // res.send(result)
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
      TicketId: rows.id
    })
    .then(() => {
      res.redirect(`/home/${req.params.id}`)
    })
})
})


router.get('/:id/:id2/view-conversations', function (req, res) {
  db.Message.findAll({
    where: {
      TicketId: req.params.id2
    },
    // include: [{ all: true}],
    // order: [['Messages', 'createdAt', 'ASC']]
    order: [['createdAt', 'DESC']]
  })
  .then(result => {
    db.Ticket.findOne({
      where: {
        id: req.params.id2
      },
      include:[{ all: true }]
    })
    .then(result2 => {
      // res.send(result)
      res.render('conversations', {data: result, data2: result2})
    })
    // res.send(result.Messages.Messages.message)

  })
})

router.post('/:id/:id2/view-conversations', function (req, res) {
  db.Message.create({
    message: req.body.message,
    from:1,
    TicketId: req.params.id2
  })
  .then(result => {
    res.redirect(`/home/${req.params.id}/${req.params.id2}/view-conversations`)
  })
})

router.get('/:id/:id2/close', function (req, res) {
  db.Ticket.update({
    close_status: 2
  },{
    where: {
      id: req.params.id2
    }
  })
  .then(() => {
    res.redirect(`/home/${req.params.id}/`)
  })
})

module.exports = router
