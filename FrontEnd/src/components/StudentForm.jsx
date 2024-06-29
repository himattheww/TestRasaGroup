import React, { useState } from 'react';
import { TextField, Button, Box, Paper } from '@mui/material';

const StudentForm = () => {
  const [student, setStudent] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kirim data ke backend
  };

  return (
    <Paper sx={{ p: 3, mb: 4 }}>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={student.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={student.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </Paper>
  );
};

export default StudentForm;
