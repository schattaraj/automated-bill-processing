import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const SitePermissionForm = ({ label }) => {
  return (
    <Box mt={2}>
      <Typography variant="body2" className="my-3">
        {label}
      </Typography>
      <Paper elevation={1} className="py-3 px-3">
        <Form>
          <Form.Group as={Row} className="py-3">
            <Col lg={4} md={6} sm={12}>
              <Form.Check
                type="switch"
                id="custom-switch"
                label="All Control"
              />
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Upload Documents"
              />
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Share Documents"
              />
            </Col>
            <Col lg={4} md={6} sm={12} className="mt-3">
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Create Folders"
              />
            </Col>
            <Col lg={4} md={6} sm={12} className="mt-3">
              <Form.Check
                type="switch"
                id="custom-switch"
                label="View Documents"
              />
            </Col>
            <Col lg={4} md={6} sm={12} className="mt-3">
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Download Documents"
              />
            </Col>
          </Form.Group>
          {/* <Form.Group as={Row} className="py-3">
            
          </Form.Group> */}
        </Form>
      </Paper>
    </Box>
  );
};

export default SitePermissionForm;
