//CONFIGURACION A LA BD
var mongoose = require('mongoose');

//server app
var app = require('./app'); 
var port = 3700; 

mongoose.Promise = global.Promise; 
mongoose.connect('mongodb://localhost:27017/Prueba_Tecnica')
        .then(() => {
            console.log("Conection success");

            
            app.listen(port, ()=>{
                console.log("Server running successfully")
            }); 
        })
        .catch(err => console.log(err))