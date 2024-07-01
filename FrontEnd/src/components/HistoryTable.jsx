import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import moment from "moment";

const HistoryTable = ({ history }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>BookID</TableCell>
            <TableCell>StudentID</TableCell>
            <TableCell>BorrowDate</TableCell>
            <TableCell>ReturnDate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.map((entry) => (
            <TableRow key={entry.historyid}>
              <TableCell>{entry.bookid}</TableCell>
              <TableCell>{entry.studentid}</TableCell>
              <TableCell>
                {moment(entry.borrowdate).format("YYYY-MM-DD")}
              </TableCell>
              <TableCell>
                {moment(entry.returndate).format("YYYY-MM-DD")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HistoryTable;
