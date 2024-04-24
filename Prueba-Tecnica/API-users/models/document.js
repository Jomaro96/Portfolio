var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DocumentSchema = Schema({
    name: String,
    date: {type: Date, default: Date.now},
    file:String,
    thumb:String,
    username:String,
    theme: String,
    category: String
});

module.exports = mongoose.model('Document', DocumentSchema)