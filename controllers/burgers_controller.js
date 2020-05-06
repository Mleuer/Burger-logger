var express = require('express');
var burger = require("../models/burger.js");

var router = express.Router();


router.get('/', function(req, res) {
    burger.all(function(data) {
        res.render('index', {burgers: data})
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
      // Send back the ID of the new quote
      res.status(200).end();
    });
  });

router.put("/api/burgers/:id", function(req, res) {
    let condition = `id = ${req.params.id}`;
    burger.update(condition, function(result) {
      if(result.changedRows == 0) {
        res.status(404).end();
      }else{
        res.status(200).end();
      }
    })
});

module.exports = router;
