import React, { useState } from 'react';
import { TextField, Button, Box, Paper } from '@mui/material';

const TransactionForm = () => {
  const [transaction, setTransaction] = useState({
    bookId: '',
    studentId: '',
    borrowDate: '',
    returnDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction((prevTransaction) => ({
      ...prevTransaction,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kirim data ke backend
  };

  return (
    <Paper sx={{ p: 3, mb: 4 }}>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Book ID"
          name="bookId"
          value={transaction.bookId}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Student ID"
          name="studentId"
          value={transaction.studentId}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Borrow Date"
          name="borrowDate"
          value={transaction.borrowDate}
          onChange={handleChange}
          fullWidth
          margin="normal"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Return Date"
          name="returnDate"
          value={transaction.returnDate}
          onChange={handleChange}
          fullWidth
          margin="normal"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </Paper>
  );
};

export default TransactionForm;
