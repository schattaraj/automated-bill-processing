import { Box, Typography } from "@mui/material";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const Alerts = () => {
  return (
    <>
      <Box px={5} py={2}>
        <Typography>Get Alerts when items Change</Typography>
        <Form>
          <Form.Group
            className="mt-5 justify-content-between align-items-center"
            as={Row}
            controlId="formGridEmail"
          >
            <Form.Label column sm={6}>
              <Typography>Alert Tittle</Typography>
              <Typography variant="subtitle2">
                Enter the title for this alert. This is included in the subject
                of the notification sent for this alert
              </Typography>
            </Form.Label>
            <Col sm={6}>
              <Form.Control type="text" size="lg" />
            </Col>
          </Form.Group>
          <Form.Group
            className="mt-5 justify-content-between"
            as={Row}
            controlId="formGridEmail"
          >
            <Form.Label column sm={6}>
              <Typography>Delivery Method</Typography>
              <Typography variant="subtitle2">
                Specify how you want the alert delivered
              </Typography>
            </Form.Label>
            <Col sm={6}>
              <Form.Label>
                <Typography>Send me alerts by:</Typography>
              </Form.Label>
              <Form.Group>
                <Form.Check className="my-3" type="radio" label="Email" />
                <Form.Control type="email" />
                <Form.Check
                  className="my-3"
                  type="radio"
                  label="Text Message (SMS)"
                />
                <Form.Control type="text" />
                <Form.Check
                  className="my-3"
                  type="checkbox"
                  label="Send URL in text message(SMS)"
                />
              </Form.Group>
            </Col>
          </Form.Group>
          <Form.Group
            className="mt-5 justify-content-between"
            as={Row}
            controlId="formGridEmail"
          >
            <Form.Label column sm={6}>
              <Typography>Change Type</Typography>
              <Typography variant="subtitle2">
                Specify the type of changes that you want to be alerted to
              </Typography>
            </Form.Label>
            <Col sm={6}>
              <Form.Label>
                <Typography>Only send me alerts when:</Typography>
              </Form.Label>
              <Form.Group>
                <Form.Check
                  className="my-3"
                  type="radio"
                  label="All changes "
                />
                <Form.Check
                  className="my-3"
                  type="radio"
                  label="New Item are added"
                />
                <Form.Check
                  className="my-3"
                  type="radio"
                  label="Existing items are modified"
                />
                <Form.Check
                  className="my-3"
                  type="radio"
                  label="Item are deleted"
                />
              </Form.Group>
            </Col>
          </Form.Group>
          <Form.Group
            className="mt-5 justify-content-between"
            as={Row}
            controlId="formGridEmail"
          >
            <Form.Label column sm={6}>
              <Typography>Send Alert for these Changes</Typography>
              <Typography variant="subtitle2">
                Specify whether to filter alert based on specific criteria.You
                may also restrict your alerts to only include items that show in
                particular view{" "}
              </Typography>
            </Form.Label>
            <Col sm={6}>
              <Form.Label>
                <Typography>Send me an alert when:</Typography>
              </Form.Label>
              <Form.Group>
                <Form.Check
                  className="my-3"
                  type="radio"
                  label="Anything Changes"
                />
                <Form.Check
                  className="my-3"
                  type="radio"
                  label="Someone else changes a document"
                />
                <Form.Check
                  className="my-3"
                  type="radio"
                  label="Someone else changes a document created by me"
                />
                <Form.Check
                  className="my-3"
                  type="radio"
                  label="Someone else change a document last modified by me"
                />
                <Form.Check
                  className="my-3"
                  type="radio"
                  label="Someone else changes an item that appears in the following view"
                />
                <Form.Control type="text" size="lg" />
              </Form.Group>
            </Col>
          </Form.Group>
          <Form.Group
            className="mt-5 justify-content-between"
            as={Row}
            controlId="formGridEmail"
          >
            <Form.Label column sm={6}>
              <Typography>When to Send Alert</Typography>
              <Typography variant="subtitle2">
                Specify how frequently you want to be alerted,(mobile alert is
                only available for immediately send)
              </Typography>
            </Form.Label>
            <Col sm={6}>
              <Form.Label>
                <Typography>Send notification immediately</Typography>
              </Form.Label>
              <Form.Group>
                <Form.Check
                  className="my-3"
                  type="radio"
                  label="Send a daily summary"
                />
                <Form.Check
                  className="my-3"
                  type="radio"
                  label="Send a weekly summery"
                />
                <Form.Label className="my-3">
                  <Typography>Time</Typography>
                </Form.Label>
                <Form.Group as={Row} controlId="formGridState" className="my-3">
                  <Col sm={4}>
                    <Form.Select defaultValue="Day">
                      <option>Day</option>
                      <option>Sunday</option>
                      <option>Monday</option>
                      <option>Tuesday</option>
                      <option>Wednesday</option>
                      <option>Thursday</option>
                      <option>Friday</option>
                      <option>Saturday</option>
                    </Form.Select>
                  </Col>
                  <Col sm={4}>
                    <Form.Select defaultValue="Time">
                      <option>Time</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Form.Group>
            </Col>
          </Form.Group>
        </Form>
      </Box>
    </>
  );
};

export default Alerts;
Alerts;
