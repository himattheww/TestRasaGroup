import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import api from '../services/api';
import HistoryTable from '../components/HistoryTable';

const HistoryPeminjaman = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    api.get('/history').then((response) => {
      setHistory(response.data);
    });
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        History Peminjaman
      </Typography>
      <HistoryTable history={history} />
    </Container>
  );
};

export default HistoryPeminjaman;
