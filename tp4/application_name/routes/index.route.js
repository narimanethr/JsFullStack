const express = require('express');
const router = express.Router();

var indexController = require('../controllers/index.controller');

/* GET home page. */
router.get('/', indexController.home );
router.get('/bookspa', indexController.bookSPA );

module.exports = router;

