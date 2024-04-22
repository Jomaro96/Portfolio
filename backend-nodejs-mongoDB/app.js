//CONFIGURACION DE EXPRESS AKA VARIABLE APP
var express = require('express');
var bodyParser  = require('body-parser');

var app = express();

//cargar archivos rutas
var project_routes = require('./routes/project');

//config de middlewares, esto lo carga antes de ejecutar
app.use(bodyParser.urlencoded({extended:false})); //convierte datos de post en json
app.use(bodyParser.json()); //convierte peticiones en json

//CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
   res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
   next();
});


//rutas
app.use('/api',project_routes);

/*app.get('/', (req, res) => {
     res.status(200).send(
        "Testeando get"
     );
});

app.post('/', (req, res) => {
    //console.log(req.query.Username) //sacar parametros de la url
    console.log(req.body.Username) //sacar parametros del body
    res.status(200).send(
       "Testeando post"
    );
});*/

//export
module.exports = app;