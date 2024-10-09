import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const RecycleBin = () => {
  const tableData = [
    {
      name: "Dashboard Admin.aspx",
      dateDeleted: "4/10/2024, 10:19 AM",
      deletedBy: "jonhnyangesa73@gmail.com",
      createdBy: "jonhnyangesa73@gmail.com",
      originalLocation: "Site Assets",
    },
    {
      name: "EDi  Data Dample MP Shaha_Final 5.pdf",
      dateDeleted: "4/10/2024, 10:11 AM",
      deletedBy: "jonhnyangesa73@gmail.com",
      createdBy: "jonhnyangesa73@gmail.com",
      originalLocation: "Site Assets/ customer code",
    },
    {
      name: "AAR-INV 2023559640.pdf",
      dateDeleted: "4/10/2024, 12:43 AM",
      deletedBy: "jonhnyangesa73@gmail.com",
      createdBy: "jonhnyangesa73@gmail.com",
      originalLocation: "Site Assets",
    },
    {
      name: "4000115580.pdf",
      dateDeleted: "4/10/20241, 2:43 AM",
      deletedBy: "jonhnyangesa73@gmail.com",
      createdBy: "jonhnyangesa73@gmail.com",
      originalLocation: "Site Assets",
    },
    {
      name: "AAR-INV 2023559640.pdf",
      dateDeleted: "4/10/2024, 10:19 AM",
      deletedBy: "jonhnyangesa73@gmail.com",
      createdBy: "jonhnyangesa73@gmail.com",
      originalLocation: "Site Assets",
    },
  ];
  return (
    <>
      <Box px={2} py={3}>
        <Box textAlign="right">
          <Button variant="contained">Clear All</Button>
        </Box>
        <TableContainer component={Paper} className="mt-3 py-5">
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow className="th-primary">
                <TableCell>Name</TableCell>
                <TableCell>Date Deleted</TableCell>
                <TableCell>Deleted by</TableCell>
                <TableCell>Created by</TableCell>
                <TableCell>Original Location</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row, index) => {
                return (
                  <TableRow
                    key={row.name + index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.dateDeleted}</TableCell>
                    <TableCell>{row.deletedBy}</TableCell>
                    <TableCell>{row.createdBy}</TableCell>
                    <TableCell>{row.originalLocation}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default RecycleBin;
