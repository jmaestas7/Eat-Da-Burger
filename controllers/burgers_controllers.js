var express = require('express');
let burg = require('../models/burger.js');
var connection = require('../config/connection.js');
var router = express.Router();
var path = require('path'); 

router.get('/', function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
        if (err) {
            return res.status(500).end();
          }
        //res.json(data);
        res.render("index", { burgers: data });
      });
    });

router.get('/burgers', function (request, res) {
        burger.selectAll(function (data) {
            if (err) {
                return res.status(500).end();
              }
            res.render('index', { burgers: data });
        });
    });    

    // POST - /burgers/add return index.hbs
router.post('/burgers/add', function (request, res) {
        burger.insertBurger('burger_name', 'desc', 'cost', request.body.burger_name, function (err, result) {
            res.redirect("/");
        });
});

module.exports = router;