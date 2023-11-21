import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import CartContext from "../store/cart-context";
import "./CardList.css";

const CardList = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartListner = () => {
    console.log("first", props);
    cartCtx.addItems({ ...props, quantity: 1 }); //ADD TO CART
    console.log(props, "PROPS");
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} className="img-zoom" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>

      <Card.Body>
        <span
          style={{ fontSize: "large", marginRight: "2rem", fontWeight: "bold" }}
        >
          ${props.price}
        </span>
        <Button variant="primary" onClick={addToCartListner}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardList;
