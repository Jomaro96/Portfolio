var express = require('express');

var ProjectController = require('../controllers/project');

var router = express.Router();

///Middleware para imagenes
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir:'./uploads'})

///Rutas de mi projecto
router.get('/home',ProjectController.home);
router.post('/test',ProjectController.test);
router.post('/save_project',ProjectController.save_project);
router.get('/get_project/:id?',ProjectController.get_project);
router.get('/get_projects',ProjectController.get_projects);
router.put('/update_project/:id?',ProjectController.update_project);
router.delete('/delete_project/:id?',ProjectController.delete_project);
router.post('/upload_image/:id?',multipartMiddleware, ProjectController.uploadImage);
router.get('/get-image/:file',ProjectController.getImageFile);
module.exports = router;