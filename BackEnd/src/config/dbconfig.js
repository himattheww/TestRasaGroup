const sql = require('mssql');

// Konfigurasi koneksi SQL Server
const dbConfig = {
    user: 'username',
    password: 'password',
    server: 'server_name',
    database: 'library_db',
    options: {
        encrypt: true, // Gunakan true jika menggunakan Azure
        enableArithAbort: true,
    },
};

const poolPromise = new sql.ConnectionPool(dbConfig)
    .connect()
    .then(pool => {
        console.log('Connected to SQL Server');
        return pool;
    })
    .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

module.exports = {
    sql, poolPromise
};
