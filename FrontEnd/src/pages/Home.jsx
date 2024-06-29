import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom>
          Welcome to Library App
        </Typography>
        <Typography variant="body1">
          This is the home page.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
