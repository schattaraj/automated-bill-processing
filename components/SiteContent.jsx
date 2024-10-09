import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const SiteContent = () => {
  const tableData = [
    {
      name: "Dashboard Admin.aspx",
      views: 250,
      modified: "30 days ago",
      modifiedBy: "jonhnyangesa73@gmail.com",
    },
    {
      name: "EDi Data Sample MP.pdf",
      views: 200,
      modified: "10/5/2023",
      modifiedBy: "jonhnyangesa73@gmail.com",
    },
    {
      name: "AAR-INV.pdf",
      views: 110,
      modified: "31 days ago",
      modifiedBy: "jonhnyangesa73@gmail.com",
    },
    {
      name: "4000115580.pdf",
      views: 40,
      modified: "30 days ago",
      modifiedBy: "jonhnyangesa73@gmail.com",
    },
    {
      name: "AAR-INV.pdf",
      views: 10,
      modified: "3/18/2024",
      modifiedBy: "jonhnyangesa73@gmail.com",
    },
  ];
  const maxViews = Math.max(...tableData.map((row) => row.views));
  return (
    <>
      <Box px={5} py={3}>
        <Typography fontWeight={600}>Site Usage</Typography>
        <Box display="flex" justifyContent="space-between" gap={5} my={4}>
          <Card className="w-100 d-flex py-4 px-4 justify-content-between">
            <Box
              component={CardContent}
              className="d-flex flex-column justify-content-between py-0"
            >
              <Typography variant="body2">Site View</Typography>
              <Typography variant="h5">11</Typography>
              <Typography variant="subtitle2" color="red">
                -35% over the previous week
              </Typography>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 105 }}
              image="/icons/destination.svg"
              alt=""
            />
          </Card>
          <Card className="w-100 d-flex py-4 px-4 justify-content-between">
            <Box
              component={CardContent}
              className="d-flex flex-column justify-content-between py-0"
            >
              <Typography variant="body2">New Items</Typography>
              <Typography variant="h5">0</Typography>
              <Typography variant="subtitle2" color="red">
                No Items Add in previous week
              </Typography>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 105 }}
              image="/icons/add.svg"
              alt=""
            />
          </Card>
        </Box>
        <Typography fontWeight={600} className="mb-2">
          Trending
        </Typography>
        <Typography fontWeight={600} className="mb-3">
          Most View files during the weeks
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow className="th-primary">
                <TableCell>Name</TableCell>
                <TableCell>Views</TableCell>
                <TableCell>Modified</TableCell>
                <TableCell>Modified By</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row, index) => {
                const viewPercentage = (row.views / maxViews) * 100;
                return (
                  <TableRow
                    key={row.name + index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>
                      <div
                        className="views-bar"
                        style={{ width: viewPercentage }}
                      ></div>
                    </TableCell>
                    <TableCell>{row.modified}</TableCell>
                    <TableCell>{row.modifiedBy}</TableCell>
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

export default SiteContent;
SiteContent;
