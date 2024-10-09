import { Clear, DriveFolderUploadOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const Account = () => {
  return (
    <>
      <Paper sx={{ py: 2, px: 5 }}>
        <Typography mb={2}>Profile Picture</Typography>
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar
            src={"/images/profile.png"}
            sx={{ height: 132, width: 132, mr: 4 }}
            alt=""
          />
          <Box>
            <Button variant="contained" sx={{ px: 2, py: 1.5 }}>
              <DriveFolderUploadOutlined sx={{ mr: 1 }} /> Upload
            </Button>
          </Box>
          <Box>
            <Button variant="outlined" sx={{ px: 2, py: 1.5 }}>
              <Clear sx={{ mr: 1 }} />
              Remove
            </Button>
          </Box>
        </Box>
        <Form>
          <Row className="mt-4">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Row>
          <Row className="mt-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email Id</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Row>
          <Row className="mt-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Birth Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Work As</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Row>
        </Form>
      </Paper>
      <Paper sx={{ mt: 3, py: 2, px: 5 }}>
        <Typography mb={1}>Username And Password</Typography>
        <Typography variant="subtitle2">
          Create, save, and manage your passwords so you can easily sign in to
          sites
        </Typography>
        <Form style={{ width: "50%" }}>
          <Col>
            <Form.Group className="mt-3" as={Row} controlId="formGridEmail">
              <Form.Label>Set username</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mt-3" as={Row} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mt-3" as={Row} controlId="formGridPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
        </Form>
      </Paper>

      <Box mt={3} textAlign="right">
        <Button variant="contained" sx={{ mt: 3, ml: "auto", py: 1.5 }}>
          Save
        </Button>
        <Button variant="contained" sx={{ mt: 3, ml: 1, py: 1.5 }}>
          Cancel
        </Button>
      </Box>
    </>
  );
};

export default Account;
