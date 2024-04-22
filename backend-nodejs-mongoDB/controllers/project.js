//CONTROLADOR
//Primera parte de la instancia de project

//const { param } = require('../app');
var Project = require('../models/projects');
var fs = require('fs');
var path = require('path');
//controlador de direcciones dependiendo del nombre
var controller = {

    home: function(req, res){
        return res.status(200).send({
            message:'Soy la home'
        });
    },

    test: function(req,res){
        return res.status(200).send({
            message:"soy el metodo o accion test"
        });
    },

    save_project: function(req,res) {
        var project = new Project();
        var params = req.body;

        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.langs = params.langs;
        project.year = params.year;
        project.image = null;
        
       /* project.save((err,projectStored) => {
            if(err) return res.status(500).send({message:'Error al guardar el documento'})

            if(!projectStored) return res.status(404).send({message:'No se pudo guardar el documento'})

            return res.status(200).send({project:projectStored})
        });*/
        project.save()
    .then(projectStored => {
        console.log("Document saved successfully:", projectStored);
        return res.status(200).send({ project: projectStored });
        // Do something with the saved document
    })
    .catch(error => {
        if (error.name === 'ValidationError') {
            // Handle validation errors
            console.error("Validation Error:", error.message);
            return res.status(422).send({ message: 'Error con el tipo de dato' });
        } else {
            // Handle other errors
            console.error("Error saving document:", error);
            return res.status(500).send({ message: 'Error al guardar el documento' });
        }
    });
        ////GO ASYNC OR GO HOMEEEEE

        
    },
    get_project: function(req,res){
        var projectId = req.params.id

        if(projectId == null) {
            return res.status(404).send({ message: 'No existe el documento' });
        }

        Project.findById(projectId)
        .then(projectFind => {
            console.log("Item found:", projectFind);
            return res.status(200).send({projectFind});
        })
        .catch(error => {
            console.error("Error saving document:", error);
            return res.status(500).send({ message: 'Error al guardar el documento' });
        })
    },
    get_projects:function(req,res){
    
        ///Cuenta como hacer queries, dentro del find se puede especificar el dato deseado
        Project.find({}).sort('-year')
        .then(projects => {
            console.log("Found documents:", projects);
            return res.status(200).send({projects});
        })
        .catch(error => {
            console.error("Error finding documents:", error);
            return res.status(500).send({ message: 'Error al enviar documentos' });
        });
    },
    update_project:function(req,res){
        var projectId = req.params.id
        var update = req.body

        Project.findByIdAndUpdate(projectId,update, {new:true})
        .then(projectUpdate => {
            console.log("Updated document:", projectUpdate);
            return res.status(200).send({projectUpdate});
        })
        .catch(error => {
            console.error("Error updating document:", error);
            return res.status(500).send({ message: 'Error al actualizar documento' });
        })
    },
    delete_project:function(req,res) {
        var projectId = req.params.id;
        Project.findByIdAndDelete(projectId)
        .then(projectDeleted => {
            console.log("Deleted document:", projectDeleted);
            return res.status(200).send({projectDeleted});
        })
        .catch(error => {
            console.error("Error deleting document:", error);
            return res.status(500).send({ message: 'Error al borrar documento' });
        })
    },
    uploadImage: function(req,res) {
        var projectId = req.params.id;
        var fileName = 'imagen no subida...';

        if(req.files){

            var filePath = req.files.image.path;
            var fileSplit = filePath.split("\\");
            var fileName = fileSplit[1];
            var extSplit = filePath.split("\.")
            var fileExt = extSplit[1];

            console.log(fileExt);
            if(fileExt == "png" || fileExt == "jpg" ||  fileExt == "jpeg" || fileExt =="gif")
            {
                Project.findByIdAndUpdate(projectId,{image:fileName},{new:true})
                .then(projectUpdate => {
                    console.log("Updated image:", projectUpdate);
                    return res.status(200).send({projectUpdate});
                })
                .catch(error => {
                    console.error("Error updating image:", error);
                    return res.status(500).send({ message: 'Error al actualizar imagen' });
                })
            } 
            else 
            {
                fs.unlink(filePath, (err) => {
                    return res.status(500).send({
                        messaage:"Archivo no valido"
                    });
                });
                
            }
            /*console.log(req.files)
            return res.status(200).send({
                files: fileName
            });*/
        }  else {
            return res.status(500).send({
                messaage:"Imagen no subida correctamente"
            });
        }
    },
    getImageFile:function(req,res) {
        var file = req.params.file;
        var path_file = './uploads/'+file;

        fs.exists(path_file,(exists) => {
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(200).send({
                    messaage:"No existe la imagen......"
                });
            }
        })
    }
    
};




module.exports = controller;