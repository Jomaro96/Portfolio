var Theme = require('../models/theme');

var controller = {
    add_theme:function(req,res){
        var theme = new Theme();
        var params = req.body;

        theme.name = params.name;
        theme.description = params.description;
        theme.categories = params.categories

        theme.save().then(themeAdded => {
            console.log("Theme added:", themeAdded);
            return res.status(200).send({theme:themeAdded})
        }).catch(error => {
            if(error.code == 11000){
                console.error("Duplicated Key Error:", error);
                return res.status(500).send({ message: 'Error: Theme already exists' });
                } else{
                console.error("Error saving document:", error);
                return res.status(500).send({ message: 'Error trying to save the document, try again later.' });
                }
        });
    },
    update_theme: function (req,res){
        var themeId = req.params.id;
        var update = req.body;

        Theme.findByIdAndUpdate(themeId,update,{new:true})
        .then(themeUpdate => {
            console.log("Theme updated");
            return res.status(200).send({themeUpdate});
        }).catch(error => {
            if(error.code == 11000){
                console.error("Duplicated Key Error:", error);
                return res.status(500).send({ message: 'Error: Theme already exists' });
                } else{
                console.error("Error saving document:", error);
                return res.status(500).send({ message: 'Error trying to save the document, try again later.' });
                }
        });
    },
    delete_theme:function(req,res){
        var themeId = req.params.id;

        Theme.findByIdAndDelete(themeId)
        .then(themeDeleted => {
            console.log("Deleted theme");
            return res.status(200).send({themeDeleted});
        }).catch(error => {
            console.error("Error deleting category:", error);
            return res.status(500).send({ message: 'Error deleting category' });
        });
    },
    get_themes:function(req,res){
        Theme.find({}).then(themes => {
            console.log("Found documents:",themes);
            return res.status(200).send({themes});
        }).catch(error => {
            console.error("Error finding documents:", error);
            return res.status(500).send({ message: 'Error getting the documents' });
        });
    },
    get_themes_cat:function(req,res){
        var category = req.params.category;
        Theme.find({categories:category}).then(themes => {
            if(themes.length === 0){
            console.log("There are no documents with the "+category+" category");
            return res.status(404).send({ message: 'There are no documents with that category' });
            }else{
            console.log("Found "+category+" documents:",themes);
            return res.status(200).send({themes});
            }
        }).catch(error => {
            console.error("Error finding documents:", error);
            return res.status(500).send({ message: 'Error getting the documents' });
        });
    },
    get_theme:function(req,res){
        var themeId = req.params.id;
        Theme.findOne({_id: themeId}).then(themeFound => {
            if(themeFound.length === 0){
                console.log("Theme does not exist");
                return res.status(404).send({message: 'Theme does not exist'});
            }else{
                console.log("Theme found");
                return res.status(200).send({themeFound});
            }

        }).catch(error => {
            console.log("Error finding user",error);
            return res.status(500).send({ message: 'Error finding the user' });
        });
    }
};

module.exports = controller;