const { sql, poolPromise } = require('../config/dbconfig');

// Mendapatkan semua stok buku
const getStocks = async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM Stocks');
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Menambahkan stok buku baru
const addStock = async (req, res) => {
    try {
        const { bookId, location, quantity } = req.body;
        const pool = await poolPromise;
        const result = await pool.request()
            .input('BookId', sql.Int, bookId)
            .input('Location', sql.NVarChar, location)
            .input('Quantity', sql.Int, quantity)
            .query('INSERT INTO Stocks (BookId, Location, Quantity) VALUES (@BookId, @Location, @Quantity)');
        res.status(201).send('Stock added successfully');
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = {
    getStocks,
    addStock
};
