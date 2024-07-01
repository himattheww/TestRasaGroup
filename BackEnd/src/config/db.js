// src/config/db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'libraryapp',
  password: 'admin123',
  port: 5432,
});

module.exports = pool;
