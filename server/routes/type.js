var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Type = require('../models/Type');


// URL: htpp://localhost:3000/type

/* GET all types page. */
router.get('/', function(req, res, next) {
    Type.find({}, function(err,types){
        res.send(types).status(200);
    });
});

router.post('/', function(req, res, next){
    console.log(req.body);
    if(req.body.name){
        let nat = new Type;
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
