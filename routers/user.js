const express = require('express');
var router = express.Router()
const db = require('../models');
const mkey = require('../helpers/mkey');
const encryptpass = require('../helpers/encryptpass');

router.get('/:id', function (req, res) {
  db.Ticket.findAll({
    where: {
      id: req.params.id
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

module.exports = router
