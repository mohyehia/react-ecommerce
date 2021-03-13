import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FormContainer } from "../components";

const LoginPage = ({ location }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "";
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <FormContainer>
      <Card>
        <Card.Header as="h3">Login to your account</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-4">
              <Form.Label htmlFor="email">Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Button type="submit" variant="primary">
                Login
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col>
              New Customer?{" "}
              <Link
                to={redirect ? `/register?redirect=${redirect}` : "/register"}
              >
                Register
              </Link>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </FormContainer>
  );
};

export { LoginPage };
