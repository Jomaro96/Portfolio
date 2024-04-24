var Category = require('../models/category');

var controller = {
    add_category:function(req,res){
        var category = new Category();
        var params = req.body;

        category.name = params.name;
        category.description = params.description;

        category.save().then(catAdded => {
            console.log("Category added:", catAdded);
            return res.status(200).send({category:catAdded})
        }).catch(error => {
            if(error.code == 11000){
                console.error("Duplicated Key Error:", error);
                return res.status(500).send({ message: 'Error: The category already exists' });
                } else{
                console.error("Error saving document:", error);
                return res.status(500).send({ message: 'Error trying to save the document, try again later.' });
                }
        });
    },
    update_category: function (req,res){
        var catId = req.params.id;
        var update = req.body;

        Category.findByIdAndUpdate(catId,update,{new:true})
        .then(catUpdate => {
            console.log("Category updated");
            return res.status(200).send({catUpdate});
        }).catch(error => {
            if(error.code == 11000){
                console.error("Duplicated Key Error:", error);
                return res.status(500).send({ message: 'Error: The category already exists' });
                } else{
                console.error("Error saving document:", error);
                return res.status(500).send({ message: 'Error trying to save the document, try again later.' });
                }
        });
    },
    delete_category:function(req,res){
        var catId = req.params.id;

        Category.findByIdAndDelete(catId)
        .then(catDeleted => {
            console.log("Deleted category");
            return res.status(200).send({catDeleted});
        }).catch(error => {
            console.error("Error deleting category:", error);
            return res.status(500).send({ message: 'Error deleting category' });
        });
    },
    get_categories:function(req,res){
        Category.find({}).then(categories => {
            console.log("Found documents:",categories);
            return res.status(200).send({categories});
        }).catch(error => {
            console.error("Error finding documents:", error);
            return res.status(500).send({ message: 'Error getting the documents' });
        });
    },
    get_category:function(req,res){
        var catId = req.params.id;
        Category.findOne({_id: catId}).then(catFound => {
            if(!catFound){
                console.log("Category does not exist");
                return res.status(404).send({message: 'Category does not exist'});
            }else{
                console.log("Category found");
                return res.status(200).send({catFound});
            }

        }).catch(error => {
            console.log("Error finding user",error);
            return res.status(500).send({ message: 'Error finding the user' });
        });
    }
};

module.exports = controller;