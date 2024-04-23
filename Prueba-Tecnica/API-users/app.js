//CONFIG EXPRESS
var express = require('express');
var bodyParser  = require('body-parser');

var app = express();

//load routes
var user_routes = require('./routes/user');

//config middlewares
app.use(bodyParser.urlencoded({extended:false})); //convierte datos de post en json
app.use(bodyParser.json()); //convierte peticiones en json

//CORS
// Config headers
app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
   res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
   next();
});


//routes
app.use('/api',user_routes);


//export
module.exports = app;