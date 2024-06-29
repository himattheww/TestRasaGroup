import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const HistoryTable = () => {
  const histories = [
    { id: 1, bookId: '1', studentId: '1', borrowDate: '2023-01-01', returnDate: '2023-01-15' },
    { id: 2, bookId: '2', studentId: '2', borrowDate: '2023-02-01', returnDate: '2023-02-15' },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Book ID</TableCell>
            <TableCell>Student ID</TableCell>
            <TableCell>Borrow Date</TableCell>
            <TableCell>Return Date</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {histories.map((history) => (
            <TableRow key={history.id}>
              <TableCell>{history.bookId}</TableCell>
              <TableCell>{history.studentId}</TableCell>
              <TableCell>{history.borrowDate}</TableCell>
              <TableCell>{history.returnDate}</TableCell>
              <TableCell>
                <IconButton color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton color="secondary">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HistoryTable;
