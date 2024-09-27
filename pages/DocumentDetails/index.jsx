import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { KeyboardArrowRight, Search } from "@mui/icons-material";
import {
  Box,
  InputAdornment,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import AdminHeader from "@/components/AdminHeader";
import AdminMenu from "@/components/AdminMenu";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { ExitToApp } from "@mui/icons-material";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  ".MuiTypography-root": {
    width: "100%",
    textAlign: "center",
  },
}));

const SwiperDetails = () => {
  const router = useRouter();
  const { label } = router.query;
  const countries = [
    "All",
    "Kenya",
    "Uganda",
    "Tanzania",
    "Ethiopia",
    "Rwanda",
  ];

  const tableColumn = [
    "Country",
    "Provider Name",
    "Provider Id",
    "Total Documents",
    "Document Proceed",
    "",
  ];
  return (
    <>
      <AdminHeader />
      <div className="container">
        <AdminMenu label={label} path={router.pathname} />
        <Box bgcolor="rgba(57, 64, 154, 0.04)" p={3} borderRadius={2}>
          <div className="flex-between">
            <span className="document-label">{label}</span>
            <p className="document-label">
              <span>Total</span>
              <span>564325</span>
            </p>
          </div>
          <div className="items-right">
            <TextField
              id="input-with-icon-textfield"
              placeholder="Search"
              sx={{ bgcolor: "white" }}
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
            <Form.Select
              className="form-elements"
              aria-label="Select Country"
              style={{ paddingRight: "5rem" }}
            >
              <option disabled defaultValue="">
                Country
              </option>
              {countries.map((country) => (
                <option key={country} href="#/action-1">
                  {country}
                </option>
              ))}
            </Form.Select>

            <Button variant="primary" className="form-elements form-button">
              Search
            </Button>
            <Button variant="primary" className="form-elements form-button">
              Export File <ExitToApp />
            </Button>
          </div>
          <div className="table-responsive">
            <StyledBox mt={3} mb={2}>
              {tableColumn.map((column, index) => (
                <Typography
                  className={
                    tableColumn.length - 1 === index ? "invisible-element" : ""
                  }
                  variant="subtitle2"
                  key={index}
                  color="#39409A"
                >
                  {column}
                </Typography>
              ))}
            </StyledBox>
            <Link href={"/ProviderDetails"} style={{ textDecoration: "none" }}>
              <StyledBox
                component={Paper}
                py={2}
                my={1}
                className="linked-document"
              >
                <Typography variant="body2">USA</Typography>
                <Typography variant="body2">ABC Healthcare</Typography>
                <Typography variant="body2">25598</Typography>
                <Typography variant="body2">5632</Typography>
                <Typography variant="body2">3623</Typography>
                <Typography variant="body2" className="invisible-element">
                  <KeyboardArrowRight />
                </Typography>
              </StyledBox>
            </Link>
            <Link href={"/"} style={{ textDecoration: "none" }}>
              <StyledBox
                component={Paper}
                py={2}
                my={1}
                className="linked-document"
              >
                <Typography variant="body2">USA</Typography>
                <Typography variant="body2">ABC Healthcare</Typography>
                <Typography variant="body2">25598</Typography>
                <Typography variant="body2">5632</Typography>
                <Typography variant="body2">3623</Typography>
                <Typography variant="body2" className="invisible-element">
                  <KeyboardArrowRight />
                </Typography>
              </StyledBox>
            </Link>
            <Link href={"/"} style={{ textDecoration: "none" }}>
              <StyledBox
                component={Paper}
                py={2}
                my={1}
                className="linked-document"
              >
                <Typography variant="body2">USA</Typography>
                <Typography variant="body2">ABC Healthcare</Typography>
                <Typography variant="body2">25598</Typography>
                <Typography variant="body2">5632</Typography>
                <Typography variant="body2">3623</Typography>
                <Typography variant="body2" className="invisible-element">
                  <KeyboardArrowRight />
                </Typography>
              </StyledBox>
            </Link>
            <Link href={"/"} style={{ textDecoration: "none" }}>
              <StyledBox
                component={Paper}
                py={2}
                my={1}
                className="linked-document"
              >
                <Typography variant="body2">USA</Typography>
                <Typography variant="body2">ABC Healthcare</Typography>
                <Typography variant="body2">25598</Typography>
                <Typography variant="body2">5632</Typography>
                <Typography variant="body2">3623</Typography>
                <Typography variant="body2" className="invisible-element">
                  <KeyboardArrowRight />
                </Typography>
              </StyledBox>
            </Link>
          </div>
        </Box>

        <Footer />
      </div>
    </>
  );
};

export default SwiperDetails;
