var express = require('express');

var UserController = require('../controllers/user');

var router = express.Router();


///API routes
router.post('/add_user',UserController.add_user);
router.post('/login',UserController.login);
router.put('/update_user/:id?',UserController.update_user);
router.delete('/delete_user/:id?',UserController.delete_user);
router.get('/get_user/:id?',UserController.get_user);
module.exports = router;