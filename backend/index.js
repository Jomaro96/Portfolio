//CONFIGURACION A LA BD
var mongoose = require('mongoose');//escencial para la conexion  a la bd

//server app
var app = require('./app'); //direccion del archivo app js
var port = 3700; //puerto que quiero para mi server

mongoose.Promise = global.Promise; //declarar promesa de mongoose
mongoose.connect('mongodb://localhost:27017/portafolio')
        .then(() => {
            console.log("Conection success");

            //Creacion de server
            app.listen(port, ()=>{
                console.log("Server corriendo con exito")
            }); //metodo listen de express que toma puerto y callback
        })
        .catch(err => console.log(err))