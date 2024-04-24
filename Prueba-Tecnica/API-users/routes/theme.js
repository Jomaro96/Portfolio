var express = require('express');

var ThemeController = require('../controllers/theme');

var router = express.Router();


///API routes
router.post('/add_theme',ThemeController.add_theme);
router.put('/update_theme/:id?',ThemeController.update_theme);
router.delete('/delete_theme/:id?',ThemeController.delete_theme);
router.get('/get_themes/',ThemeController.get_themes);
router.get('/get_themes_cat/:category?',ThemeController.get_themes_cat);
router.get('/get_theme/:id?',ThemeController.get_theme);
module.exports = router;