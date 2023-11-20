import React from "react";
import { Nav, Button } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Nav className="justify-content-center header ">
        <Nav.Item className="col-3">
          <Nav.Link href="/home" className="nav">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="col-3">
          <Nav.Link eventKey="/store" className="nav">
            Store
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="col-2">
          <Nav.Link eventKey="/about" className="nav">
            About
          </Nav.Link>
        </Nav.Item>
        <Button variant="success" size="sm">
          Cart
        </Button>
      </Nav>
      <div className="head-2">
        <h1>The Generic</h1>
      </div>
    </>
  );
};

export default Header;
