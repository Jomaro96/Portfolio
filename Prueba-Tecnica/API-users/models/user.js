
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    email: String,
    username:String,
    password: String,
    type: String,
});

module.exports = mongoose.model('User', UserSchema)