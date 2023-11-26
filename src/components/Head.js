import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import CartContext from "../store/cart-context";

import "./Head.css";

const Head = (props) => {
  const cartCtx = useContext(CartContext);
  let quantity = 0;
  cartCtx.items.forEach((i) => {
    quantity += +i.quantity;
  });
  return (
    <>
      <div className="row">
        <div className="col-2 ">
          <NavLink to="/home" activeClassName="onlink">
            Home
          </NavLink>
        </div>
        <div className="col-2">
          <NavLink to="/about" activeClassName="onlink">
            About
          </NavLink>
        </div>
        <div className="col-2">
          <NavLink activeClassName="onlink" to="/store">
            Store
          </NavLink>
        </div>
        <div className="col-2">
          <NavLink to="/contactus" activeClassName="onlink">
            ContactUs
          </NavLink>
        </div>
        <button className="col-2" onClick={props.onshowCart}>
          Cart
          <span className="btn_quantity">{quantity}</span>
        </button>
      </div>

      <div className="head-2">
        <h1>The Generic</h1>
      </div>
    </>
  );
};

export default Head;
