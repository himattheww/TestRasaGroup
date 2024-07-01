// src/controllers/transactionController.js
const pool = require('../config/db');

// Get all transactions
const getAllTransactions = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM transaksipeminjaman');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new transaction
const createTransaction = async (req, res) => {
  const { bookid, studentid, borrowdate, returndate } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO transaksipeminjaman (bookid, studentid, borrowdate, returndate) VALUES ($1, $2, $3, $4) RETURNING *',
      [bookid, studentid, borrowdate, returndate]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllTransactions,
  createTransaction,
};
