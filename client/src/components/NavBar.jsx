import React from "react";
import {
  Navbar,
  Nav,
} from "react-bootstrap";

function NavBar() {
  return (
    <Navbar className="black" variant="dark">
      <div className="container">
      <Navbar.Brand href="#">Joaquin</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#sobremi">Sobre Mi</Nav.Link>
          <Nav.Link href="#contacto">Contacto</Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
}

export default NavBar;
