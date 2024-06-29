import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import TransactionForm from '../components/TransactionForm';

const TransaksiPeminjaman = () => {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Transaksi Peminjaman
        </Typography>
        <TransactionForm />
      </Box>
    </Container>
  );
};

export default TransaksiPeminjaman;
