import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import StockForm from '../components/StockForm';
import StockTable from '../components/StockTable';

const RakInventory = () => {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Rak/Inventory
        </Typography>
        <StockForm />
        <StockTable />
      </Box>
    </Container>
  );
};

export default RakInventory;
