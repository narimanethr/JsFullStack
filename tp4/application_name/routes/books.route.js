const express = require('express');
const router = express.Router();

// import controller for books
const booksController = require('../controllers/books.controller');

// associate controller method to path and method
router.get('/', booksController.list);

router.get('/then', booksController.listThen);

router.get('/one', booksController.oneBook);
router.get('/dune', booksController.dune);
router.get('/after/:year/v1', booksController.booksAfter2000v1);
router.get('/after/:year/v2', booksController.booksAfter2000v2);
router.get('/details/:bookId', booksController.details );


// path '/books/create' can be accessed using GET (for view) or POST (for book creation)
router.get('/create', booksController.createForm );
router.post('/create', booksController.create );

// path '/books/adddetails/:bookId' can be accessed using GET (for book details view) or POST (for book details creation)
router.get('/adddetails/:bookId', booksController.addDetailsForm );
router.post('/adddetails/:bookId', booksController.addDetails );

// use method PUT for an update request
router.get('/update/:bookId', booksController.updateForm );
router.put('/update/:bookId', booksController.update );

// remove document
router.get('/delete/:bookId', booksController.delete );


// export books route
module.exports = router;

