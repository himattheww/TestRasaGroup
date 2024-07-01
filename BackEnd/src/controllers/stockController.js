// src/controllers/stockController.js
const pool = require('../config/db');

// Get all stock items
const getAllStock = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM rakinventory');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new stock item
const createStockItem = async (req, res) => {
  const { bookid, location, quantity } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO rakinventory (bookid, location, quantity) VALUES ($1, $2, $3) RETURNING *',
      [bookid, location, quantity]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllStock,
  createStockItem,
};
