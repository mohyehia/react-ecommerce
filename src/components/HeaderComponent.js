import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const HeaderComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <LinkContainer to={"/"}>
          <Navbar.Brand>E-Commerce</Navbar.Brand>
        </LinkContainer>
        <LinkContainer to={"/products"}>
          <Nav.Link>Products</Nav.Link>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to={"/cart"}>
              <Nav.Link>
                <i className="fas fa-shopping-cart"></i> Cart
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/login"}>
              <Nav.Link>
                <i className="fas fa-user"></i> Login
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/register"}>
              <Nav.Link>
                <i className="fas fa-user-plus"></i> Register
              </Nav.Link>
            </LinkContainer>
            <NavDropdown title="My Profile" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Orders</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export { HeaderComponent };
