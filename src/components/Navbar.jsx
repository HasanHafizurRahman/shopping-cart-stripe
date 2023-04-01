import React, { useState } from "react";
import { Button, Container, Navbar, Modal } from "react-bootstrap";

const NavbarComponent = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);
  return (
    <div>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Shopping-cart</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}>Cart 0 items</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleHide}></Modal>
    </div>
  );
};

export default NavbarComponent;
