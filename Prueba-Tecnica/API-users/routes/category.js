var express = require('express');

var CategoryController = require('../controllers/category');

var router = express.Router();


///API routes
router.post('/add_category',CategoryController.add_category);
router.put('/update_category/:id?',CategoryController.update_category);
router.delete('/delete_category/:id?',CategoryController.delete_category);
router.get('/get_categories/',CategoryController.get_categories);
router.get('/get_category/:id?',CategoryController.get_category);
module.exports = router;