import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FormContainer } from "../components";

const RegisterPage = ({ location }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const redirect = location.search ? location.search.split("=")[1] : "";
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <FormContainer>
      <Card>
        <Card.Header as="h3">Create new account</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-4">
              <Form.Label htmlFor='name'>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                id='name'
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label htmlFor='email'>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                id='email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label htmlFor='password'>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                id='password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label htmlFor='confirmPassword'>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter confirm password"
                value={confirmPassword}
                id='confirmPassword'
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Button type="submit" variant="primary">
                Register
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col>
              Have an Account?{" "}
              <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
                Login
              </Link>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </FormContainer>
  );
};

export { RegisterPage };
