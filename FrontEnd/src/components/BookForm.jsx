import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const BookForm = ({ addBook }) => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    stock: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(book);
    setBook({ title: '', author: '', stock: 0 });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
  );
};

export default BookForm;
