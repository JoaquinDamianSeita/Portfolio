import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="sm" className="black" variant="dark" fixed="top">
    <Container>
      <Navbar.Brand href="#">Joaquin</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
        <Nav.Item>
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#sobremi">Sobre Mi</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
