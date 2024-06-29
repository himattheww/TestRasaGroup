import React, { useState } from 'react';
import { TextField, Button, Box, Paper } from '@mui/material';

const StockForm = () => {
  const [stock, setStock] = useState({
    bookId: '',
    location: '',
    quantity: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStock((prevStock) => ({
      ...prevStock,
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
          value={stock.bookId}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Location"
          name="location"
          value={stock.location}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Quantity"
          name="quantity"
          value={stock.quantity}
          onChange={handleChange}
          fullWidth
          margin="normal"
          type="number"
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </Paper>
  );
};

export default StockForm;
