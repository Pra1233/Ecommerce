import React, { useContext } from "react";
import { Route, NavLink } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import CartContext from "../../store/cart-context";
import Store from "../pages/Store";
import ContactUs from "../pages/ContactUs";
import "./Head.css";

const Head = (props) => {
  const cartCtx = useContext(CartContext);
  let quantity = 0;
  cartCtx.items.forEach((i) => {
    quantity += +i.quantity;
  });
  return (
    <>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/store">
        <Store />
      </Route>
      <Route path="/contactus">
        <ContactUs />
      </Route>
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
          <span>{quantity}</span>
        </button>
      </div>

      <div className="head-2">
        <h1>The Generic</h1>
      </div>
    </>
  );
};

export default Head;
