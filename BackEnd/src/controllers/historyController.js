// src/controllers/historyController.js
const pool = require('../config/db');

// Get all history items
const getAllHistory = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM historypeminjaman');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new history item
const createHistoryItem = async (req, res) => {
  const { bookid, studentid, borrowdate, returndate } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO historypeminjaman (bookid, studentid, borrowdate, returndate) VALUES ($1, $2, $3, $4) RETURNING *',
      [bookid, studentid, borrowdate, returndate]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllHistory,
  createHistoryItem,
};
