import React from "react";

import CartListing from "./UI/CartListing";
import Modal from "./UI/Modal";
import "./Cart.css";

const Cart = (props) => {
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];

  return (
    <Modal>
      <div className="head">
        <h3 className="h3">Cart</h3>
        <button className="button-close" onClick={props.onClose}>
          X
        </button>
      </div>
      <div className="cart-items">
        {cartElements.map((i) => (
          <CartListing
            key={i.title}
            title={i.title}
            price={i.price}
            quantity={i.quantity}
            image={i.imageUrl}
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
