////MODELO
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    name: String,
    description:String,
    category: String,
    year: Number,
    langs: String,
    image:String
});

module.exports = mongoose.model('Project', ProjectSchema)
//Params son donde se va a guardar y mi schema
//Se guardara en projects por como se maneja en mongodb