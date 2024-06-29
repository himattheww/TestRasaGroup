const { sql, poolPromise } = require('../config/dbconfig');

// Mendapatkan semua transaksi
const getTransactions = async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM Transactions');
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Menambahkan transaksi peminjaman baru
const addTransaction = async (req, res) => {
    try {
        const { bookId, studentId, borrowDate, returnDate } = req.body;
        const pool = await poolPromise;
        const result = await pool.request()
            .input('BookId', sql.Int, bookId)
            .input('StudentId', sql.Int, studentId)
            .input('BorrowDate', sql.Date, borrowDate)
            .input('ReturnDate', sql.Date, returnDate)
            .query('INSERT INTO Transactions (BookId, StudentId, BorrowDate, ReturnDate) VALUES (@BookId, @StudentId, @BorrowDate, @ReturnDate)');
        res.status(201).send('Transaction added successfully');
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = {
    getTransactions,
    addTransaction
};
