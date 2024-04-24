var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ThemeSchema = Schema({
    name: String,
    description:String,
    categories: Array
});

module.exports = mongoose.model('Theme', ThemeSchema)