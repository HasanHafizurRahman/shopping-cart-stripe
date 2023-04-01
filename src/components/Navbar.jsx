import React from "react";
import { Button, Container, Navbar, Modal } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Shopping-cart</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          Cart 0 items
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
