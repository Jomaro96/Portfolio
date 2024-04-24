var express = require('express');

var DocumentController = require('../controllers/document');

var router = express.Router();

///Middleware para imagenes
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir:'./uploads'})
var multipartMiddlewaref = multipart({uploadDir:'./files'})
///API routes
router.post('/add_document',DocumentController.add_document);
router.put('/update_document/:id?',DocumentController.update_document);
router.delete('/delete_document/:id?',DocumentController.delete_document);
router.get('/get_documents/',DocumentController.get_documents);
router.get('/get_document/:id?',DocumentController.get_document);
router.post('/upload_thumbnail/:id?',multipartMiddleware, DocumentController.upload_thumbnail);
router.post('/upload_file/:id?',multipartMiddlewaref, DocumentController.upload_file);
router.get('/get_thumbnail/:file',DocumentController.get_thumbnail);
router.get('/get_file/:file',DocumentController.get_file);
module.exports = router;