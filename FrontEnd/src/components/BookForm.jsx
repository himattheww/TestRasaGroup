import React, { useState } from 'react';
import { TextField, Button, Box, Paper } from '@mui/material';

const BookForm = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    stock: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook, 
      [name]: value 
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
          label="Title"
          name="title"
          value={book.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Author"
          name="author"
          value={book.author}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Stock"
          name="stock"
          value={book.stock}
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

export default BookForm;
