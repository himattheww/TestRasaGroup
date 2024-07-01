import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import api from '../services/api';
import TransactionForm from '../components/TransactionForm';

const TransaksiPeminjaman = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api.get('/transactions').then((response) => {
      setTransactions(response.data);
    });
  }, []);

  const addTransaction = (transaction) => {
    api.post('/transactions', transaction).then((response) => {
      setTransactions([...transactions, response.data]);
    });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Transaksi Peminjaman
      </Typography>
      <TransactionForm addTransaction={addTransaction} />
    </Container>
  );
};

export default TransaksiPeminjaman;
