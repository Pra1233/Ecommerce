import React, { useContext } from "react";
import "./CartListing.css";
import { Button } from "react-bootstrap";
import CartContext from "../store/cart-context";

const CartListing = (props) => {
  const cartCtx = useContext(CartContext);

  const incrementQuantity = () => {
    // setQuantity(quantity + 1);
    cartCtx.addItems({ ...props, quantity: 1 });
  };

  const decrementQuantity = () => {
    cartCtx.decrementItems(props.id);
  };

  const removeItem = () => {
    cartCtx.removeItems(props.id);
  };
  return (
    <li className="li">
      <div>
        <h6 className="title">{props.title}</h6>
        {console.log(typeof props.image, "dsffffffffff", props)}
        <img src={props.image} alt="img.jpg" className="image" />
      </div>

      <div className="price">${props.price}</div>

      <div onClick={incrementQuantity} className="btn-div">
        +
      </div>
      <div className="quantity">X{props.quantity}</div>
      <div onClick={decrementQuantity} className="btn-div">
        -
      </div>

      <Button variant="success" className="button" onClick={removeItem}>
        Remove
      </Button>
    </li>
  );
};

export default CartListing;
