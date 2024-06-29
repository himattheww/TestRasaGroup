const { sql, poolPromise } = require('../config/dbconfig');

// Mendapatkan semua riwayat peminjaman
const getHistories = async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM Histories');
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Menambahkan riwayat peminjaman baru
const addHistory = async (req, res) => {
    try {
        const { bookId, studentId, borrowDate, returnDate } = req.body;
        const pool = await poolPromise;
        const result = await pool.request()
            .input('BookId', sql.Int, bookId)
            .input('StudentId', sql.Int, studentId)
            .input('BorrowDate', sql.Date, borrowDate)
            .input('ReturnDate', sql.Date, returnDate)
            .query('INSERT INTO Histories (BookId, StudentId, BorrowDate, ReturnDate) VALUES (@BookId, @StudentId, @BorrowDate, @ReturnDate)');
        res.status(201).send('History added successfully');
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = {
    getHistories,
    addHistory
};
