import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import HistoryTable from '../components/HistoryTable';

const HistoryPeminjaman = () => {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          History Peminjaman
        </Typography>
        <HistoryTable />
      </Box>
    </Container>
  );
};

export default HistoryPeminjaman;
