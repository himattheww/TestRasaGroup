const { sql, poolPromise } = require('../config/dbconfig');

// Mendapatkan semua buku
const getBooks = async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM Books');
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Menambahkan buku baru
const addBook = async (req, res) => {
    try {
        const { title, author, stock } = req.body;
        const pool = await poolPromise;
        const result = await pool.request()
            .input('Title', sql.NVarChar, title)
            .input('Author', sql.NVarChar, author)
            .input('Stock', sql.Int, stock)
            .query('INSERT INTO Books (Title, Author, Stock) VALUES (@Title, @Author, @Stock)');
        res.status(201).send('Book added successfully');
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = {
    getBooks,
    addBook
};
