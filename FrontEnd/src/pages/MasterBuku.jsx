import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import api from '../services/api';
import BookForm from '../components/BookForm';
import BookTable from '../components/BookTable';

const MasterBuku = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.get('/books').then((response) => {
      setBooks(response.data);
    });
  }, []);

  const addBook = (book) => {
    api.post('/books', book).then((response) => {
      setBooks([...books, response.data]);
    });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Master Buku
      </Typography>
      <BookForm addBook={addBook} />
      <BookTable books={books} />
    </Container>
  );
};

export default MasterBuku;
