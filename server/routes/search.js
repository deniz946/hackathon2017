var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Nationality = require('../models/Nationality');
var utils = require('../utils/utils');
var request = require('request');

// URL: htpp://localhost:3000/search

/*GET all nationalities page.*/
router.get('/', function (req, res, next) {
    const type = req.query.type, lat = req.query.lat, lng = req.query.lng, nat = req.query.nat ;
    if (type && nat) {
        request.get({ url: utils.query(type, nat, lat, lng) }, function (err, httpResponse, body) {
            res.send(body).status(200);
        });
    }
});


module.exports = router;
