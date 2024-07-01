import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const TransactionForm = ({ addTransaction }) => {
  const [transaction, setTransaction] = useState({
    bookid: '',
    studentid: '',
    borrowdate: '',
    returndate: '',
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
    addTransaction(transaction);
    setTransaction({ bookid: '', studentid: '', borrowdate: '', returndate: '' });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <TextField
        label="Book ID"
        name="bookid"
        value={transaction.bookid}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Student ID"
        name="studentid"
        value={transaction.studentid}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Borrow Date"
        name="borrowdate"
        value={transaction.borrowdate}
        onChange={handleChange}
        fullWidth
        margin="normal"
        type="date"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Return Date"
        name="returndate"
        value={transaction.returndate}
        onChange={handleChange}
        fullWidth
        margin="normal"
        type="date"
        InputLabelProps={{ shrink: true }}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
};

export default TransactionForm;
