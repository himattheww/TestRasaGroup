import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import api from '../services/api';
import StockForm from '../components/StockForm';
import StockTable from '../components/StockTable';

const RakInventory = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    api.get('/stock').then((response) => {
      setStocks(response.data);
    });
  }, []);

  const addStock = (stock) => {
    api.post('/stock', stock).then((response) => {
      setStocks([...stocks, response.data]);
    });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Rak/Inventory
      </Typography>
      <StockForm addStock={addStock} />
      <StockTable stocks={stocks} />
    </Container>
  );
};

export default RakInventory;
