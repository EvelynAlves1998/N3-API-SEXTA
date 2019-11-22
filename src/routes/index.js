const express = require('express')
const router = express.router()

router.get("/", function (req, res) {
    res.status(200).send({
      title: "Reprograma - API SEXTA",
      version: "1.0.0"
    })
  })
  
  module.exports = router