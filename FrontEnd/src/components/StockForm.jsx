import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const StockForm = ({ addStock }) => {
  const [stock, setStock] = useState({
    bookid: '',
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
    addStock(stock);
    setStock({ bookid: '', location: '', quantity: 0 });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <TextField
        label="Book ID"
        name="bookid"
        value={stock.bookid}
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
  );
};

export default StockForm;
