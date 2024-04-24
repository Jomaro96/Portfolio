
var User = require('../models/user');

var controller = {

    add_user: function(req,res) {
        var user = new User();
        var params = req.body;

        user.email = params.email;
        user.username = params.username;
        user.password = params.password;
        user.type = params.type;
      
    
    user.save().then(userAdded => {
        console.log("User Added:", userAdded);
        return res.status(200).send({ user: userAdded });
        
    })
    .catch(error => {
            if(error.code == 11000){
            console.error("Duplicated Key Error:", error);
            return res.status(500).send({ message: 'Error: The username or email already exist' });
            } else{
            console.error("Error saving document:", error);
            return res.status(500).send({ message: 'Error trying to save the document, try again later.' });
            }
    });
        
    },
    login: function(req,res){
        var params = req.body;

        User.findOne({email:params.email}).then(userFound => {
            if(!userFound){
                console.log("User not found");
                return res.status(404).send({ message: 'User not found' });
            }
            else {
                //For testing purpuses im not encrypting/decrypting the password yet
                if (userFound.password !== params.password) {
                    console.log("Incorrect password");
                    return res.status(401).send({ message: 'Incorrect password' });
                }
                else {
    
                console.log("Login successful!!:");
                return res.status(200).send({userFound});
                }
            }
        }).catch(error => {
            console.error("Error trying to find the user", error);
            return res.status(500).send({ message: 'Error trying to find the user' });
        });
    },
    update_user: function (req,res){
        var userId = req.params.id;
        var update = req.body;

        User.findByIdAndUpdate(userId,update,{new:true})
        .then(userUpdate => {
            console.log("User updated");
            return res.status(200).send({userUpdate});
        }).catch(error => {
            console.error("Error updating document:", error);
            return res.status(500).send({ message: 'Error updating user' });
        });
    },
    delete_user:function(req,res){
        var userId = req.params.id;

        User.findByIdAndDelete(userId)
        .then(userDeleted => {
            console.log("Deleted user");
            return res.status(200).send({userDeleted});
        }).catch(error => {
            console.error("Error deleting user:", error);
            return res.status(500).send({ message: 'Error deleting user' });
        });
    },
    get_user:function(req,res){
        var userId = req.params.id;
        User.findOne({_id: userId}).select('email username type').then(userFound => {
            if(!userFound){
                console.log("User does not exist");
                return res.status(404).send({message: 'User does not exist'});
            }else{
                console.log("User found");
                return res.status(200).send({userFound});
            }

        }).catch(error => {
            console.log("Error finding user",error);
            return res.status(500).send({ message: 'Error finding the user' });
        });
    }
    
};




module.exports = controller;