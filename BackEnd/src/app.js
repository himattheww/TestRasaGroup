const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const bookRoutes = require('./routes/bookRoutes');
const studentRoutes = require('./routes/studentRoutes');
const stockRoutes = require('./routes/stockRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const historyRoutes = require('./routes/historyRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/books', bookRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/stocks', stockRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/histories', historyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
