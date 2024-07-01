import React from 'react';
import { AppBar, Toolbar, Typography,  Container, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HistoryIcon from '@mui/icons-material/History';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
      <Container>
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            Library App
          </Typography>
          <IconButton color="inherit" component={Link} to="/">
            <HomeIcon />
          </IconButton>
          <IconButton color="inherit" component={Link} to="/master-buku">
            <BookIcon />
          </IconButton>
          <IconButton color="inherit" component={Link} to="/master-mahasiswa">
            <PeopleIcon />
          </IconButton>
          <IconButton color="inherit" component={Link} to="/rak-inventory">
            <InventoryIcon />
          </IconButton>
          <IconButton color="inherit" component={Link} to="/transaksi-peminjaman">
            <AssignmentIcon />
          </IconButton>
          <IconButton color="inherit" component={Link} to="/history-peminjaman">
            <HistoryIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
