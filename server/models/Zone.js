var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create a schema
var zoneSchema = new Schema({
  name: { type: String, required: true},
  
});

var Zone = mongoose.model('Zone', zoneSchema);

module.exports = Pack;