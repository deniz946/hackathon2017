var package = require('../package.json');
var mongoose = require('mongoose');



/////////////////////////////////////////////////
//										 	    
//				SSH/DB CONFIG BLOCK			   
//											  
////////////////////////////////////////////////


let dbConfig = function () {
    console.log('Connecting to the DB in romote');
    mongoose.connect('mongodb://nazonapp:hack2017@ds121336.mlab.com:21336/nazonapp');

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'DB connection error:'));
    db.once('open', function () {
        console.log("DB connected!");
    });
};


module.exports = dbConfig;