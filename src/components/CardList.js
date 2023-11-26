import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import CartContext from "../store/cart-context";

import "./CardList.css";
import { NavLink } from "react-router-dom";

const CardList = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartListner = () => {
    console.log("first", props);
    cartCtx.addItems({ ...props, quantity: 1 }); //ADD TO CART
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        {console.log(props.imageUrl, "dsdss")}
        <Card.Img variant="top" src={props.imageUrl} className="img-zoom" />

        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          {/* GETTING id */}
          <NavLink
            to={`/productDetail/${props.id}`}
            activeClassName="product_deatail_link"
          >
            {" "}
            Detail{" "}
          </NavLink>
        </Card.Body>

        <Card.Body>
          <span className="span">${props.price}</span>
          <Button variant="primary" onClick={addToCartListner}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
      {/* </Link> */}
    </>
  );
};

export default CardList;
