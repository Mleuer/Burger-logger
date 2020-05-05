var express = require('express');
var burger = require("../models/burger.js");

var router = express.Router();


router.get('/', function(req, res) {
    burger.all(function(data) {
        res.render('index', {burgers: data})
    })
})

router.post("/api/burgers", function (req, res) {
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
      // Send back the ID of the new quote
      res.status(200).end();
    });
  });


module.exports = router;
