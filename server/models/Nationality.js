var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create a schema
var nationalitySchema = new Schema({
  name: { type: String, required: true},
  
});

var Nationality = mongoose.model('Nationality', nationalitySchema);

module.exports = Nationality;