import React from "react";
import { Card, Button } from "react-bootstrap";
import "./CardList.css";
const CardList = (props) => {
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
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default CardList;
