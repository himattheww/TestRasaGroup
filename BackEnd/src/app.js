// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const studentRoutes = require('./routes/studentRoutes');
const stockRoutes = require('./routes/stockRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const historyRoutes = require('./routes/historyRoutes');
var cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());
app.use('/api/books', bookRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/stock', stockRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/history', historyRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
