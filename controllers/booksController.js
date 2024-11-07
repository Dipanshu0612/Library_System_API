const db = require('../db/knexfile');

const getAllBooks = async (req, res) => {
  try {
    const books = await db('books').select('*');
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching books!' });
  }
};

const getBookByIsbn = async (req, res) => {
  const { isbn } = req.params;
  try {
    const book = await db('books').where('isbn', isbn).first();
    if (!book) {
      return res.status(404).json({ message: `No Book found with ISBN: ${isbn}` });
    }
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching book!' });
  }
};

const addBook = async (req, res) => {
  const { isbn, title, author, genre } = req.body;
  if (!isbn || !title || !author || !genre) {
    return res.status(400).json({ message: 'All fields (isbn, title, author, genre) are required!' });
  }

  try {
    await db('books').insert({ isbn, title, author, genre });
    res.status(201).json({ message: 'Book added!' });
  } catch (err) {
    res.status(500).json({ message: 'Error adding book!' });
  }
};

const updateBook = async (req, res) => {
  const { isbn } = req.params;
  const { title, author, genre } = req.body;

  if (!title || !author || !genre) {
    return res.status(400).json({ message: 'All fields (title, author, genre) are required!' });
  }

  try {
    const updated = await db('books').where('isbn', isbn).update({ title, author, genre });
    if (updated === 0) {
      return res.status(404).json({ message: `No Book found with ISBN: ${isbn}` });
    }
    res.status(200).json({ message: 'Book updated successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating book!' });
  }
};

const deleteBook = async (req, res) => {
  const { isbn } = req.params;

  try {
    const deleted = await db('books').where('isbn', isbn).del();
    if (deleted === 0) {
      return res.status(404).json({ message: `No Book found with ISBN: ${isbn}` });
    }
    res.status(200).json({ message: 'Book deleted successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting book!' });
  }
};

module.exports = {
  getAllBooks,
  getBookByIsbn,
  addBook,
  updateBook,
  deleteBook
};
