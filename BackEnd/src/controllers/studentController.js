// src/controllers/studentController.js
const pool = require('../config/db');

// Get all students
const getAllStudents = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM mastermahasiswa');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new student
const createStudent = async (req, res) => {
  const { name, email } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO mastermahasiswa (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllStudents,
  createStudent,
};
