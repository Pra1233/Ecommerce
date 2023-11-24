import React, { useContext } from "react";
import { Nav, Button } from "react-bootstrap";
import CartContext from "../store/cart-context";
import "./Header.css";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  let quantity = 0;
  cartCtx.items.forEach((i) => {
    quantity += +i.quantity;
  });
  return (
    <>
      <Nav className="justify-content-center header ">
        <Nav.Item className="col-3">
          <Nav.Link href="/home" className="nav">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="col-3">
          <Nav.Link href="/store" className="nav">
            Store
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="col-2">
          <Nav.Link href="/about" className="nav">
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="col-2">
          <Nav.Link href="/contactus" className="nav">
            ContactUs
          </Nav.Link>
        </Nav.Item>
        <Button variant="success" size="sm" onClick={props.onshowCart}>
          Cart
          <span>{quantity}</span>
        </Button>
      </Nav>
      <div className="head-2">
        <h1>The Generic</h1>
      </div>
    </>
  );
};

export default Header;
