import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import api from '../services/api';
import StudentForm from '../components/StudentForm';
import StudentTable from '../components/StudentTable';

const MasterMahasiswa = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    api.get('/students').then((response) => {
      setStudents(response.data);
    });
  }, []);

  const addStudent = (student) => {
    api.post('/students', student).then((response) => {
      setStudents([...students, response.data]);
    });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Master Mahasiswa
      </Typography>
      <StudentForm addStudent={addStudent} />
      <StudentTable students={students} />
    </Container>
  );
};

export default MasterMahasiswa;
