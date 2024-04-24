
var Document = require('../models/document');
var fs = require('fs');
var path = require('path');


var controller = {
    add_document:function(req,res){
        var document = new Document();
        var params = req.body;

        document.name = params.name;
        document.date = params.date;
        document.file = params.file;
        document.thumb = params.thumb;
        document.username = params.username;
        document.theme = params.theme;
        document.category = params.category;

        document.save().then(documentAdded => {
            console.log("Document added:", documentAdded);
            return res.status(200).send({document:documentAdded})
        }).catch(error => {
            
                console.error("Error saving document:", error);
                return res.status(500).send({ message: 'Error trying to save the document, try again later.' });
        });
    },
    update_document: function (req,res){
        var documentId = req.params.id;
        var update = req.body;

        Document.findByIdAndUpdate(documentId,update,{new:true})
        .then(documentUpdate => {
            console.log("Document updated");
            return res.status(200).send({documentUpdate});
        }).catch(error => { 
                console.error("Error saving document:", error);
                return res.status(500).send({ message: 'Error trying to save the document, try again later.' });
        });
    },
    delete_document:function(req,res){
        var documentId = req.params.id;

        Document.findByIdAndDelete(documentId)
        .then(documentDeleted => {
            console.log("Deleted document");
            return res.status(200).send({documentDeleted});
        }).catch(error => {
            console.error("Error deleting document:", error);
            return res.status(500).send({ message: 'Error deleting document' });
        });
    },
    get_documents:function(req,res){
        var category = req.query.category;
        var theme = req.query.theme;

        var query = {};
        if (theme) {
            query.theme = theme;
        }
        if (category) {
            query.category = category;
        }
        console.log(query)
        Document.find(query).then(documents => {
            console.log("Found documents:",documents);
            return res.status(200).send({documents});
        }).catch(error => {
            console.error("Error finding documents:", error);
            return res.status(500).send({ message: 'Error getting the documents' });
        });
    },
    get_document:function(req,res){
        var documentId = req.params.id;
        Document.findOne({_id: documentId}).then(documentFound => {
            if(!documentFound){
                console.log("Document does not exist");
                return res.status(404).send({message: 'Document does not exist'});
            }else{
                console.log("Document found");
                return res.status(200).send({documentFound});
            }

        }).catch(error => {
            console.log("Error finding user",error);
            return res.status(500).send({ message: 'Error finding the user' });
        });
    },
    upload_thumbnail:function(req,res){
        var documentId = req.params.id;
        var fileName = 'No image';

        if(req.files){

            var filePath = req.files.thumb.path;
            var fileSize = req.files.thumb.size;
            var fileSplit = filePath.split("\\");
            var fileName = fileSplit[1];
            var extSplit = filePath.split("\.")
            var fileExt = extSplit[1];

            console.log(fileExt);
            //Need check filesize
            if(fileExt == "png" || fileExt == "jpg" ||  fileExt == "jpeg" || fileExt =="gif")
            {
                if(maxSize > fileSize){
                Document.findByIdAndUpdate(documentId,{thumb:fileName},{new:true})
                .then(documentUpdate => {
                    console.log("Updated image:", documentUpdate);
                    return res.status(200).send({documentUpdate});
                })
                .catch(error => {
                    console.error("Error updating image:", error);
                    return res.status(500).send({ message: 'Error updating thumbnail' });
                })
                }else {
                    console.error("File too large");
                    return res.status(500).send({ message: 'File too large' });
                }
            } 
            else 
            {
                fs.unlink(filePath, (err) => {
                    return res.status(500).send({
                        messaage:"Not a valid file format"
                    });
                });
                
            }
        }  else {
            return res.status(500).send({
                messaage:"Imagen no subida correctamente"
            });
        }
    },
    upload_file:function(req,res){
        var documentId = req.params.id;
        var fileName = 'No file';

        if(req.files){

            var filePath = req.files.file.path;
            var fileSize = req.files.file.size;
            var fileSplit = filePath.split("\\");
            var fileName = fileSplit[1];
            var extSplit = filePath.split("\.")
            var fileExt = extSplit[1];
            var validExt = [];
            var maxSize = 10 * 1024 * 1024; //No more than 10mbs of data

            //Need to Add file valid formats from categories
            if(maxSize > fileSize){
 
                Document.findByIdAndUpdate(documentId,{file:fileName},{new:true})
                .then(documentUpdate => {
                    console.log("Updated file:", documentUpdate);
                    return res.status(200).send({documentUpdate});
                })
                .catch(error => {
                    console.error("Error updating file:", error);
                    return res.status(500).send({ message: 'Error updating file' });
                })
            }else{
                    console.error("File too large");
                    return res.status(500).send({ message: 'File too large' });
            }
        }else {
                return res.status(500).send({
                    messaage:"Imagen no subida correctamente"
                });
        }

    },
    get_thumbnail:function(req,res){
        var file = req.params.file;
        var path_file = './uploads/'+file;

        fs.exists(path_file,(exists) => {
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(200).send({
                    messaage:"Image does not exist"
                });
            }
        })
    },
    get_file:function(req,res){
        var file = req.params.file;
        var path_file = './files/'+file;

        fs.exists(path_file,(exists) => {
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(200).send({
                    messaage:"File does not exist"
                });
            }
        })
    }
};
module.exports = controller;