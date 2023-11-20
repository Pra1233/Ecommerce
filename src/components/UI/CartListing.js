import React from "react";
import "./CartListing.css";
import { Button } from "react-bootstrap";
const CartListing = (props) => {
  return (
    <li className="li">
      <div>
        <h6>{props.title}</h6>
        <img src={props.image} alt="img.jpg" className="image" />
      </div>

      <div className="price">${props.price}</div>
      <div className="quantity">X{props.quantity}</div>

      <Button variant="success" className="button">
        Show Cart
      </Button>
    </li>
  );
};

export default CartListing;
