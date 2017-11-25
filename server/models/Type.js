var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create a schema
var typesSchema = new Schema({
  name: { type: String, required: true},
  
});

var Type = mongoose.model('Type', typesSchema);

module.exports = Type;