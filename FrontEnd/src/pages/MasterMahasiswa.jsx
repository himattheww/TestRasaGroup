import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import StudentForm from '../components/StudentForm';
import StudentTable from '../components/StudentTable';

const MasterMahasiswa = () => {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Master Mahasiswa
        </Typography>
        <StudentForm />
        <StudentTable />
      </Box>
    </Container>
  );
};

export default MasterMahasiswa;
