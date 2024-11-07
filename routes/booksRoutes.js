const express = require('express');
const router = express.Router();
const {
  getAllBooks,
  getBookByIsbn,
  addBook,
  updateBook,
  deleteBook
} = require('../controllers/booksController');

router.get('/', getAllBooks);
router.get('/:isbn', getBookByIsbn);
router.post('/', addBook);
router.put('/:isbn', updateBook);
router.delete('/:isbn', deleteBook);

module.exports = router;
