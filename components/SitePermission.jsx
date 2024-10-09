import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import SitePermissionForm from "./SitePermissionForm";

const SitePermission = () => {
  return (
    <>
      <Box px={5} py={2}>
        <Box className="d-flex justify-content-between">
          <Typography variant="body2" className="text-primary">
            Manage Site Permission or invite others to collaborate
          </Typography>
          <Button variant="contained">Share Site</Button>
        </Box>
        <SitePermissionForm label="Site owners" />
        <SitePermissionForm label="Site Member" />
        <SitePermissionForm label="Site Visitor" />
      </Box>
    </>
  );
};

export default SitePermission;
