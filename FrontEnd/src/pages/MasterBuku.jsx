import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import BookForm from '../components/BookForm';
import BookTable from '../components/BookTable';

const MasterBuku = () => {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Master Buku
        </Typography>
        <BookForm />
        <BookTable />
      </Box>
    </Container>
  );
};

export default MasterBuku;
