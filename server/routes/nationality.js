var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Nationality = require('../models/Nationality');


// URL: htpp://localhost:3000/nationality

/* GET all nationalities page. */
router.get('/', function(req, res, next) {
    Nationality.find({}, function(err,nations){
        res.send(nations).status(200);
    });
});

router.post('/', function(req, res, next){
    console.log(req.body);
    if(req.body.name){
        let nat = new Nationality;
        nat.name = req.body.name;

        nat.save({}, function(err, item){
            if(err) next(err);
            else{
                res.send({err: false, msg:"Item has been added", item:item});
            }
        });
    }
});

module.exports = router;
