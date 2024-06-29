const { sql, poolPromise } = require('../config/dbconfig');

// Mendapatkan semua mahasiswa
const getStudents = async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM Students');
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Menambahkan mahasiswa baru
const addStudent = async (req, res) => {
    try {
        const { name, nim } = req.body;
        const pool = await poolPromise;
        const result = await pool.request()
            .input('Name', sql.NVarChar, name)
            .input('NIM', sql.NVarChar, nim)
            .query('INSERT INTO Students (Name, NIM) VALUES (@Name, @NIM)');
        res.status(201).send('Student added successfully');
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = {
    getStudents,
    addStudent
};
