// src/controllers/bookController.js
const pool = require('../config/db');

// Get all books
const getAllBooks = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM masterbuku');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new book
const createBook = async (req, res) => {
  const { title, author, stock } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO masterbuku (title, author, stock) VALUES ($1, $2, $3) RETURNING *',
      [title, author, stock]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllBooks,
  createBook,
};
