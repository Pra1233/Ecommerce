import React, { useContext } from "react";

import CartListing from "./CartListing";
import Modal from "./UI/Modal";
import "./Cart.css";
import CartContext from "../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  return (
    <Modal>
      <div className="head">
        <h3 className="h3">Cart</h3>
        <button className="button-close" onClick={props.onClose}>
          X
        </button>
      </div>
      <div className="cart-items">
        {cartCtx.items.map((i) => (
          <CartListing
            key={i.id}
            id={i.id}
            title={i.title}
            price={i.price}
            quantity={i.quantity}
            imageUrl={i.imageUrl}
          />
        ))}
      </div>
      <div className="actions">
        <button className="button">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
